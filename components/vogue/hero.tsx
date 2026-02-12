'use client';

import FadeIn from '@/components/animations/fade-in';
import Image from 'next/image';
import Link from 'next/link';

export default function VogueHero() {
    return (
        <section className="relative min-h-screen w-full flex items-center bg-executive-navy overflow-hidden">
            {/* Elegant Background - Clean & Subtle */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0)_0%,rgba(15,23,42,1)_100%)] z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-executive-blue/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-20 pt-24">
                
                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    <FadeIn delay={0.2} duration={1} direction="up">
                        <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-[10px] font-sans uppercase tracking-[0.25em] text-white/80 mb-8 w-fit backdrop-blur-sm">
                            Est. 2010 • Nagpur
                        </span>
                        
                        <h1 className="font-display text-6xl lg:text-8xl leading-[0.95] text-white tracking-tight mb-8">
                            Building <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-executive-platinum to-executive-gray">Legacies.</span>
                        </h1>
                        
                        <p className="font-sans text-lg text-executive-platinum/80 max-w-md leading-relaxed mb-12 font-light">
                            Curating exclusive land opportunities in Nagpur&apos;s most coveted corridors. A decade of trust, transparency, and timeless value.
                        </p>
                        
                        <div className="flex flex-wrap gap-6">
                            <Link 
                                href="/contact" 
                                className="px-8 py-4 bg-white text-executive-navy font-sans text-xs uppercase tracking-[0.2em] rounded-full hover:bg-executive-platinum transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-xl"
                            >
                                Schedule Consultation
                            </Link>
                            <Link 
                                href="/#work" 
                                className="px-8 py-4 border border-white/20 text-white font-sans text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all duration-300"
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </FadeIn>
                </div>

                {/* Hero Image - Architecture/Abstract */}
                <div className="relative h-[60vh] lg:h-[80vh] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 group">
                    <FadeIn delay={0.4} duration={1.2} className="w-full h-full">
                        <Image
                            src="/sachin-ingle.jpg"
                            alt="Sachin Ingle"
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-executive-navy/80 via-transparent to-transparent opacity-80" />
                        
                        {/* Floating Stats Card */}
                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl">
                            <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/20">
                                <div>
                                    <div className="text-2xl font-display text-white mb-1">15+</div>
                                    <div className="text-[9px] uppercase tracking-widest text-white/60">Years</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-display text-white mb-1">50+</div>
                                    <div className="text-[9px] uppercase tracking-widest text-white/60">Projects</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-display text-white mb-1">100%</div>
                                    <div className="text-[9px] uppercase tracking-widest text-white/60">Trust</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
