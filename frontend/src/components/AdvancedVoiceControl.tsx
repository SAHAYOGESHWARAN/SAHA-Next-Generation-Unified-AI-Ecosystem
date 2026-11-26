'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Mic, MicOff, Volume2, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdvancedVoiceControlProps {
  onCommand: (command: string, language: string) => void;
  isEnabled: boolean;
}

const LANGUAGES = {
  en: { name: 'English', code: 'en-US' },
  es: { name: 'Español', code: 'es-ES' },
  fr: { name: 'Français', code: 'fr-FR' },
  de: { name: 'Deutsch', code: 'de-DE' },
  it: { name: 'Italiano', code: 'it-IT' },
  pt: { name: 'Português', code: 'pt-BR' },
  ru: { name: 'Русский', code: 'ru-RU' },
  ja: { name: '日本語', code: 'ja-JP' },
  zh: { name: '中文', code: 'zh-CN' },
  hi: { name: 'हिन्दी', code: 'hi-IN' },
  ar: { name: 'العربية', code: 'ar-SA' },
  ko: { name: '한국어', code: 'ko-KR' },
};

export default function AdvancedVoiceControl({ onCommand, isEnabled }: AdvancedVoiceControlProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showLanguages, setShowLanguages] = useState(false);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Define speak function first
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = LANGUAGES[language as keyof typeof LANGUAGES].code;
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.onend = () => setIsSpeaking(false);
      synthRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  }, [language]);

  useEffect(() => {
    if (!isEnabled) return;

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('Speech Recognition not supported');
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = LANGUAGES[language as keyof typeof LANGUAGES].code;

    recognitionRef.current.onstart = () => {
      setIsListening(true);
      setTranscript('');
    };

    recognitionRef.current.onresult = (event: any) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptSegment = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          onCommand(transcriptSegment.toLowerCase(), language);
          speak(`Processing your command: ${transcriptSegment}`);
        } else {
          interim += transcriptSegment;
        }
      }
      setTranscript(interim);
    };

    recognitionRef.current.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [isEnabled, language, onCommand, speak]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      recognitionRef.current?.start();
    }
  };

  if (!isEnabled) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Language Selector */}
      <AnimatePresence>
        {showLanguages && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-4 p-3 rounded-lg bg-slate-900/95 backdrop-blur border border-cyan-500/30 grid grid-cols-3 gap-2 max-w-xs"
          >
            {Object.entries(LANGUAGES).map(([code, { name }]) => (
              <motion.button
                key={code}
                onClick={() => {
                  setLanguage(code);
                  setShowLanguages(false);
                }}
                className={`text-xs px-2 py-1 rounded transition ${language === code
                  ? 'bg-cyan-500/50 text-cyan-200 border border-cyan-400'
                  : 'bg-slate-800 text-slate-300 border border-slate-600 hover:border-cyan-500/50'
                  }`}
              >
                {name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transcript display */}
      <AnimatePresence>
        {transcript && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-4 p-4 rounded-lg bg-slate-800/90 backdrop-blur border border-cyan-500/30 text-cyan-300 font-mono text-sm max-w-xs"
          >
            🎤 Listening: {transcript}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Language Toggle Button */}
      <motion.button
        onClick={() => setShowLanguages(!showLanguages)}
        className="mb-3 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg shadow-purple-500/50 flex items-center justify-center hover:shadow-lg hover:shadow-purple-400/70 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-6 h-6 text-white" />
      </motion.button>

      {/* Voice control button */}
      <motion.button
        onClick={toggleListening}
        className={`relative w-16 h-16 rounded-full font-bold transition duration-300 flex items-center justify-center ${isListening
          ? 'bg-gradient-to-r from-red-500 to-pink-500 shadow-lg shadow-red-500/50'
          : isSpeaking
            ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/50'
            : 'bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/50 hover:shadow-lg hover:shadow-cyan-400/70'
          }`}
        whileHover={{ scale: isListening ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isListening ? (
          <Mic className="w-7 h-7 text-white animate-pulse" />
        ) : isSpeaking ? (
          <Volume2 className="w-7 h-7 text-white animate-bounce" />
        ) : (
          <MicOff className="w-7 h-7 text-white" />
        )}

        {/* Listening animation */}
        {isListening && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-red-400"
              animate={{ scale: [1, 1.3], opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-pink-400"
              animate={{ scale: [1, 1.5], opacity: [1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </>
        )}
      </motion.button>

      {/* Help text */}
      {!isListening && !isSpeaking && (
        <motion.div
          className="absolute right-20 top-1/2 transform -translate-y-1/2 text-xs text-slate-400 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>🎤 Speak now</p>
          <p>🌐 {LANGUAGES[language as keyof typeof LANGUAGES].name}</p>
        </motion.div>
      )}
    </div>
  );
}
