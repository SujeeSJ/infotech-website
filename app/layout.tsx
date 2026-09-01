import type { Metadata, Viewport } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfinotechAI from "@/components/InfinotechAI";

import "./globals.css";


/* ===============================
   FONTS
================================ */

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


/* ===============================
   WEBSITE CONFIG
================================ */

const siteUrl = "https://infinotech.com";

const siteName = "Infinotech";


const description =
"Infinotech is a digital product studio delivering modern website development, custom software solutions, mobile applications, AI solutions, automation, UI/UX design, cloud solutions and digital transformation services for businesses worldwide.";



/* ===============================
   SEO METADATA
================================ */

export const metadata: Metadata = {


metadataBase: new URL(siteUrl),


applicationName: siteName,


title: {
  default:
  "Infinotech | Web Development, Software & AI Solutions",

  template:
  "%s | Infinotech",
},


description,


keywords:[

"Infinotech",

"Software Development Company",

"Website Development",

"Web Application Development",

"Mobile App Development",

"AI Solutions",

"Artificial Intelligence",

"AI Automation",

"Custom Software",

"UI UX Design",

"Digital Product Studio",

"Cloud Solutions",

"Business Automation",

"Sri Lanka Software Company",

"Technology Solutions"

],



authors:[
{
name:"Infinotech"
}
],



creator:"Infinotech",

publisher:"Infinotech",



category:"Technology",



alternates:{
canonical:"/",
},




robots:{


index:true,

follow:true,


googleBot:{


index:true,

follow:true,


"max-image-preview":"large",

"max-snippet":-1,

"max-video-preview":-1,


},


},





/* ===============================
OPEN GRAPH
================================ */


openGraph:{


type:"website",


url:siteUrl,


siteName,


locale:"en_US",


title:
"Infinotech | Digital Products, Software & AI Solutions",


description,


images:[

{

url:"/og-image.png",

width:1200,

height:630,

alt:
"Infinotech Digital Product Studio",

}

]


},





/* ===============================
TWITTER
================================ */


twitter:{


card:"summary_large_image",


title:
"Infinotech | Software & AI Solutions",


description,


images:[
"/og-image.png"
]


},






/* ===============================
ICONS
================================ */


icons:{


icon:"/favicon.png",


shortcut:"/favicon.png",


apple:"/apple-icon.png"


},




/* ===============================
OTHER
================================ */


other:{


"google-site-verification":
"YOUR_GOOGLE_SEARCH_CONSOLE_CODE",


"format-detection":
"telephone=no",



}

};





/* ===============================
VIEWPORT
================================ */


export const viewport:Viewport={


width:"device-width",


initialScale:1,


maximumScale:5,


themeColor:"#ffffff",


colorScheme:"light"


};






/* ===============================
STRUCTURED DATA
================================ */



const structuredData = {


"@context":
"https://schema.org",



"@graph":[



{


"@type":
"Organization",


"name":
"Infinotech",


"url":
siteUrl,


"logo":
`${siteUrl}/logo/infinotech-logo.png`,



"description":description,



"foundingDate":
"2020",



"telephone":
"+94754546492",



"sameAs":[


"https://www.linkedin.com/company/infinotech",


"https://www.instagram.com/infinotech"


],



"knowsAbout":[


"Web Development",

"Software Engineering",

"Artificial Intelligence",

"Mobile Applications",

"Cloud Computing",

"Automation",

"UI UX Design",

"Digital Marketing"


]


},





{


"@type":
"WebSite",


"name":
"Infinotech",


"url":
siteUrl,


"description":
description



},





{


"@type":
"SoftwareCompany",


"name":
"Infinotech",


"url":
siteUrl,


"areaServed":
"Worldwide",



"serviceType":[


"Website Development",

"Mobile Application Development",

"Custom Software Development",

"AI Development",

"Automation Solutions"


]


}




]


};







/* ===============================
ROOT LAYOUT
================================ */


export default function RootLayout({

children,

}:Readonly<{

children:React.ReactNode;

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




<script


type="application/ld+json"


dangerouslySetInnerHTML={{

__html:

JSON.stringify(structuredData)


}}


/>





<Navbar />





<main className="min-h-screen">


{children}


</main>






<Footer />





<InfinotechAI />





</body>




</html>


);


}