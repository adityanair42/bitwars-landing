import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Mono, Inter } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  weight: ['400', '700'], 
  subsets: ["latin"],
  variable: "--font-space-mono",  
});

export const metadata: Metadata = {
  title: "BITWARS 3.0 — IEEE CS VIT Chennai",
  description: "Competitive Programming + Hackathon · 7–8 March 2026 · MG Auditorium, VIT Chennai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
