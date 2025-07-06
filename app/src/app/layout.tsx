import type { Metadata } from "next";
import "@/styles/globals.css";
import React from "react";
import "@/styles/font.css";
import MainInfo from "@/components/MainInfo";
import Navigation from "@/components/Navigation";

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
          <title>Atakan Akın | Full Stack Developer</title>
      </head>
      <body className="container mx-auto p-10 min-h-screen flex flex-col">
      <main className="background rounded-4xl flex-1 p-5 flex flex-col justify-between mb-2 mt-2">
          <MainInfo>
              {children}
          </MainInfo>
      </main>
      <nav
          className="absolute bottom-7 left-1/2 transform -translate-x-1/2 bg-[#3D3D3D] rounded-4xl px-13 py-2.5">
          <Navigation/>
      </nav>
      </body>
      </html>
  );
}
