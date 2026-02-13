'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';

const articles = [
    {
        slug: 'why-nagpur-land-2026',
        category: 'Market Insight',
        title: 'Why Nagpur Is the Smartest Land Investment in 2026',
        excerpt: 'With MIHAN expansion, Nagpur Metro Phase 2, and the Samruddhi Expressway now operational, land prices along Wardha Road, Besa, and Hingna corridors are appreciating 15-25% annually.',
        date: 'Feb 10, 2026',
        readTime: '5 min read',
        image: '/nagpur_growth_chart_abstract.png',
    },
    {
        slug: 'nmrda-approved-plots-guide',
        category: 'Buyer Guide',
        title: 'NMRDA Approved Plots in Nagpur: Complete Buying Guide 2026',
        excerpt: 'Everything you need to know about NMRDA-sanctioned layouts — why approval matters, how to verify layout numbers, and which areas offer the best NMRDA approved residential plots.',
        date: 'Feb 5, 2026',
        readTime: '8 min read',
        image: '/nmrda_blueprint_plot.png',
    },
    {
        slug: 'best-areas-plot-investment-nagpur',
        category: 'Market Insight',
        title: 'Top 10 Areas to Buy Plots in Nagpur for Maximum Returns',
        excerpt: 'From Wardha Road (₹2,200-4,500/sqft) to Besa-Pipla (₹4,000-6,500/sqft) — a data-driven ranking of the best localities for residential plot investment in Nagpur.',
        date: 'Jan 28, 2026',
        readTime: '10 min read',
        image: '/nagpur_map_investment_hotspots.png',
    },
];

export default function VogueJournal() {
    return (
        <section id="journal" className="py-16 lg:py-36 bg-executive-cream relative">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
                {/* Header */}
                <FadeIn delay={0.1} duration={0.6} direction="up">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-20">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="h-[2px] w-8 bg-executive-gold"></span>
                                <span className="text-xs font-sans uppercase tracking-[0.3em] text-executive-gold">Insights & Guides</span>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-executive-navy mt-4">
                                The <span className="italic font-serif text-executive-gold">Journal</span>
                            </h2>
                            <p className="font-serif text-base lg:text-lg text-executive-gray mt-4 max-w-lg">
                                Expert insights on buying land in Nagpur — market analysis, buyer guides, and investment strategies for plots and layouts.
                            </p>
                        </div>
                        <Link 
                            href="/journal" 
                            className="mt-6 lg:mt-0 text-xs font-sans uppercase tracking-[0.2em] text-executive-navy hover:text-executive-gold transition-colors duration-500 group flex items-center gap-3"
                        >
                            View all articles
                            <span className="w-6 h-[1px] bg-executive-navy group-hover:w-12 group-hover:bg-executive-gold transition-all duration-500"></span>
                        </Link>
                    </div>
                </FadeIn>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-12 lg:mt-20">
                    {articles.map((article, i) => (
                        <FadeIn key={i} delay={0.1 * i} duration={0.6} direction="up">
                            <Link href={`/journal/${article.slug}`} className="block h-full">
                                <article className="group h-full flex flex-col overflow-hidden bg-white border border-executive-navy/5 hover:shadow-xl hover:shadow-executive-navy/5 hover:-translate-y-1 transition-all duration-700">
                                    {/* Image */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-executive-gold border border-executive-gold/30 bg-white/90 backdrop-blur-sm">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 lg:p-8 flex flex-col flex-1">
                                        <h3 className="font-display text-xl text-executive-navy mb-3 group-hover:text-executive-gold transition-colors duration-500 leading-snug">
                                            {article.title}
                                        </h3>
                                        <p className="font-sans text-sm text-executive-gray leading-relaxed mb-6 flex-1">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex justify-between items-center pt-5 border-t border-executive-navy/5">
                                            <span className="text-[10px] font-sans uppercase tracking-wider text-executive-warmgray">{article.date}</span>
                                            <span className="text-[10px] font-sans uppercase tracking-wider text-executive-gold font-semibold">{article.readTime}</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
