import React from 'react';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';

export default function Works() {
    return (
        <section id="work" className="py-16 lg:py-36 bg-white relative">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
                {/* Section Header */}
                <div className="mb-12 lg:mb-24">
                    <FadeIn delay={0.1} duration={0.6} direction="up">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[2px] w-8 bg-executive-gold"></span>
                            <span className="text-xs font-sans uppercase tracking-[0.3em] text-executive-gold">Portfolio</span>
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-executive-navy mb-4">
                            Signature <br /> <span className="italic font-serif text-executive-gold/80">Developments</span>
                        </h2>
                        <div className="h-px w-full max-w-xs bg-executive-navy/10 mt-8"></div>
                    </FadeIn>
                </div>

                {/* Project — Saraswati Nagari */}
                <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Image */}
                    <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[16/10]">
                        <FadeIn delay={0.1} duration={0.6} direction="up" className="w-full h-full relative">
                            <div className="w-full h-full overflow-hidden relative">
                                 <Image
                                    src="/about_aerial.jpg"
                                    alt="Saraswati Nagari - Premium Layouts"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-[2s] ease-out"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-executive-navy/60 via-executive-navy/10 to-transparent" />
                                
                                {/* Numbered label */}
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="font-display text-6xl lg:text-8xl text-white/10 leading-none">01</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:col-span-5 lg:pl-4">
                         <FadeIn delay={0.15} duration={0.6} direction="up">
                            <h3 className="font-display text-3xl lg:text-4xl mb-4 lg:mb-6 text-executive-navy">Saraswati Nagari</h3>
                            <p className="font-serif text-base lg:text-lg text-executive-gray leading-relaxed mb-6 lg:mb-8">
                                A landmark development redefining suburban living with meticulously planned layouts and premium amenities.
                            </p>
                        </FadeIn>

                        {/* Case Highlight */}
                        <FadeIn delay={0.2} duration={0.6} direction="up">
                            <div className="p-6 lg:p-8 border-l-[3px] border-l-executive-gold bg-executive-cream/60 mb-8 lg:mb-12">
                                <p className="font-display text-lg lg:text-xl mb-2 text-executive-navy">Saraswati Nagari Phase X</p>
                                <p className="font-sans text-[10px] uppercase tracking-widest text-executive-gray">120+ plots • 100% sold • Delivered in 24 months</p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.25} duration={0.6} direction="up" className="mt-8">
                            <a 
                                href="https://saraswati-nagari.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-4 px-8 lg:px-10 py-4 lg:py-5 bg-executive-navy text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-executive-charcoal transition-all duration-500 group/btn"
                            >
                                Discover Portfolio
                                <span className="w-6 h-px bg-executive-gold group-hover/btn:w-10 transition-all duration-500"></span>
                            </a>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
