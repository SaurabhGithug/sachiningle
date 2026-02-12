'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function VogueHero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-16 px-8 lg:px-16 overflow-hidden bg-vogue-offwhite text-vogue-black">

            {/* Background Typography Decoration */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
                <span className="font-serif text-[40vw] leading-none whitespace-nowrap">VISION</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 h-full items-end">

                {/* Title Block (Left) */}
                <div className="lg:col-span-7 z-10 pt-12 lg:pt-0">
                    <div className="overflow-hidden">
                        <h1 className={`font-serif text-5xl md:text-7xl lg:text-[10rem] leading-[0.9] text-vogue-black transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0' : 'translate-y-full'}`}>
                            SACHIN <br /> <span className="italic relative">INGLE <span className="absolute -bottom-6 right-0 text-[10px] lg:text-sm font-sans italic tracking-normal opacity-20">Est. 2010</span></span>
                        </h1>
                    </div>

                    <div className="overflow-hidden mt-6">
                        <p className={`font-sans text-xs lg:text-sm uppercase tracking-[0.4em] text-neutral-400 transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                            Land Visionary • Nagpur
                        </p>
                    </div>

                    <div className="mt-12 max-w-xl overflow-hidden">
                        <div className={`transition-all duration-1000 delay-600 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                            <p className="font-sans text-lg lg:text-xl text-neutral-600 leading-relaxed">
                                Helping families find land they can trust— with clear titles, in Nagpur&apos;s most promising corridors.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 overflow-hidden">
                        <div className={`transition-all duration-1000 delay-900 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                            <Link href="/#flagship" className="inline-flex items-center gap-4 text-xs font-sans uppercase tracking-[0.2em] group">
                                <span className="w-12 h-[1px] bg-black group-hover:w-24 transition-all duration-500"></span>
                                Explore Portfolio
                            </Link>
                            <p className="mt-2 text-[10px] font-sans uppercase tracking-[0.2em] text-neutral-400">View delivered layouts and land projects.</p>
                        </div>
                        

                    </div>
                </div>

                {/* Image Block (Right) */}
                <div className="lg:col-span-5 h-full relative flex items-end justify-end lg:-mb-16">
                    <div className="relative w-full aspect-[3/4] max-w-lg">
                        {/* Decorative Frame */}
                        <div className={`absolute -top-6 -right-6 w-full h-full border border-black/10 z-0 transition-all duration-1000 delay-500 transform ${mounted ? 'opacity-100' : 'opacity-0'}`}></div>

                        {/* Main Image */}
                        <div className={`w-full h-full overflow-hidden relative z-10 transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <Image
                                src="/sachin-ingle.jpg"
                                alt="Sachin Ingle"
                                fill
                                className="object-cover grayscale-[20%] contrast-[1.1] hover:scale-105 transition-transform duration-[1.5s]"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl z-20 animate-spin-slow">
                            <svg viewBox="0 0 100 100" width="100" height="100">
                                <defs>
                                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                </defs>
                                <text fontSize="11" fontFamily="var(--font-manrope)" fontWeight="500" letterSpacing="2">
                                    <textPath xlinkHref="#circle">
                                        ESTABLISHED 2010 • NAGPUR •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
