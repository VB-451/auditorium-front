import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarServer from "@/components/navbar/navbar-server";
import Sidebar from "@/components/sidebar/sidebar";
import {LoadingProvider} from "@/providers/LoadingProvider";
import {NotificationProvider} from "@/providers/NotificationProvider";


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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div id="toast-root" className="fixed inset-0 z-[999999] pointer-events-none" />
      <LoadingProvider>
          <NotificationProvider>
              <NavbarServer />
              <Sidebar />
              <main className="ml-10 pt-20 pl-10 pr-6 overflow-y-auto h-screen flex flex-col">
                  {children}
              </main>
          </NotificationProvider>
      </LoadingProvider>
      </body>

      </html>

  );
}
