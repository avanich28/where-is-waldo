import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/app/_contexts/ThemeContext";
import { GameProvider } from "@/app/_contexts/GameContext";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | SpotHunt",
    default: "SpotHunt",
  },
  description: "A finding hidden characters game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col space-between gap-2 lg:gap-3 h-screen bg-light-bg dark:bg-dark-bg dark:text-dark-text">
        <ThemeProvider>
          <GameProvider>
            <Header />
            {children}
            <Footer />
          </GameProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
