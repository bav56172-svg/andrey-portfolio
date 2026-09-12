import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Андрей Балашов — веб-разработка и AI-автоматизация",
  description:
    "Начинающий веб-разработчик и AI-инженер. Сайты, лендинги, Telegram-боты, AI-агенты.",
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
