'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import SpotlightCard from '@/components/ui/spotlight-card';
import Script from 'next/script';

const allArticles = [
    {
        slug: 'why-nagpur-land-2026',
        category: 'Market Insight',
        title: 'Why Nagpur Is the Smartest Land Investment in 2026',
        excerpt: 'With MIHAN expansion, Nagpur Metro Phase 2, and the Samruddhi Expressway now operational, land prices along Wardha Road, Besa, and Hingna corridors are appreciating 15-25% annually. A data-driven analysis of why Nagpur stands out as India\'s top emerging city for real estate.',
        date: '2026-02-10',
        displayDate: 'Feb 10, 2026',
        readTime: '5 min read',
        image: '/nagpur_growth_chart_abstract.png',
        keywords: ['nagpur land investment', 'plot investment nagpur', 'nagpur real estate 2026', 'MIHAN plots', 'Samruddhi Expressway land'],
    },
    {
        slug: 'nmrda-approved-plots-guide',
        category: 'Buyer Guide',
        title: 'NMRDA Approved Plots in Nagpur: Complete Buying Guide 2026',
        excerpt: 'Everything you need to know about NMRDA-sanctioned layouts — why approval matters for bank loans, how to verify layout sanction numbers on the NMRDA portal, which areas offer the most verified residential plots, and how to avoid illegal developments.',
        date: '2026-02-05',
        displayDate: 'Feb 5, 2026',
        readTime: '8 min read',
        image: '/nmrda_blueprint_plot.png',
        keywords: ['NMRDA approved plots nagpur', 'NMRDA layout verification', 'authority approved plots nagpur', 'NMRDA sanctioned layouts'],
    },
    {
        slug: 'best-areas-plot-investment-nagpur',
        category: 'Market Insight',
        title: 'Top 10 Areas to Buy Plots in Nagpur for Maximum Returns',
        excerpt: 'A comprehensive ranking of Nagpur\'s best localities for plot investment: Wardha Road (₹2,200-4,500/sqft), Besa-Pipla (₹4,000-6,500/sqft), MIHAN (₹6,500-8,000/sqft), Hingna, Koradi Road, and more — with appreciation data and infrastructure analysis.',
        date: '2026-01-28',
        displayDate: 'Jan 28, 2026',
        readTime: '10 min read',
        image: '/nagpur_map_investment_hotspots.png',
        keywords: ['best areas buy plot nagpur', 'Wardha Road plots', 'Besa plots nagpur', 'residential plots nagpur', 'plot rates nagpur'],
    },
    {
        slug: 'plot-buying-checklist-nagpur',
        category: 'Buyer Guide',
        title: '7/12 Extract, NA Order & More: Complete Plot Buying Checklist for Nagpur',
        excerpt: 'From verifying the 7/12 extract (Satbara Utara) and encumbrance certificate to checking NA conversion orders and RERA registration — a step-by-step legal checklist every plot buyer in Nagpur must follow before investing.',
        date: '2026-01-20',
        displayDate: 'Jan 20, 2026',
        readTime: '12 min read',
        image: '/vertex_hub.png',
        keywords: ['7/12 extract nagpur', 'plot buying checklist nagpur', 'NA order nagpur', 'land documents verification nagpur', 'encumbrance certificate nagpur'],
    },
    {
        slug: 'nagpur-metro-phase-2-land-impact',
        category: 'Market Insight',
        title: 'How Nagpur Metro Phase 2 Will Transform Land Prices Along Key Corridors',
        excerpt: 'Metro Phase 2 connecting MIHAN, Hingna, Butibori, Kamptee, and Pardi will boost land values by 30-40% along these routes. We analyze which corridors — Wardha Road, Besa, Jamtha, Umred Road — will see the most appreciation.',
        date: '2026-01-15',
        displayDate: 'Jan 15, 2026',
        readTime: '7 min read',
        image: '/saraswati-nagari.png',
        keywords: ['nagpur metro phase 2 land prices', 'nagpur metro real estate impact', 'plots near nagpur metro', 'land price appreciation nagpur'],
    },
    {
        slug: 'mihan-investment-guide',
        category: 'Investment',
        title: 'MIHAN Nagpur: Complete Investment Guide — Plots, Prices & Future Growth',
        excerpt: 'MIHAN has seen 200% land appreciation in 10 years. With TCS, Infosys, HCL, AIIMS, and the international airport, MIHAN plots (₹2,100-3,100/sqft for residential; ₹6,500-8,000/sqft for commercial) remain Nagpur\'s strongest growth engine.',
        date: '2026-01-10',
        displayDate: 'Jan 10, 2026',
        readTime: '9 min read',
        image: '/emerald_estate.png',
        keywords: ['MIHAN nagpur plots', 'MIHAN land investment', 'MIHAN SEZ nagpur', 'plots near MIHAN airport nagpur', 'MIHAN land rates'],
    },
    {
        slug: 'na-conversion-agricultural-land-nagpur',
        category: 'Buyer Guide',
        title: 'NA Conversion in Nagpur: How to Convert Agricultural Land for Residential Use',
        excerpt: 'A complete guide to converting agricultural (A) land to Non-Agricultural (NA) status in Nagpur — required documents, government fees, processing timeline, common pitfalls, and how NA plots differ from NMRDA-approved layouts.',
        date: '2026-01-05',
        displayDate: 'Jan 5, 2026',
        readTime: '8 min read',
        image: '/sachin-story-bg.png',
        keywords: ['NA conversion nagpur', 'agricultural to residential land nagpur', 'NA plots nagpur', 'non agricultural land nagpur', 'land use conversion maharashtra'],
    },
    {
        slug: 'samruddhi-expressway-nagpur-land-prices',
        category: 'Market Insight',
        title: 'Samruddhi Expressway Effect: Land Prices Near Nagpur Entry Points',
        excerpt: 'The 701-km Mumbai-Nagpur Samruddhi Mahamarg has cut travel time to 7 hours. Land prices near Samruddhi Circle are projected to rise 5.2x by 2035. Current plotted developments range ₹3,000-5,000/sqft — still an early-mover opportunity.',
        date: '2025-12-28',
        displayDate: 'Dec 28, 2025',
        readTime: '6 min read',
        image: '/about_aerial.png',
        keywords: ['Samruddhi Expressway nagpur land', 'Mumbai Nagpur expressway plots', 'Samruddhi Mahamarg real estate', 'land near expressway nagpur'],
    },
    {
        slug: 'gated-community-plots-nagpur',
        category: 'Buyer Guide',
        title: 'Gated Community Plots in Nagpur: Premium Layouts Worth Investing In',
        excerpt: 'Why gated community plots in Nagpur are gaining popularity — security, planned infrastructure, better appreciation, and lifestyle amenities. We review top gated layouts in Besa, Wardha Road, MIHAN, and Koradi Road areas.',
        date: '2025-12-20',
        displayDate: 'Dec 20, 2025',
        readTime: '7 min read',
        image: '/sachin-story-2.png',
        keywords: ['gated community plots nagpur', 'premium plots nagpur', 'gated layout nagpur', 'secure plots nagpur'],
    },
    {
        slug: 'nagpur-land-price-forecast-2026-2030',
        category: 'Market Insight',
        title: 'Nagpur Land Price Forecast 2026-2030: Which Zones Will Appreciate Most?',
        excerpt: 'With IBFC, Metro Phase 2, and MIHAN Phase 3, Nagpur is India\'s #1 emerging city. We forecast price trajectories for South (Wardha Road), West (Hingna), North (Kamptee), and East (Koradi) Nagpur corridors over the next 5 years.',
        date: '2025-12-15',
        displayDate: 'Dec 15, 2025',
        readTime: '11 min read',
        image: '/nagpur_growth_chart_abstract.png',
        keywords: ['nagpur land price forecast', 'nagpur property future value', 'nagpur real estate growth 2030', 'best zone buy land nagpur'],
    },
    {
        slug: 'affordable-plots-under-20-lakh-nagpur',
        category: 'Investment',
        title: 'Affordable Plots Under ₹20 Lakh in Nagpur: Best Options in 2026',
        excerpt: 'Budget-friendly plot options in Nagpur\'s growth corridors — Butibori (₹2,500-4,000/sqft), Khapri (₹3,000-4,500/sqft), North Nagpur (₹1,800-3,000/sqft). NMRDA-approved options for first-time buyers and young families.',
        date: '2025-12-10',
        displayDate: 'Dec 10, 2025',
        readTime: '6 min read',
        image: '/saraswati-nagari.png',
        keywords: ['affordable plots nagpur', 'cheap plots nagpur', 'budget plots nagpur', 'plots under 20 lakh nagpur', 'low cost land nagpur'],
    },
    {
        slug: 'hingna-butibori-industrial-corridor-investment',
        category: 'Market Insight',
        title: 'Hingna-Butibori Industrial Corridor: The Next Big Land Investment Zone',
        excerpt: 'With 500+ industrial units, Metro Phase 2 connectivity, NH44, and ring road expansion, the Hingna-Butibori corridor is projected to see 30-40% land appreciation. Current residential land rates: ₹2,500-4,200/sqft.',
        date: '2025-12-05',
        displayDate: 'Dec 5, 2025',
        readTime: '7 min read',
        image: '/vertex_hub.png',
        keywords: ['Hingna plots nagpur', 'Butibori land investment', 'industrial corridor nagpur plots', 'Hingna land rates'],
    },
];

// JSON-LD structured data for AI discoverability
const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Sachin Ingle Journal — Nagpur Land & Plot Investment Insights",
    "description": "Expert guidance on buying plots and land in Nagpur, Maharashtra. Market analysis, NMRDA approved layouts, MIHAN investment insights, and comprehensive buyer guides.",
    "url": "https://sachiningle.com/journal",
    "author": {
        "@type": "Person",
        "name": "Sachin Ingle",
        "jobTitle": "Land Visionary & Real Estate Expert",
        "url": "https://sachiningle.com"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Sachin Ingle Real Estate",
        "url": "https://sachiningle.com"
    },
    "blogPost": allArticles.map(article => ({
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.excerpt,
        "datePublished": article.date,
        "author": { "@type": "Person", "name": "Sachin Ingle" },
        "keywords": article.keywords.join(", "),
        "url": `https://sachiningle.com/journal/${article.slug}`
    }))
};

export default function JournalPage() {
    return (
        <>
            <Script
                id="journal-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
            />
            <main className="bg-white min-h-screen">
                {/* Hero */}
                <div className="relative pt-32 pb-24 bg-executive-navy overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="relative z-10 px-8 lg:px-16 max-w-[1440px] mx-auto text-center">
                        <FadeIn delay={0.1} duration={0.6} direction="up">
                            <span className="block text-xs font-sans uppercase tracking-[0.4em] text-executive-blue mb-6">
                                Land Investment Intelligence
                            </span>
                            <h1 className="font-display text-5xl lg:text-7xl text-white mb-8 leading-tight">
                                The <span className="italic font-serif text-executive-platinum">Journal</span>
                            </h1>
                            <p className="font-serif text-lg text-executive-platinum/80 max-w-3xl mx-auto leading-relaxed">
                                Expert insights on buying land and plots in Nagpur — from NMRDA approved layouts and MIHAN investment analysis to 7/12 verification guides and market price forecasts for every corridor.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Filter Tags */}
                <div className="py-8 border-b border-executive-navy/5">
                    <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-wrap gap-3">
                        {['All', 'Market Insight', 'Buyer Guide', 'Investment'].map((tag, idx) => (
                            <button
                                key={idx}
                                className={`px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-full transition-all duration-300 ${
                                    idx === 0
                                        ? 'bg-executive-navy text-white'
                                        : 'bg-executive-platinum/50 text-executive-navy hover:bg-executive-navy hover:text-white'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="py-24 px-8 lg:px-16 max-w-[1440px] mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allArticles.map((article, idx) => (
                            <FadeIn key={idx} delay={0.1 * ((idx % 6) + 1)} duration={0.6} direction="up">
                                <Link href={`/journal/${article.slug}`} className="block h-full">
                                    <SpotlightCard
                                        className="group h-full flex flex-col overflow-hidden rounded-2xl hover:shadow-xl transition-shadow duration-500"
                                        spotlightColor="rgba(37, 99, 235, 0.08)"
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-wider font-bold text-executive-navy rounded-full">
                                                    {article.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex flex-col flex-1">
                                            <h3 className="font-display text-xl text-executive-navy mb-3 group-hover:text-executive-blue transition-colors leading-snug">
                                                {article.title}
                                            </h3>
                                            <p className="font-serif text-sm text-executive-gray leading-relaxed mb-6 flex-1">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex justify-between items-center pt-6 border-t border-executive-navy/5">
                                                <span className="text-[10px] font-sans uppercase tracking-wider text-executive-gray">{article.displayDate}</span>
                                                <span className="text-[10px] font-sans uppercase tracking-wider text-executive-blue font-semibold">{article.readTime}</span>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* SEO Content Block — AI Discoverability */}
                <div className="py-24 bg-executive-platinum/20 border-t border-executive-navy/5">
                    <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
                        <FadeIn delay={0.1} duration={0.6} direction="up">
                            <div className="max-w-4xl">
                                <h2 className="font-display text-3xl text-executive-navy mb-8">Nagpur Land Investment: Your Definitive Resource</h2>
                                <div className="prose prose-lg font-serif text-executive-gray space-y-6">
                                    <p>
                                        Nagpur — India&apos;s #1 emerging tier-II city for real estate investment — is experiencing unprecedented growth driven by MIHAN (Multi-modal International Cargo Hub and Airport at Nagpur), the Samruddhi Mahamarg expressway, Metro Phase 2 expansion, and the upcoming International Business and Financial Centre (IBFC).
                                    </p>
                                    <p>
                                        Whether you&apos;re looking for NMRDA approved plots on Wardha Road, residential land near MIHAN SEZ, affordable plots in Butibori or Hingna, or premium gated community layouts in Besa — our Journal provides data-backed insights, legal guidance on 7/12 extracts and NA conversions, and expert price analysis for every growth corridor in Nagpur.
                                    </p>
                                    <p>
                                        With over 15 years of experience and 200+ plots delivered across Nagpur, Sachin Ingle brings firsthand market intelligence to help you make confident land investment decisions. From first-time buyers seeking affordable plots under ₹20 lakh to seasoned investors targeting commercial land near IT parks — every article is designed to answer the questions Indian land buyers actually ask.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Newsletter CTA */}
                <div className="py-24 bg-executive-navy">
                    <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
                        <FadeIn delay={0.1} duration={0.6} direction="up">
                            <h2 className="font-display text-3xl lg:text-4xl text-white mb-4">Stay Ahead of the Market</h2>
                            <p className="font-serif text-executive-platinum/70 mb-10 max-w-lg mx-auto">
                                Get weekly Nagpur land market updates, new plot listings, and investment insights delivered to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-1 px-6 py-4 border border-white/10 bg-white/5 rounded-full text-sm font-sans text-white placeholder:text-white/40 focus:outline-none focus:border-executive-blue transition-colors"
                                />
                                <button className="px-8 py-4 bg-executive-blue text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-full hover:bg-blue-500 transition-colors duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </main>
        </>
    );
}
