'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import FadeIn from '@/components/animations/fade-in';
import { ArrowLeft } from 'lucide-react';

// Article Data
const articles = {
    'why-nagpur-land-2026': {
        title: 'Why Nagpur Is the Smartest Land Investment in 2026',
        category: 'Market Insight',
        date: 'Feb 10, 2026',
        readTime: '5 min read',
        image: '/nagpur_growth_chart_abstract.png',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Nagpur is currently experiencing a renaissance. Once known primarily as the Orange City, it has rapidly transformed into the logistics and warehousing capital of India. With the operationalization of the <strong>Samruddhi Mahamarg</strong> and the expansion of <strong>MIHAN (Multi-modal International Cargo Hub and Airport at Nagpur)</strong>, land values in key corridors are poised for exponential growth.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">The MIHAN Effect</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    MIHAN is not just a project; it&apos;s an economic engine. As major IT giants and aviation companies set up base, the demand for residential land in the vicinity—specifically Wardha Road and Shankarpur—has skyrocketed. Investing here now is akin to buying in Pune&apos;s Hinjewadi or Bangalore&apos;s Whitefield two decades ago.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Connectivity: The Game Changer</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    The Nagpur Metro Phase 2 is expanding connectivity to the outskirts, making areas like Hingna and Kamptee Road accessible within minutes. This infrastructure push is the primary driver for the 15-25% annual appreciation we are witnessing in land prices.
                </p>
                <div className="bg-executive-platinum/20 p-8 rounded-2xl my-10 border-l-4 border-executive-navy">
                    <h4 className="text-xl font-display text-executive-navy mb-2">Investment Tip</h4>
                    <p className="text-executive-gray italic">
                        &quot;Focus on plots within a 5km radius of Metro Phase 2 stations. These micro-markets historically show the highest appreciation post-operationalization.&quot;
                    </p>
                </div>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">2026 Outlook</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    With inventory levels in prime city areas depleting, the focus has shifted to plotted developments in the metro region (NMRDA). 2026 is projected to be a landmark year where early movers will solidify substantial gains.
                </p>
            </>
        )
    },
    'nmrda-approved-plots-guide': {
        title: 'NMRDA Approved Plots in Nagpur: Complete Buying Guide 2026',
        category: 'Buyer Guide',
        date: 'Feb 5, 2026',
        readTime: '8 min read',
        image: '/nmrda_blueprint_plot.png',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Buying a plot in Nagpur? The first question you must ask is: <strong>&quot;Is it NMRDA sanctioned?&quot;</strong> The Nagpur Metropolitan Region Development Authority (NMRDA) has stringent norms, and ensuring your plot is approved is the only way to guarantee a secure, hassle-free investment.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Why NMRDA Approval Matters</h3>
                <ul className="list-disc pl-6 mb-6 space-y-3 text-lg text-executive-gray">
                    <li><strong>Legality:</strong> Protects you from illegal layouts and demolition risks.</li>
                    <li><strong>Bank Loans:</strong> Only sanctioned plots are eligible for home loans from nationalized banks.</li>
                    <li><strong>Infrastructure:</strong> Approved layouts mandate wide roads, sewage systems, and open spaces.</li>
                    <li><strong>Resale Value:</strong> Sanctioned plots command a 30-40% premium over unapproved land.</li>
                </ul>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">How to Verify Approvals</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Don&apos;t just take the agent&apos;s word for it. Always ask for the <strong>RL (Release Letter)</strong>. A sanction map is just the first step; the Release Letter confirms that the developer has mortgaged plots and completed necessary development work.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">The 7/12 Extract</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Ensure the developer&apos;s name is on the 7/12 extract. If you are buying a resale plot, check the mutation entry to trace the chain of title.
                </p>
            </>
        )
    },
    'best-areas-plot-investment-nagpur': {
        title: 'Top 10 Areas to Buy Plots in Nagpur for Maximum Returns',
        category: 'Market Insight',
        date: 'Jan 28, 2026',
        readTime: '10 min read',
        image: '/nagpur_map_investment_hotspots.png',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Location is everything in real estate. In Nagpur, the growth vector is clearly pointing South and West. Based on current infrastructure projects and price appreciation trends, here are the top localities for plot investment in 2026.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">1. Wardha Road (The Golden Corridor)</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    <strong>Price Range:</strong> ₹2,200 - ₹4,500 / sqft<br />
                    Home to MIHAN, IIIT, and key educational institutions. It is the most premium investment destination with the highest liquidity.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">2. Besa - Pipla</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    <strong>Price Range:</strong> ₹4,000 - ₹6,500 / sqft<br />
                    Already established as a residential hub, this area is perfect for end-users looking to build immediately. Connectivity to the Ring Road is a major plus.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">3. Hingna Road</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    <strong>Price Range:</strong> ₹1,800 - ₹3,000 / sqft<br />
                    Driven by the Metro and industrial growth in MIDC. Excellent for affordable housing and long-term rental yields.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">4. Shankarpur & Panjari</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    <strong>Price Range:</strong> ₹2,000 - ₹3,500 / sqft<br />
                    The immediate extension of Wardha Road. With AIIMS and the Cancer Institute nearby, this area is emerging as a medical and educational hub.
                </p>
            </>
        )
    }
};

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const article = articles[slug as keyof typeof articles];

    if (!article) {
        notFound();
    }

    return (
        <article className="bg-executive-white min-h-screen pt-32 pb-24">
            {/* Hero Section */}
            <div className="container mx-auto px-4 lg:px-0 max-w-4xl">
                <FadeIn delay={0.1} duration={0.6}>
                    <Link href="/#journal" className="inline-flex items-center gap-2 text-executive-blue text-sm uppercase tracking-widest font-bold mb-8 hover:opacity-70 transition-opacity">
                        <ArrowLeft className="w-4 h-4" /> Back to Journal
                    </Link>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-executive-navy/5 text-executive-navy text-xs font-bold uppercase tracking-wider rounded-full">
                            {article.category}
                        </span>
                        <span className="text-executive-gray text-xs uppercase tracking-wider">
                            {article.date} • {article.readTime}
                        </span>
                    </div>

                    <h1 className="font-display text-4xl lg:text-6xl text-executive-navy leading-tight mb-12">
                        {article.title}
                    </h1>
                </FadeIn>

                {/* Featured Image */}
                <FadeIn delay={0.2} duration={0.6}>
                    <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl mb-16">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </FadeIn>

                {/* Content */}
                <FadeIn delay={0.3} duration={0.6}>
                    <div className="prose prose-lg prose-headings:font-display prose-headings:text-executive-navy prose-p:font-serif prose-p:text-executive-gray max-w-none">
                        {article.content}
                    </div>
                </FadeIn>
            </div>
        </article>
    );
}
