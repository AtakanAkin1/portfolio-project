import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import "@/styles/font.css";

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
      <body>
      {children}
      </body>
      </html>
  );
}
