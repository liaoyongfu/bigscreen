import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MENUS } from "./global";
import Header from "./components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <div className="flex flex-col h-full bg-gray-100">
          <Header menus={MENUS} active="/" />
          <div className="flex-1 flex justify-center my-4">
            <div className="basis-2/3 bg-white p-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
