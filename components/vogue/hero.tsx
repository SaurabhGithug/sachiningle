'use client';

import FadeIn from '@/components/animations/fade-in';
import Image from 'next/image';
import Link from 'next/link';

export default function VogueHero() {
    return (
        <section className="relative min-h-screen w-full flex items-center bg-executive-navy overflow-hidden">
            {/* Elegant Background - Clean & Subtle */}
            <div className="absolute inset-0 bg-executive-white z-0" />
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-executive-platinum/50 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
            
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-20 pt-24 min-h-[90vh]">
                
                {/* Text Content */}
                <div className="flex flex-col justify-center order-2 lg:order-1 relative z-20">
                    <FadeIn delay={0.1} duration={0.6} direction="up">
                        <div className="flex items-center gap-4 mb-6 lg:mb-8">
                            <span className="h-[1px] w-8 lg:w-12 bg-executive-navy/20"></span>
                            <span className="text-[10px] lg:text-[11px] font-sans uppercase tracking-[0.3em] text-executive-gray">
                                Est. 2010 • Nagpur
                            </span>
                        </div>
                        
                        <h1 className="font-display text-[2.5rem] lg:text-7xl xl:text-8xl leading-[1.1] text-executive-navy tracking-tight mb-6 lg:mb-8 whitespace-nowrap lg:whitespace-normal">
                            Building <span className="hidden lg:inline"><br /></span>
                            <span className="italic font-serif text-executive-gray/80">Legacy.</span>
                        </h1>
                        
                        <p className="font-sans text-base lg:text-lg text-executive-gray max-w-md leading-relaxed mb-8 lg:mb-10 font-light border-l-2 border-executive-navy/10 pl-6">
                            Curating exclusive land opportunities in Nagpur&apos;s most coveted corridors. A decade of trust, transparency, and timeless value.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link 
                                href="/contact" 
                                className="px-8 lg:px-10 py-4 lg:py-5 bg-executive-navy text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-executive-blue transition-all duration-300 shadow-xl shadow-executive-navy/10 hover:shadow-2xl hover:-translate-y-1 text-center"
                            >
                                Schedule Visit
                            </Link>
                            <Link 
                                href="/#work" 
                                className="px-8 lg:px-10 py-4 lg:py-5 bg-transparent border border-executive-navy/10 text-executive-navy font-sans text-xs uppercase tracking-[0.2em] hover:bg-executive-navy/5 transition-all duration-300 text-center"
                            >
                                Portfolio
                            </Link>
                        </div>
                    </FadeIn>
                </div>

                {/* Hero Image - Minimalist Presentation */}
                <div className="relative aspect-[4/5] lg:h-[85vh] lg:aspect-auto w-full order-1 lg:order-2 lg:pl-12">
                    <div className="w-full h-full relative">
                        <div className="relative w-full h-full rounded-[2rem] lg:rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
                             <Image
                                src="/sachin-ingle.jpg"
                                alt="Sachin Ingle"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                            />
                            {/* Subtle Grade Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-executive-navy/20 to-transparent mix-blend-multiply opacity-40" />
                        </div>
                        
                        {/* Architectural Accent Element - Hidden on mobile */}
                        <div className="absolute -bottom-12 -left-12 lg:-left-24 bg-white p-8 rounded-tr-3xl shadow-2xl max-w-xs hidden lg:block">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h3 className="font-display text-4xl text-executive-navy">50+</h3>
                                    <p className="text-[10px] uppercase tracking-widest text-executive-gray mt-1">Premium Projects</p>
                                </div>
                                <div className="h-[1px] w-full bg-executive-platinum"></div>
                                <div>
                                    <h3 className="font-display text-4xl text-executive-navy">15y</h3>
                                    <p className="text-[10px] uppercase tracking-widest text-executive-gray mt-1">Market Leadership</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
