import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Aclonica } from "next/font/google";
import { Donegal_One } from "next/font/google";
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

const aclonica = Aclonica({
  variable: "--font-aclonica",
  subsets: ["latin"],
  weight: ["400"],
});

const donegalOne = Donegal_One({
  variable: "--font-donegal-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  // Basic metadata
  title: "eDiscovery Automation | Lab Automation Solutions",
  description:
    "Your trusted partner for lab automation products, marketing, sales, and technical support in India. Specializing in automated solutions for water analysis, soil testing, drug discovery, and more.",

  // Open Graph metadata for social sharing
  openGraph: {
    title: "eDiscovery Automation | Lab Automation Solutions",
    description:
      "Leading provider of lab automation solutions in India. Partners with SEAL Analytical, Zinsser, and more for water analysis, soil testing, and drug discovery automation.",
    url: "https://www.ediscoveryautomation.com",
    siteName: "eDiscovery Automation",
    images: [
      {
        url: "/assets/logoBG.jpg",
        width: 1200,
        height: 630,
        alt: "eDiscovery Automation Lab Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "eDiscovery Automation | Lab Automation Solutions",
    description: "Leading provider of lab automation solutions in India",
    images: ["/assets/logoBG.jpg"],
  },

  // Additional SEO metadata
  keywords:
    "lab automation, water analysis, soil testing, drug discovery, SEAL Analytical, Zinsser, laboratory equipment, India, automation solutions",

  // Robots metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification for search consoles
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },

  // Icons (keeping existing icons configuration)
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/assets/logo.png",
    },
  },

  // Manifest for PWA
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${aclonica.variable} ${donegalOne.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
