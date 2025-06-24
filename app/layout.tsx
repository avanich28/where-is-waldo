import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { GameProvider } from "@/app/_contexts/GameContext";
import { ThemeProvider } from "@/app/_contexts/ThemeContext";
import { UserProvider } from "@/app/_contexts/UserContext";
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
        <Toaster position="top-center" />

        <ThemeProvider>
          <UserProvider>
            <GameProvider>
              <Header />
              {children}
              <Footer />
            </GameProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
