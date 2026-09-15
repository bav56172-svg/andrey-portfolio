import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Андрей Балашов — веб-разработка и AI-автоматизация",
  description:
    "Сайты, веб-приложения, Telegram-боты и AI-автоматизация для бизнеса на Next.js, React и TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
