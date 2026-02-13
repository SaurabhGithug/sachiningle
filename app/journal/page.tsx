'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import SpotlightCard from '@/components/ui/spotlight-card';
import Script from 'next/script';
import { allArticlesMetadata } from './articles-data';

const allArticles = allArticlesMetadata;

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
