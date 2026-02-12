import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CustomCursor from "@/components/vogue/cursor";
import ConsentBanner from "@/components/shared/consent-banner";

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

export const metadata: Metadata = {
    title: "Sachin Ingle — Land Visionary | Nagpur",
    description:
        "Sachin Ingle: Building land legacies in Nagpur since 2010. Specializing in clear-title development across Wardha Road, Hingna, and Besa.",
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
        title: "Residential Plots in Nagpur | NMRDA Approved | Sachin Ingle",
        description:
            "Buy residential plots in Nagpur with clear 7/12 verified titles. NMRDA approved NA plots in Wardha Road, Hingna, Besa.",
        url: "https://sachiningle.com",
        siteName: "Sachin Ingle",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Residential Plots in Nagpur | Sachin Ingle",
        description: "NMRDA approved NA plots with clear 7/12 verified titles.",
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
        <html lang="en" className={`${inter.variable} ${manrope.variable} ${playfair.variable} ${outfit.variable}`}>
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
                            "email": "hello@sachiningle.com",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "42, Civil Lines",
                                "addressLocality": "Nagpur",
                                "addressRegion": "Maharashtra",
                                "postalCode": "440001",
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
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
                <link rel="dns-prefetch" href="https://wa.me" />
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="antialiased font-sans">
                <CustomCursor />
                <Navbar />
                {children}
                <ConsentBanner />
                <Footer />
            </body>
        </html>
    );
}
