import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "eDiscovery Automation | Lab Automation Solutions",
  description:
    "Your trusted partner for lab automation products, marketing, sales, and technical support in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ 
        fontFamily: 'var(--font-inter), sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
