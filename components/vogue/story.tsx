'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';

export default function VogueStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    // Clean parallax — vertical shift only, no rotation
    useEffect(() => {
        let ticking = false;

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    if (!containerRef.current || !imageRef.current) {
                        ticking = false;
                        return;
                    }
                    const rect = containerRef.current.getBoundingClientRect();
                    const vh = window.innerHeight;
                    const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
                    const y = -60 * progress;
                    imageRef.current.style.transform = `translateY(${y}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section ref={containerRef} id="story" className="relative py-20 lg:py-36 bg-executive-cream overflow-hidden">
            {/* Clean warm background — no blobs */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/60 to-transparent pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    
                    {/* Editorial Image — Clean rectangular crop */}
                    <div 
                        ref={imageRef}
                        className="w-full lg:w-1/2 relative will-change-transform"
                    >
                         <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
                            {/* Decorative gold corner accents */}
                            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-executive-gold/50 z-20" />
                            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-executive-gold/50 z-20" />
                            
                            <div className="relative w-full h-full overflow-hidden shadow-2xl shadow-executive-navy/15">
                                <Image 
                                    src="/sachin-story-bg.jpg" 
                                    alt="Sachin Ingle Portrait" 
                                    fill 
                                    className="object-cover scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-executive-navy/30 to-transparent" />
                            </div>

                            {/* Floating Quote Card */}
                            <div 
                                className="absolute -bottom-6 -right-4 lg:-bottom-10 lg:-right-8 w-48 lg:w-64 bg-executive-navy p-5 lg:p-6 shadow-xl z-30"
                            >
                                <div className="space-y-2">
                                    <div className="h-[2px] w-8 lg:w-12 bg-executive-gold" />
                                    <p className="font-serif text-lg lg:text-xl text-white italic tracking-tight leading-snug">&quot;Vision over View.&quot;</p>
                                    <p className="text-[9px] lg:text-[10px] uppercase tracking-widest text-executive-gold">Est. 2010</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 lg:pl-8">
                        <FadeIn direction="right" duration={0.8}>
                            <span className="text-xs font-sans uppercase tracking-[0.4em] text-executive-gold mb-4 block">
                                The Origin
                            </span>
                            <h2 className="font-display text-[2.25rem] md:text-5xl lg:text-7xl leading-[1.1] text-executive-navy mb-8 tracking-tight">
                                Crafting <br />
                                <span className="italic font-serif text-executive-gold">Destinies.</span>
                            </h2>
                            
                            <div className="space-y-6 text-base lg:text-lg font-light leading-relaxed text-executive-gray">
                                <p>
                                    Nagpur isn&apos;t just geography to me. It&apos;s the canvas where families paint their futures. From the pulsing arteries of <span className="font-medium text-executive-navy">Wardha Road</span> to the quiet promise of Besa-Pipla, I read the land&apos;s potential before others see the path.
                                </p>
                                <p>
                                    Real estate is often transactional. My approach is <span className="italic font-serif text-executive-navy">sculptural</span>. We don&apos;t just cut plots; we carve ecosystems where communities can take root and flourish for generations.
                                </p>
                            </div>

                            <div className="mt-12 flex flex-wrap gap-2.5 justify-start md:justify-start">
                                {["Strategic Land Banks", "10+ Completed Layouts", "Visionary Approach"].map((tag, i) => (
                                    <span 
                                        key={i}
                                        className="px-4 py-2 border border-executive-gold/25 text-[9px] lg:text-[10px] uppercase tracking-[0.15em] text-executive-navy bg-white/80 hover:border-executive-gold hover:bg-executive-gold/5 transition-all duration-500 animate-fadeInUp"
                                        style={{ animationDelay: `${0.1 * i}s`, animationFillMode: 'both' }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
