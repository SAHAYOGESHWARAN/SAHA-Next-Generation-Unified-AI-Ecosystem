import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "SAHA NEXUS AI - All-in-One AI & Technology Ecosystem",
  description: "Discover, integrate, and manage AI tools, models, and open-source technologies in one unified platform.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-cyber text-gray-100">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
