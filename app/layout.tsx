import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/sections/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400","600","700"]});

export const metadata: Metadata = {
  title: "Solano Azul | Del Pacifico a tu mesa",
  description: "Landing oficial de Solano Azul, marca de atún del Pacífico colombiano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased bg-blanco text-azulMarino`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
