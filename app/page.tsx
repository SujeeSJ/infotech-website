import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Trust from "@/components/trust";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import CTA from "@/components/CTA";


/* ----------------------------------
   HOME PAGE SEO
----------------------------------- */

const title =
  "Infinotech | Web, Software, Mobile & AI Solutions";

const description =
  "Infinotech builds modern websites, web apps, mobile apps, custom software, AI integrations and automation for businesses ready to grow.";


export const metadata: Metadata = {
  title: {
    absolute: title,
  },

  description,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    siteName: "Infinotech",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};


/* ----------------------------------
   WEBSITE STRUCTURED DATA
----------------------------------- */

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: "Infinotech",

  url: "https://infinotech.com",

  description,

  publisher: {
    "@type": "Organization",
    name: "Infinotech",
  },
};


/* ----------------------------------
   HOME PAGE
----------------------------------- */

export default function Home() {
  return (
    <main>

      {/* HOME PAGE STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            websiteSchema
          ),
        }}
      />


      <Hero />

      <Trust />

      <Services />

      <Projects />

      <Process />

      <CTA />

    </main>
  );
}