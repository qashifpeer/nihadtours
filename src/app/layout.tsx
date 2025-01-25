import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nihad Travels",
  description: "Explore Kashmir with us",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PJM4Z7X4" />
      <body className="">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJM4Z7X4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
