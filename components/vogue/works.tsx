import FadeIn from '@/components/animations/fade-in';
import Image from 'next/image';

export default function VogueWorks() {
    return (
        <section id="flagship" className="relative bg-white pt-32 pb-48 overflow-hidden">
            {/* Background Texture - Clean & Minimal */}
            <div className="absolute inset-0 bg-executive-platinum/20 opacity-50 pointer-events-none" />
            
            <div id="work" className="relative z-10 px-8 lg:px-16 max-w-[1440px] mx-auto">
                <FadeIn delay={0.2} duration={1.0} direction="up" className="flex flex-col lg:flex-row justify-between items-end mb-24">
                   <div className="space-y-4">
                        <span className="text-xs font-sans uppercase tracking-[0.4em] text-executive-gray">
                            The Flagship
                        </span>
                        <h2 className="font-display text-5xl lg:text-8xl leading-none text-executive-navy">
                            Saraswati <span className="italic text-executive-blue font-serif">Nagari</span>
                        </h2>
                   </div>
                </FadeIn>

                {/* Flagship Brand Showcase */}
                <div className="space-y-48">
                    {/* Saraswati Nagari - External Brand */}
                    <div className="group relative grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[16/10]">
                            <FadeIn delay={0.4} duration={1.2} direction="up" className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl shadow-executive-navy/10">
                                <div className="w-full h-full relative overflow-hidden">
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
                                </div>
                            </FadeIn>
                        </div>
                        <div className="lg:col-span-5 lg:pl-4">
                            <FadeIn delay={0.6} duration={1.0} direction="up" className="border-l border-executive-navy/10 pl-8 py-2 mb-10">
                                <p className="font-display text-2xl text-executive-navy mb-2">NMRDA Sanctioned</p>
                                <p className="font-sans text-[10px] uppercase tracking-widest text-executive-gray">Residential Layouts • Nagpur</p>
                            </FadeIn>

                            <FadeIn delay={0.7} duration={1.0} direction="up">
                                <p className="font-serif text-xl text-executive-gray leading-relaxed mb-10">
                                    Nagpur&apos;s most trusted name in residential layouts, known for <span className="text-executive-navy italic">premium aesthetics</span>, transparent titles, and world-class infrastructure.
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.8} duration={1.0} direction="up">
                                <ul className="space-y-6 mb-12">
                                    <li className="flex items-start gap-4">
                                        <span className="w-1.5 h-1.5 bg-executive-blue mt-2 shrink-0 rotate-45"></span>
                                        <p className="font-sans text-sm text-executive-gray tracking-wide">On-time delivery across all phases of development.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="w-1.5 h-1.5 bg-executive-blue mt-2 shrink-0 rotate-45"></span>
                                        <p className="font-sans text-sm text-executive-gray tracking-wide">Layouts planned with wide roads, green pockets, and utility-ready infrastructure.</p>
                                    </li>
                                </ul>
                            </FadeIn>

                            {/* Micro Case Highlight */}
                            <FadeIn delay={0.9} duration={1.0} direction="up">
                                <div className="p-8 border-l-4 border-l-executive-navy bg-executive-platinum/30 mb-12 hover:bg-executive-platinum/50 transition-colors duration-500">
                                    <p className="font-display text-xl mb-2 text-executive-navy">Saraswati Nagari Phase X</p>
                                    <p className="font-sans text-[10px] uppercase tracking-widest text-executive-gray">120+ plots • 100% sold • Delivered in 24 months</p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={1.0} duration={1.0} direction="up" className="mt-8">
                                <a 
                                    href="https://saraswati-nagari.vercel.app/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="px-10 py-5 bg-executive-navy text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-executive-blue transition-all duration-300 inline-block shadow-xl shadow-executive-navy/20 hover:-translate-y-1"
                                >
                                    Discover Portfolio
                                </a>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
