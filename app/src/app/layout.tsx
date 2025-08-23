import type { Metadata } from "next";
import "@/styles/globals.css";
import React from "react";
import "@/styles/font.css";
import MainInfo from "@/components/MainInfo";
import Navigation from "@/components/Navigation";
import styles from "@/styles/homepage.module.css";
import {ToastContainer} from "react-toastify";

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
      <body className="mx-auto p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 min-h-screen flex flex-col">
      <main className="background rounded-2xl sm:rounded-3xl md:rounded-4xl flex-1 p-3 sm:p-4 md:p-5 flex flex-col justify-between mb-2 mt-2">
          <MainInfo>
              <ToastContainer position="top-right" autoClose={3000} theme="dark" />
              {children}
          </MainInfo>
          <div
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none 
              ${styles.backgroundPointer}`}
          />
      </main>
      <nav
          className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-7 left-1/2 transform -translate-x-1/2 bg-[#3D3D3D]
          rounded-full sm:rounded-2xl md:rounded-3xl lg:rounded-4xl px-3 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 lg:px-13">
          <Navigation/>
      </nav>
      </body>
      </html>
  );
}
