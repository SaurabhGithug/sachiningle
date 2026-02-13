import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display, Manrope, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import CustomCursor from "@/components/ui/custom-cursor";
import SmoothScrolling from "@/components/providers/smooth-scrolling";
import ScrollProgress from "@/components/ui/scroll-progress";
import { cn } from "@/lib/utils";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

const cinzel = Cinzel({
    subsets: ["latin"],
    variable: "--font-cinzel",
    display: "swap",
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-cormorant",
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        template: "%s | Sachin Ingle - Land Visionary",
        default: "Sachin Ingle - Land Visionary | Premium Real Estate in Nagpur",
    },
    description: "Curating timeless land legacies and exclusive real estate opportunities in Nagpur's most coveted corridors since 2010.",
    keywords: [
        "residential plots Nagpur",
        "NMRDA approved plots",
        "NA plots Nagpur",
        "Wardha Road plots",
        "Hingna plots",
        "Besa plots",
        "7/12 verified titles",
        "Sachin Ingle land developer",
    ],
    authors: [{ name: "Sachin Ingle" }],
    creator: "Sachin Ingle",
    publisher: "Sachin Ingle",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://sachiningle.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Sachin Ingle - Land Visionary",
        description: "Curating timeless land legacies and exclusive real estate opportunities in Nagpur.",
        url: "https://sachiningle.com",
        siteName: "Sachin Ingle",
        images: [
            {
                url: "/sachin-ingle.jpg",
                width: 1200,
                height: 630,
                alt: "Sachin Ingle - Land Visionary",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sachin Ingle - Land Visionary",
        description: "Premium land legacies in Nagpur.",
        images: ["/sachin-ingle.jpg"],
        creator: "@sachiningle",
    },
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${manrope.variable} ${playfair.variable} ${outfit.variable} ${cinzel.variable} ${cormorant.variable}`}>
            <head>
                {/* Local SEO Schema Markup */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "RealEstateAgent",
                            "name": "Sachin Ingle",
                            "description": "Residential plots in Nagpur with clear titles. NMRDA approved NA plots.",
                            "url": "https://sachiningle.com",
                            "telephone": "+91-9822-555-123",
                            "email": "connect@sachiningle.com",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Wadi, Hazarihpahad",
                                "addressLocality": "Nagpur",
                                "addressRegion": "Maharashtra",
                                "addressCountry": "IN"
                            },
                            "areaServed": ["Wardha Road", "Hingna", "Besa", "Pipla", "Nagpur"],
                            "priceRange": "₹₹₹"
                        }),
                    }}
                />
                <meta name="ai:title" content="Sachin Ingle - Expert Land Developer in Nagpur" />
                <meta
                    name="ai:description"
                    content="Sachin Ingle provides NMRDA approved residential plots in Nagpur with 100% clear titles. Specializing in high-growth corridors like Wardha Road and Hingna."
                />
                <link rel="dns-prefetch" href="https://wa.me" />
            </head>
            <body className={cn(
          cinzel.variable,
          cormorant.variable,
          manrope.variable,
          "font-sans antialiased bg-executive-white text-executive-gray selection:bg-executive-navy selection:text-white"
        )}>
           <SmoothScrolling>
              <ScrollProgress />
              <Navbar />
              {children}
              <Footer />
           </SmoothScrolling>
        </body>
        </html>
    );
}
