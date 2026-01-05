import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarServer from "@/components/navbar/navbar-server";
import Sidebar from "@/components/sidebar/sidebar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Auditorium",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <NavbarServer/>
      <Sidebar />
      <main className="ml-10 pt-20 pl-10 pr-6 overflow-y-auto h-screen">
        {children}
      </main>
    </body>
    </html>
  );
}
