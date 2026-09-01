import type { Metadata, Viewport } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfinotechAI from "@/components/InfinotechAI";

import "./globals.css";


/* ----------------------------------
   FONTS
----------------------------------- */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});


/* ----------------------------------
   SITE CONFIG
----------------------------------- */

const siteUrl = "https://infinotech.com";

const siteName = "Infinotech";

const siteDescription =
  "Infinotech is a digital technology studio building modern websites, web applications, mobile apps, custom software, AI-powered solutions, automation and digital experiences for businesses.";


/* ----------------------------------
   GLOBAL SEO METADATA
----------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),


  /* APP / BRAND */

  applicationName: siteName,

  creator: "Infinotech",

  publisher: "Infinotech",

  category: "Technology",


  /* TITLE */

  title: {
    default:
      "Infinotech | Digital Products, Software & AI Solutions",

    template:
      "%s | Infinotech",
  },


  /* DESCRIPTION */

  description: siteDescription,


  /* CANONICAL */

  alternates: {
    canonical: "/",
  },


  /* SEARCH ENGINE */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },


  /* OPEN GRAPH
     Used by WhatsApp, Facebook,
     LinkedIn and other platforms
  */

  openGraph: {
    type: "website",

    locale: "en_US",

    url: siteUrl,

    siteName,

    title:
      "Infinotech | Digital Products, Software & AI Solutions",

    description: siteDescription,
  },


  /* X / TWITTER CARD */

  twitter: {
    card: "summary_large_image",

    title:
      "Infinotech | Digital Products, Software & AI Solutions",

    description: siteDescription,
  },


  /* ICON */

  icons: {
    icon: [
      {
        url: "/logo/infinotech-icon.png",
      },
    ],

    shortcut: "/logo/infinotech-icon.png",

    apple: "/logo/infinotech-icon.png",
  },


  /* OTHER */

  other: {
    "format-detection": "telephone=no",
  },
};


/* ----------------------------------
   VIEWPORT
----------------------------------- */

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  maximumScale: 5,

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },

    {
      media: "(prefers-color-scheme: dark)",
      color: "#080808",
    },
  ],

  colorScheme: "light",
};


/* ----------------------------------
   STRUCTURED DATA
----------------------------------- */

const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  name: "Infinotech",

  url: siteUrl,

  logo: `${siteUrl}/logo/infinotech-icon.png`,

  description: siteDescription,

  foundingDate: "2020-12-08",

  telephone: "+94754546492",

  parentOrganization: {
    "@type": "Organization",
    name: "Apexx Private Limited",
  },

  knowsAbout: [
    "Web Development",
    "Web Applications",
    "Mobile Applications",
    "Custom Software Development",
    "UI/UX Design",
    "Artificial Intelligence",
    "AI Automation",
    "Cloud Computing",
    "DevOps",
    "Database Solutions",
    "E-Commerce",
    "Digital Marketing",
  ],
};


/* ----------------------------------
   ROOT LAYOUT
----------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          min-h-screen
          bg-white
          font-sans
          text-black
          antialiased
        `}
      >

        {/* STRUCTURED DATA */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                organizationSchema
              ),
          }}
        />


        {/* GLOBAL NAVIGATION */}

        <Navbar />


        {/* PAGE CONTENT */}

        <div className="min-h-screen">
          {children}
        </div>


        {/* GLOBAL FOOTER */}

        <Footer />


        {/* GLOBAL AI ASSISTANT */}

        <InfinotechAI />

      </body>
    </html>
  );
}