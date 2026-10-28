import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Подключение VK ID",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VkAuthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
