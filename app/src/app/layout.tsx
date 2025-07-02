import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import "@/styles/font.css";
import BrowserInfo from "@/components/BrowserInfo";
import LocationInfo from "@/components/LocationInfo";
import LocationCountryInfo from "@/components/LocationCountryInfo";
import MainInfo from "@/components/MainInfo";

export const metadata: Metadata = {
  title: "Atakan Akın | Full Stack Developer",
    description: "Full Stack Developer",
    icons: '/site-favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <link
              href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Titillium+Web:wght@400&display=swap"
              rel="stylesheet"/>
      </head>
      <body className="container mx-auto p-10 min-h-screen flex flex-col">
      <div className="background rounded-4xl flex-1 p-5 flex flex-col justify-between">
         <MainInfo>
             {children}
         </MainInfo>
      </div>
      </body>

      </html>
  );
}
