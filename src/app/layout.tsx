import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
