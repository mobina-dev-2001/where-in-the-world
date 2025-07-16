import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import ToggleThemeBtn from "./components/toggleThemeBtn";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "---",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${nunitoSans.variable} min-h-screen py-[clamp(6.5rem,20vw,8rem)] px-[clamp(1rem,6vw,4.75rem)] bg-grey-50 dark:bg-blue-950 antialiased text-grey-950 dark:text-white font-nunito-sans`}
      >
        <ThemeProvider>
          <header className="fixed top-0 inset-x-0 z-10 flex justify-between items-center h-[5rem] px-[clamp(1rem,6vw,4.75rem)] bg-white dark:bg-blue-900 shadow-[0_2px_4px_#0000000E]">
            <h1 className="text-[clamp(.875rem,2vw,1.5rem)] font-extrabold">
              Where in the world?
            </h1>
            <ToggleThemeBtn />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
