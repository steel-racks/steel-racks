import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Preloader from "../components/Preloader";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const siteUrl = "https://www.steelsrack.com";
const businessName = "Al Najim Al Satie Steel Shelfs Trdg";
const siteDescription =
  "Al Najim Al Satie Steel Shelfs Trdg supplies pallet racks, heavy-duty racks, shelving, mezzanine flooring and steel fabrication for warehouses and businesses in Sharjah, UAE.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Al Najim Steel Shelves | Warehouse Racks in Sharjah",
    template: "%s | Al Najim Steel Shelves",
  },
  description: siteDescription,
  applicationName: businessName,
  category: "industrial storage and material handling",
  classification: "Warehouse racking, shelving and steel fabrication",
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,
  keywords: [
    "Al Najim Al Satie",
    "steel shelves trading Sharjah",
    "warehouse racking Sharjah",
    "warehouse shelving UAE",
    "pallet racks",
    "heavy duty racks",
    "supermarket shelving",
    "material handling systems",
    "mezzanine flooring Sharjah",
    "steel fabrication Sharjah",
    "aluminium fabrication Sharjah",
    "car parking sheds Sharjah",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Al Najim Steel Shelves | Warehouse Racks in Sharjah",
    description: siteDescription,
    url: `${siteUrl}/`,
    siteName: businessName,
    images: [
      {
        url: `${siteUrl}/hero-attractive.png`,
        width: 2048,
        height: 768,
        alt: "Modern warehouse pallet racking and storage systems",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Najim Steel Shelves | Warehouse Racks in Sharjah",
    description: siteDescription,
    images: [`${siteUrl}/hero-attractive.png`],
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
  other: {
    "geo.region": "AE-SH",
    "geo.placename": "Sharjah, United Arab Emirates",
    "geo.position": "25.2916171;55.4475669",
    ICBM: "25.2916171, 55.4475669",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${siteUrl}/#business`,
      name: businessName,
      alternateName: "Al Najim Al Satie Trading",
      description: siteDescription,
      image: [
        `${siteUrl}/hero-attractive.png`,
        `${siteUrl}/al-najim-logo.png`,
      ],
      logo: `${siteUrl}/al-najim-logo.png`,
      url: `${siteUrl}/`,
      telephone: ["+971507146645", "+971558219504"],
      email: ["najimsatiracks@gmail.com", "john.alnajim@gmail.com"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Muweilah",
        postOfficeBoxNumber: "1747",
        addressLocality: "Sharjah",
        addressRegion: "Sharjah",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.2916171,
        longitude: 55.4475669,
      },
      hasMap: "https://maps.app.goo.gl/eFdiiW3SESDivbUR6",
      areaServed: [
        { "@type": "City", name: "Sharjah" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      sameAs: ["https://www.linkedin.com/company/alnajimalsatie/"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Warehouse racking, storage and fabrication services",
        itemListElement: [
          "Pallet racks",
          "Heavy duty racks",
          "Supermarket shelving and storage systems",
          "Slotted angle shelves",
          "Mezzanine flooring with rack support",
          "Aluminium fabrication",
          "Structural fabrication",
          "MS stainless steel fabrication",
          "Car parking sheds",
          "Fence cabana with wooden bench",
          "Retractable shades",
          "Interior decor",
          "Shearing",
          "Bending",
          "Lasering and notching",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
      knowsAbout: [
        "Pallet racks",
        "Heavy duty racks",
        "Supermarket shelving",
        "Mezzanine flooring",
        "Aluminium fabrication",
        "Stainless steel fabrication",
        "Structural fabrication",
        "Car parking sheds",
        "Retractable shades",
        "Interior decor",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: businessName,
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: "en-AE",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: "Warehouse Racks and Steel Fabrication in Sharjah",
      description: siteDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#business` },
      inLanguage: "en-AE",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=4" sizes="any" />
        <link rel="icon" type="image/png" href="/icon.png?v=4" sizes="512x512" />
        <link rel="apple-touch-icon" type="image/png" href="/apple-icon.png?v=4" sizes="512x512" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
