'use client';

import FadeIn from '@/components/animations/fade-in';
import Image from 'next/image';
import Link from 'next/link';

export default function VogueHero() {
    return (
        <section className="relative min-h-screen w-full flex items-center bg-executive-cream overflow-hidden">
            {/* Subtle warm gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-executive-cream via-white to-executive-cream z-0" />
            {/* Decorative grid lines for editorial depth */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                <div className="absolute top-0 left-1/4 w-px h-full bg-executive-navy" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-executive-navy" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-executive-navy" />
            </div>
            
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-20 pt-32 lg:pt-24 min-h-[90vh]">
                
                {/* Text Content — Mobile first, then image */}
                <div className="flex flex-col justify-center order-1 lg:order-1 relative z-20 lg:mt-0">
                    <FadeIn delay={0.1} duration={0.6} direction="up">
                        <div className="flex items-center gap-4 mb-4 lg:mb-8">
                            <span className="h-[2px] w-8 lg:w-12 bg-executive-gold"></span>
                            <span className="text-[10px] lg:text-[11px] font-sans uppercase tracking-[0.3em] text-executive-gray">
                                Est. 2010 • Nagpur
                            </span>
                        </div>
                        
                        <h1 className="font-display text-[2.25rem] md:text-5xl lg:text-7xl xl:text-8xl leading-[1.1] text-executive-navy tracking-tight mb-6 lg:mb-8">
                            Building <span className="hidden lg:inline"><br /></span>
                            <span className="italic font-serif text-executive-gold">Legacy.</span>
                        </h1>
                        
                        <p className="font-sans text-base lg:text-lg text-executive-gray max-w-md leading-relaxed mb-8 lg:mb-10 font-light border-l-2 border-executive-gold/30 pl-6">
                            Curating exclusive land opportunities in Nagpur&apos;s most coveted corridors. A decade of trust, transparency, and timeless value.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link 
                                href="/contact" 
                                className="px-8 lg:px-10 py-4 lg:py-5 bg-executive-navy text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-executive-charcoal transition-all duration-500 text-center"
                            >
                                Schedule Visit
                            </Link>
                            <Link 
                                href="/#work" 
                                className="px-8 lg:px-10 py-4 lg:py-5 bg-transparent border border-executive-navy/15 text-executive-navy font-sans text-xs uppercase tracking-[0.2em] hover:border-executive-gold hover:text-executive-gold transition-all duration-500 text-center"
                            >
                                Portfolio
                            </Link>
                        </div>
                    </FadeIn>
                </div>

                {/* Hero Image — Architectural Presentation */}
                <div className="relative aspect-[4/5] lg:h-[85vh] lg:aspect-auto w-full order-1 lg:order-2">
                    <div className="w-full h-full relative px-4 lg:px-0">
                        {/* Decorative corner accent */}
                        <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-executive-gold/40 z-30 hidden lg:block" />
                        <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-executive-gold/40 z-30 hidden lg:block" />
                        
                        <div className="relative w-full h-full overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]">
                             <Image
                                src="/sachin-ingle.jpg"
                                alt="Sachin Ingle"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                            />
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-executive-navy/25 via-transparent to-transparent" />
                        </div>
                        
                        {/* Floating Stats Card — Hidden on mobile */}
                        <div className="absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-16 bg-executive-navy p-6 lg:p-8 max-w-xs hidden lg:block z-40 shadow-2xl">
                            <div className="flex flex-col gap-5">
                                <div>
                                    <h3 className="font-display text-3xl lg:text-4xl text-white">50+</h3>
                                    <p className="text-[10px] uppercase tracking-widest text-executive-gold mt-1">Premium Projects</p>
                                </div>
                                <div className="h-px w-full bg-white/10"></div>
                                <div>
                                    <h3 className="font-display text-3xl lg:text-4xl text-white">15y</h3>
                                    <p className="text-[10px] uppercase tracking-widest text-executive-gold mt-1">Market Leadership</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
