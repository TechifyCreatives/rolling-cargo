import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./shared/styles/globals.scss";
import Footer from "./shared/Components/Footer/Footer";
import ScrollToTopButton from "./shared/Components/ScrollToTopButton/ScrollToTopButton";
import Navbar from "./shared/Components/Navbar/Navbar";
import WhatsAppButton from "./shared/Components/WhatsAppButton/WhatsAppButton";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rolling Cargo",
  description:
    "A world class cargo company in the World. We do both local and international shipping. Be it By air, By sea or By land. We do it all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
