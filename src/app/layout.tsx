import type { Metadata } from "next";
import Script from "next/script";
import "./shared/styles/globals.scss";
import Footer from "./shared/Components/Footer/Footer";
import ScrollToTopButton from "./shared/Components/ScrollToTopButton/ScrollToTopButton";
import Navbar from "./shared/Components/Navbar/Navbar";
import WhatsAppButton from "./shared/Components/WhatsAppButton/WhatsAppButton";
import GoogleAnalytics from "./shared/Components/Analytics/google";

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
      <body>
        {/* Google Analytics */}
        <GoogleAnalytics />

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        {children}

        {/* Floating buttons */}
        <WhatsAppButton />
        <ScrollToTopButton />

        {/* Footer */}
        <Footer />

        {/* === Zoho SalesIQ Live Chat Widget === */}
        <Script id="zoho-init" strategy="afterInteractive">
          {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function(){} };
          `}
        </Script>
        <Script
          id="zoho-salesiq"
          strategy="afterInteractive"
          src="https://salesiq.zohopublic.com/widget?wc=siq6a532bee01e82351ccdcd99fba49f76e5b44b27b51f2b5e0e565315602bbfe03"
        />
      </body>
    </html>
  );
}
