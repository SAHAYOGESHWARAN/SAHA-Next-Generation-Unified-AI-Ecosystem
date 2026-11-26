'use client';

import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VoiceControlProps {
  onCommand: (command: string) => void;
  isEnabled: boolean;
}

export default function VoiceControl({ onCommand, isEnabled }: VoiceControlProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (!isEnabled) return;

    // Initialize Web Speech API
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('Speech Recognition not supported');
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onstart = () => {
      setIsListening(true);
      setTranscript('');
    };

    recognitionRef.current.onresult = (event: any) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptSegment = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          onCommand(transcriptSegment.toLowerCase());
          speakResponse(`Executing: ${transcriptSegment}`);
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
  }, [isEnabled, onCommand]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      recognitionRef.current?.start();
    }
  };

  const speakResponse = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!isEnabled) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {/* Transcript display */}
        {transcript && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-4 p-4 rounded-lg bg-slate-800/90 backdrop-blur border border-cyan-500/30 text-cyan-300 font-mono text-sm max-w-xs"
          >
            {transcript}
          </motion.div>
        )}
      </AnimatePresence>

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
        <motion.p
          className="absolute right-20 top-1/2 transform -translate-y-1/2 text-xs text-slate-400 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Click to speak
        </motion.p>
      )}
    </div>
  );
}
