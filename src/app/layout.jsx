// 'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/context/ThemeContext";
// import { headers } from 'next/headers';
// import { usePathname } from 'next/navigation';

import Providers from "./providers";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jeet Wasti",
  description: "Jeet Wasti",
};



export default function RootLayout({ children }) {
  // const pathname = usePathname();

  // console.log(pathname);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>


        <Providers>
          <div className="container">

            {children}
            <Script src="https://unpkg.com/sheryjs/dist/Shery.js" strategy="afterInteractive" />

            <Script
              src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
              strategy="afterInteractive"
            />

            <Script
              src="https://cdn.jsdelivr.net/gh/automat/controlkit.js@master/bin/controlKit.min.js"
              strategy="afterInteractive"
            />

          </div>
        </Providers>
      </body>
    </html>
  );
}
