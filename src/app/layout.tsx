import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";

const michromaSans = Michroma({
  weight: "400",
  variable: "--font-michroma-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10e10 fund",
  description: "10e10 fund",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${michromaSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
