import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "./site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["cyrillic", "latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Portfolio v2",
  authors: [{ name: "Андрей Балашов", url: "https://github.com/bav56172-svg" }],
  creator: "Андрей Балашов",
  category: "technology",
  keywords: [
    "веб-разработка",
    "Next.js",
    "TypeScript",
    "AI-автоматизация",
    "Telegram-боты",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Андрей Балашов — портфолио",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${fraunces.variable} ${jetBrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
