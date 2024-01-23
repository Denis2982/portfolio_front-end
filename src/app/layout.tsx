import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Portfolio Front-end",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="backgroundBody">
      <body >
        <Header />
        {children}
        <div className="backgroundMain" />
        <div className="backgroundImage"></div>
        <Footer />
      </body>
    </html>
  );
}
