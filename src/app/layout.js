// src/app/layout/js
"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import "aos/dist/aos.css";
import "../../public/scss/main.scss";
import "rc-slider/assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DM_Sans, Poppins } from "next/font/google";
import { useEffect } from "react";

// Fonts configuration
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--body-font-family",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--title-font-family",
});

export default function RootLayout({ children, params }) {
  const locale = params?.locale || "es"; // Default locale to "es"

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang={locale}> 
      <body className={`body ${poppins.variable} ${dmSans.variable}`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}