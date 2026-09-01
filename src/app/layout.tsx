import type { Metadata } from "next";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "AB Tomic | Mundo Atleta",
  description:
    "Aparelho Abdominal AB Tomic 6 em 1. Treine abdômen, lombar, braços e pernas em casa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <MetaPixel />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
