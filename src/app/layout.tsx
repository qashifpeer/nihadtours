import type { Metadata } from 'next'
import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Nihad Travels',
  description: 'Explore Kashmir with us',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className=''>
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>

    </html>
  );
}
