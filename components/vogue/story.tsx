'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function VogueStory() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="story" className="py-20 bg-vogue-offwhite overflow-hidden">
            <div className="px-8 lg:px-16 container mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Image Column */}
                    <div className="lg:col-span-12 lg:hidden mb-12">
                         <span className="text-xs font-sans uppercase tracking-[0.4em] text-neutral-400">
                            My Journey
                        </span>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-[3/4] w-full">
                            {/* Main Image (Mockup 1) */}
                            <div className={`relative w-[85%] aspect-[3/4] overflow-hidden transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                                <Image 
                                    src="/sachin-story-bg.png" 
                                    alt="Sachin Ingle Portrait" 
                                    fill 
                                    className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 border-[15px] border-white/5 pointer-events-none"></div>
                            </div>
                            
                            {/* Secondary Image (Final Mockup with Logo) */}
                            <div className={`absolute -bottom-12 -right-4 w-[60%] aspect-[4/5] overflow-hidden shadow-2xl transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                <Image 
                                    src="/sachin-story-2.png" 
                                    alt="Sachin Ingle Visionary" 
                                    fill 
                                    className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 border-[10px] border-white/10 pointer-events-none"></div>
                            </div>
                        </div>
                        
                        {/* Decorative Element */}
                        <div className={`absolute -bottom-20 -left-10 w-40 h-40 bg-vogue-champagne/10 -z-10 transition-all duration-1000 delay-500 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}></div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 lg:pl-12">
                        <div className="max-w-2xl">
                            <div className="overflow-hidden mb-4">
                                <span className={`hidden lg:block text-xs font-sans uppercase tracking-[0.4em] text-neutral-400 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                                    My Journey
                                </span>
                            </div>
                            
                            <h2 className={`font-serif text-3xl lg:text-4xl mb-12 text-vogue-black/80 leading-tight transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                Crafting <span className="italic">Destinies</span> through the Land.
                            </h2>

                            <div className={`space-y-6 text-lg font-light leading-relaxed text-neutral-500 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                <p>
                                    Born and raised in the heart of Nagpur, my connection with this land is deeply personal. I didn&apos;t just see plots of earth; I saw the foundation of families, the birthplace of businesses, and the roots of community.
                                </p>
                                <p>
                                    In 2010, I embarked on a mission to redefine land development. I don&apos;t see it as a transactional business. I see it as building spaces that offer more than just square footage.
                                </p>
                                <p>
                                    Specialized in Nagpur&apos;s high-velocity growth corridors including <span className="text-vogue-black font-medium">Wardha Road, Hingna, and Besa-Pipla</span>, where we identify value long before it becomes obvious to the market.
                                </p>
                            </div>

                            <div className={`mt-10 transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                            </div>

                            <div className={`mt-16 pt-12 border-t border-black/5 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                                    <div>
                                        <span className="font-serif text-3xl italic text-vogue-black mb-1 block">Sachin Ingle</span>
                                        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-neutral-400 block border-b border-black/10 pb-4 mb-4">Founder & Visionary</span>
                                        
                                        {/* Credibility bullets consolidated here */}
                                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-300">
                                            <span>10+ Completed Layouts</span>
                                            <span className="text-neutral-200">•</span>
                                            <span>Premium Land Banks</span>
                                            <span className="text-neutral-200">•</span>
                                            <span>Strategic Investments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
