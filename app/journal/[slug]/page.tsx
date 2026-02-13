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
    },
    'plot-buying-checklist-nagpur': {
        title: '7/12 Extract, NA Order & More: Complete Plot Buying Checklist for Nagpur',
        category: 'Buyer Guide',
        date: 'Jan 20, 2026',
        readTime: '12 min read',
        image: '/vertex_hub.png',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    The legal landscape of land ownership in Maharashtra can be complex. For a plot buyer in Nagpur, the due diligence process is non-negotiable. This checklist covers the essential documents you must verify before any financial commitment.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">1. The 7/12 Extract (Satbara Utara)</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    This is the fundamental document that proves ownership and details any encumbrances on the land. Ensure the names are correct and check for any &quot;Bhojas&quot; (loans or liabilities) registered against the property.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">2. Non-Agricultural (NA) Order</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Agricultural land cannot be used for residential purposes without an NA conversion. Verify the NA order issued by the Collector or the competent authority. In Nagpur, look specifically for NMRDA or NIT Sanctioned layouts.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">3. Encumbrance Certificate</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    This certificate confirms that the property is free from any legal dues or mortgages. It is usually issued by the Sub-Registrar&apos;s office.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">4. RERA Registration</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    For any layout larger than 500 sq meters or involving more than 8 plots, RERA registration is mandatory. Check the project status on the MahaRERA portal.
                </p>
            </>
        )
    },
    'nagpur-metro-phase-2-land-impact': {
        title: 'How Nagpur Metro Phase 2 Will Transform Land Prices Along Key Corridors',
        category: 'Market Insight',
        date: 'Jan 15, 2026',
        readTime: '7 min read',
        image: '/saraswati-nagari.png',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Public infrastructure is the single biggest driver of real estate value. Nagpur Metro Phase 2 is set to revolutionize connectivity, and with it, the land prices in the city&apos;s periphery.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">The New Connectivity Hubs</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Phase 2 will connect MIHAN to Butibori and Prajapati Nagar to Transport Nagar (Kapsi). This extension into industrial and logistical zones is creating new residential focal points.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Wardha Road Extension</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    As the metro reaches further south towards Butibori, areas like Jamtha and Dongargaon are seeing a surge in demand. These areas, once considered far, will now be just a 20-minute commute from the city center.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Price Appreciation Forecast</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Historical data from Phase 1 suggests a 30-40% appreciation in land value once the metro lines reach a functional stage. Smart investors are positioning themselves in these corridors now.
                </p>
            </>
        )
    },
    'mihan-investment-guide': {
        title: 'MIHAN Nagpur: Complete Investment Guide — Plots, Prices & Future Growth',
        category: 'Investment',
        date: 'Jan 10, 2026',
        readTime: '9 min read',
        image: '/emerald_estate.png',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    MIHAN (Multi-modal International Cargo Hub and Airport at Nagpur) is the cornerstone of Nagpur&apos;s economic future. For real estate investors, it represents the most reliable growth corridor in Central India.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">The Multi-Sector Growth</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    From IT giants like TCS and Infosys to healthcare leaders like AIIMS and NCI, MIHAN is attracting a high-income demographic. This influx is creating a sustained demand for premium residential plots and gated communities.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Current Price Trends</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    While city-facing plots on Wardha Road command a premium, the internal layouts within MIHAN region offer a high growth ceiling. Residential land rates currently range from ₹2,500 to ₹4,500 per sqft depending on the proximity to the SEZ main gates.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Future Prospects</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    With the upcoming international airport expansion and more aerospace companies moving in, the &quot;MIHAN Economy&quot; is only set to expand, making it a safe bet for long-term land banking.
                </p>
            </>
        )
    },
    'na-conversion-agricultural-land-nagpur': {
        title: 'NA Conversion in Nagpur: How to Convert Agricultural Land for Residential Use',
        category: 'Buyer Guide',
        date: 'Jan 5, 2026',
        readTime: '8 min read',
        image: '/sachin-story-bg.png',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    For many investors, buying agricultural land and converting it to Non-Agricultural (NA) status is a strategy for high returns. However, the process in Nagpur requires meticulous planning and adherence to state norms.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">The Process Overview</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    The conversion involves getting clearance from various departments including Town Planning, Revenue, and the Local Authority. The key is ensuring the land falls within the &quot;Yellow Zone&quot; or residentially designated area of the DP (Development Plan).
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">NMRDA Sanctioned Layouts</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Within the Nagpur Metropolitan Region, the NMRDA governs the layout sanctions. An NMRDA-sanctioned NA plot is the gold standard, as it confirms that all public utilities and road widths meet official standards.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Fees and Timeline</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Conversion fees (Nazarana) depend on the land location and current market rates. The process can take anywhere from 6 to 12 months, so patience is key for this investment model.
                </p>
            </>
        )
    },
    'samruddhi-expressway-nagpur-land-prices': {
        title: 'Samruddhi Expressway Effect: Land Prices Near Nagpur Entry Points',
        category: 'Market Insight',
        date: 'Dec 28, 2025',
        readTime: '6 min read',
        image: '/about_aerial.png',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    The Samruddhi Mahamarg is more than just a road; it&apos;s a corridor of wealth. As the starting point of this 701-km expressway, Nagpur is seeing a unique shift in land demand towards its western fringes.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">The Strategic Entry Points</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Areas near the Jamtha and Hingna interchanges are becoming hotspots for both logistics and residential developments. Proximity to the expressway entry points is now a major value-add for land parcels.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Logistics and Industrial Push</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    The expressway facilitates rapid movement of goods, making Nagpur a central hub for India. This has led to a 15-20% spike in industrial land prices near the interchanges in just the last 12 months.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Residential Growth</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    As industrial hubs grow, the need for housing follows. We are seeing new premium townships planned along the outer ring road that connects to the Samruddhi Mahamarg.
                </p>
            </>
        )
    },
    'gated-community-plots-nagpur': {
        title: 'Gated Community Plots in Nagpur: Premium Layouts Worth Investing In',
        category: 'Buyer Guide',
        date: 'Dec 20, 2025',
        readTime: '7 min read',
        image: '/sachin-story-2.png',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    The modern plot buyer in Nagpur is no longer just looking for a piece of earth; they are looking for a lifestyle. Gated community plots offer security, standardized infrastructure, and a sense of community.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">The Value Proposition</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Unlike standalone plots, gated communities come with ready-to-use amenities like landscaped gardens, clubhouses, and 24/7 security. This makes them highly attractive to NRIs and high-net-worth individuals.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Long-term Appreciation</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Well-maintained gated layouts appreciate faster than standalone plots because the internal infrastructure is preserved over time. They also offer higher rental yields for those planning to build and lease.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">What to Look For</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    When choosing a gated community, prioritize layouts with a high &quot;open space&quot; ratio and clear upkeep policies. Verification of the developer&apos;s track record in maintaining previous projects is also crucial.
                </p>
            </>
        )
    },
    'nagpur-land-price-forecast-2026-2030': {
        title: 'Nagpur Land Price Forecast 2026-2030: Which Zones Will Appreciate Most?',
        category: 'Market Insight',
        date: 'Dec 15, 2025',
        readTime: '11 min read',
        image: '/nagpur_growth_chart_abstract.png',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Predicting land values requires an understanding of zoning, infrastructure, and demographic shifts. As we look towards 2030, Nagpur is set to become one of the most balanced real estate markets in India.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">South Nagpur: The Premium Belt</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Wardha Road and MIHAN will continue to be the premium zones. We forecast a steady 12-15% annual growth here, driven by the maturing IT sector and healthcare infrastructure.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">West Nagpur: The Connectivity Play</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Hingna and areas near the Samruddhi Expressway start will see a sharp rise as the &quot;New Nagpur&quot; center of gravity shifts towards the belt.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">The Impact of IBFC</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    The proposed International Business and Financial Centre will be a major catalyst. Much like Mumbai&apos;s BKC, it will drive land prices in its vicinity to unprecedented levels as it nears completion toward 2030.
                </p>
            </>
        )
    },
    'affordable-plots-under-20-lakh-nagpur': {
        title: 'Affordable Plots Under ₹20 Lakh in Nagpur: Best Options in 2026',
        category: 'Investment',
        date: 'Dec 10, 2025',
        readTime: '6 min read',
        image: '/saraswati-nagari.png',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Real estate investment should be accessible to everyone. In 2026, despite rising prices, there are still pockets of opportunity in Nagpur for those with a budget under ₹20 lakh.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Strategic Pockets</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Areas like Butibori, outer parts of Hingna, and certain sections of Umred Road still offer NMRDA-sanctioned plots within this budget. The key is to look for &quot;emerging&quot; rather than &quot;established&quot; areas.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">The Advantage of Small Tickets</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    Smaller investment amounts allow for better diversification. Buying two smaller plots in different zones can be a safer strategy than one large parcel.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Verification is Key</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    In the affordable segment, never compromise on legal checks. Ensure the plot has a clear title and all authority sanctions are in place, regardless of the price point.
                </p>
            </>
        )
    },
    'hingna-butibori-industrial-corridor-investment': {
        title: 'Hingna-Butibori Industrial Corridor: The Next Big Land Investment Zone',
        category: 'Market Insight',
        date: 'Dec 5, 2025',
        readTime: '7 min read',
        image: '/vertex_hub.png',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    The industrial belt of Hingna and Butibori is the backbone of Nagpur&apos;s economy. For savvy investors, this corridor offers a unique mix of residential and industrial land opportunities.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Industrial Growth</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    With over 500 operating units, Butibori is one of Asia&apos;s largest industrial estates. The expansion of these units is creating a massive requirement for housing for the workforce.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">Residential Spillover</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    The residential demand in Hingna is moving from affordable to mid-premium as the metro connectivity improves. This makes the belt between Hingna and the Ring Road highly valuable.
                </p>
                <h3 className="text-2xl font-display text-executive-navy mt-10 mb-4">The Verdict</h3>
                <p className="mb-6 text-lg leading-relaxed text-executive-gray">
                    If you are looking for long-term rental income through residential development or the high appreciation of industrial land, the Hingna-Butibori corridor should be on your radar.
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
