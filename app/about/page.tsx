

import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-vogue-offwhite text-vogue-black selection:bg-black selection:text-white">

            {/* Header */}
            <div className="pt-48 px-8 lg:px-16 mb-32">
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-neutral-400 block mb-6">The Philosophy</span>
                <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] max-w-4xl text-vogue-black">
                    &quot;Land is the only asset that lasts forever. I ensure your piece of forever is <span className="italic text-neutral-400">secure, sanctioned, and strategic</span>.&quot;
                </h1>
            </div>

            {/* Image Scroller */}
            <div className="w-full h-[50vh] lg:h-[70vh] relative overflow-hidden mb-32">
                <Image
                    src="/saraswati-nagari.png"
                    alt="Saraswati Nagari Land Development"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Content Grid */}
            <div className="px-8 lg:px-16 mb-32">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
                    <div>
                        <h2 className="font-serif text-3xl mb-8">The Sachin Ingle Promise</h2>
                        <p className="font-sans text-neutral-600 leading-relaxed mb-8">
                            In the volatile world of real estate, trust is the most valuable currency. Since 2010, Sachin Ingle has built a reputation not just on developing land, but on delivering certainty.
                        </p>
                        <p className="font-sans text-neutral-600 leading-relaxed">
                            My focus is on acquiring raw land parcels in high-growth corridors of Nagpur—Wardha Road, Outer Ring Road, and MIHAN—and transforming them into fully compliant, infrastructure-ready layouts. I do not sell dreams of future construction; I sell the solid capability of the land today.
                        </p>
                    </div>

                    <div className="grid gap-12">
                        <div className="border-t border-black/10 pt-8">
                            <h3 className="font-sans text-xs uppercase tracking-[0.2em] mb-4 text-vogue-black font-semibold">01. Compliance First</h3>
                            <p className="font-sans text-sm text-neutral-500 leading-relaxed">
                                Every project I launch comes with a guaranteed Non-Agricultural (NA) order, NMRDA Sanction, and Release Letter (RL). I believe in 100% white-collar transparency.
                            </p>
                        </div>
                        <div className="border-t border-black/10 pt-8">
                            <h3 className="font-sans text-xs uppercase tracking-[0.2em] mb-4 text-vogue-black font-semibold">02. Strategic Banking</h3>
                            <p className="font-sans text-sm text-neutral-500 leading-relaxed">
                                My land banks are chosen based on 10-year horizon planning. I identify where the city is moving before the crowd gets there, ensuring maximum appreciation for our investors.
                            </p>
                        </div>
                        <div className="border-t border-black/10 pt-8">
                            <h3 className="font-sans text-xs uppercase tracking-[0.2em] mb-4 text-vogue-black font-semibold">03. Infrastructure Ready</h3>
                            <p className="font-sans text-sm text-neutral-500 leading-relaxed">
                                I don&apos;t just mark plots. I build wide tar roads, install underground electrification, and develop sewage systems before handing over possession.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    );
}
