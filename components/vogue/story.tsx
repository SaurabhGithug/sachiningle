'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function VogueStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <section ref={containerRef} id="story" className="relative py-32 bg-executive-platinum overflow-hidden">
            {/* Liquid Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white rounded-full mix-blend-overlay blur-3xl opacity-60 animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-executive-blue/10 rounded-full mix-blend-multiply blur-3xl opacity-60 animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-executive-navy/5 rounded-full mix-blend-multiply blur-3xl opacity-60 animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    
                    {/* Liquid Image Container */}
                    <motion.div 
                        style={{ y: y1, rotate }}
                        className="w-full lg:w-1/2 relative"
                    >
                         <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
                            {/* Morphing Blob Mask */}
                            <motion.div 
                                className="absolute inset-0 overflow-hidden shadow-2xl shadow-executive-navy/20"
                                style={{
                                    borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%",
                                }}
                                animate={{
                                    borderRadius: [
                                        "45% 55% 50% 50% / 55% 45% 55% 45%",
                                        "55% 45% 60% 40% / 50% 60% 30% 70%",
                                        "40% 60% 45% 55% / 45% 55% 60% 40%",
                                        "45% 55% 50% 50% / 55% 45% 55% 45%"
                                    ]
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Image 
                                    src="/sachin-story-bg.png" 
                                    alt="Sachin Ingle Portrait" 
                                    fill 
                                    className="object-cover scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-executive-navy/40 to-transparent mix-blend-multiply" />
                            </motion.div>

                            {/* Floating Card Element */}
                            <motion.div 
                                style={{ y: y2 }}
                                className="absolute -bottom-12 -right-6 w-48 lg:w-64 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
                            >
                                <div className="space-y-2">
                                    <div className="h-1 w-12 bg-executive-blue/30 rounded-full" />
                                    <p className="font-serif text-2xl text-executive-navy italic">&quot;Vision over View.&quot;</p>
                                    <p className="text-[10px] uppercase tracking-widest text-executive-gray">Est. 2010</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 lg:pl-16">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-xs font-sans uppercase tracking-[0.4em] text-executive-blue mb-4 block">
                                The Origin Theme
                            </span>
                            <h2 className="font-display text-5xl lg:text-7xl leading-[1.1] text-executive-navy mb-8">
                                Crafting <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-executive-blue to-executive-navy opacity-80 italic font-serif">Destinies.</span>
                            </h2>
                            
                            <div className="space-y-8 text-lg font-light leading-relaxed text-executive-gray">
                                <p>
                                    Nagpur isn&apos;t just geography to me. It&apos;s the canvas where families paint their futures. From the pulsing arteries of <span className="font-medium text-executive-navy">Wardha Road</span> to the quiet promise of Besa-Pipla, I read the land&apos;s potential before others see the path.
                                </p>
                                <p>
                                    Real estate is often transactional. My approach is <span className="italic font-serif text-executive-navy">sculptural</span>. We don&apos;t just cut plots; we carve ecosystems where communities can take root and flourish for generations.
                                </p>
                            </div>

                            <div className="mt-12 flex flex-wrap gap-4">
                                {["Strategic Land Banks", "10+ Completed Layouts", "Visionary Approach"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full border border-executive-navy/10 text-[10px] uppercase tracking-widest text-executive-navy bg-white/50 backdrop-blur-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
