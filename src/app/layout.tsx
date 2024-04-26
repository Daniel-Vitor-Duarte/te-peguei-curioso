import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Tagmanager from "./Tagmanager";
import Tagmanager2 from "./Tagmanager2";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fluxo",
  description: "NÃO SEJA ANSIOSO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        
        {children}
        </body>
    </html>
  );
}
