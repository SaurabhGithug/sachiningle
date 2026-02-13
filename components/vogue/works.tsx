import React from 'react';
import Image from 'next/image';
import SpotlightCard from '@/components/ui/spotlight-card';
import FadeIn from '@/components/animations/fade-in';

export default function Works() {
    return (
        <section id="work" className="py-16 lg:py-32 bg-executive-white relative">
            <div className="container mx-auto px-4">
                <div className="mb-10 lg:mb-20">
                    <FadeIn delay={0.1} duration={0.6} direction="up">
                        <span className="text-xs font-sans uppercase tracking-[0.3em] text-executive-blue block mb-4">Portfolio</span>
                        <h2 className="font-display text-4xl lg:text-7xl text-executive-navy mb-8">
                            Signature <br /> <span className="italic font-serif text-executive-gray/60">Developments</span>
                        </h2>
                    </FadeIn>
                </div>

                {/* Saraswati Nagari - External Brand */}
                <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[16/10]">
                        <FadeIn delay={0.1} duration={0.6} direction="up" className="w-full h-full relative">
                            <SpotlightCard className="w-full h-full rounded-2xl overflow-hidden" spotlightColor="rgba(255, 255, 255, 0.25)">
                                 <Image
                                    src="/about_aerial.png"
                                    alt="Saraswati Nagari - Premium Layouts"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s]"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-executive-navy/80 via-transparent to-transparent opacity-40" />
                            </SpotlightCard>
                        </FadeIn>
                    </div>
                    <div className="lg:col-span-5 lg:pl-8">
                         <FadeIn delay={0.15} duration={0.6} direction="up">
                            <h3 className="font-display text-3xl lg:text-4xl mb-4 lg:mb-6 text-executive-navy">Saraswati Nagari</h3>
                            <p className="font-serif text-base lg:text-lg text-executive-gray leading-relaxed mb-6 lg:mb-8">
                                A landmark development redefining suburban living with meticulously planned layouts and premium amenities.
                            </p>
                        </FadeIn>

                        {/* Micro Case Highlight */}
                        <FadeIn delay={0.2} duration={0.6} direction="up">
                            <SpotlightCard className="p-6 lg:p-8 border-l-4 border-l-executive-navy bg-executive-platinum/10 mb-8 lg:mb-12 rounded-lg" spotlightColor="rgba(2, 6, 23, 0.05)">
                                <p className="font-display text-lg lg:text-xl mb-2 text-executive-navy">Saraswati Nagari Phase X</p>
                                <p className="font-sans text-[10px] uppercase tracking-widest text-executive-gray">120+ plots • 100% sold • Delivered in 24 months</p>
                            </SpotlightCard>
                        </FadeIn>

                        <FadeIn delay={0.25} duration={0.6} direction="up" className="mt-8">
                            <a 
                                href="https://saraswati-nagari.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-8 lg:px-10 py-4 lg:py-5 bg-executive-navy text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-executive-blue transition-all duration-300 inline-block shadow-xl shadow-executive-navy/20 hover:-translate-y-1"
                            >
                                Discover Portfolio
                            </a>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
