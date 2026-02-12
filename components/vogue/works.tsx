import Image from 'next/image';
import Link from 'next/link';

export default function VogueWorks() {
    return (
        <section id="flagship" className="bg-vogue-offwhite pt-32 pb-48">
            <div id="work" className="px-8 lg:px-16 max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24">
                   <div className="space-y-4">
                        <span className="text-xs font-sans uppercase tracking-[0.4em] text-neutral-400">
                            The Flagship
                        </span>
                        <h2 className="font-serif text-6xl lg:text-8xl leading-none text-vogue-black">
                            Saraswati <span className="italic text-neutral-400">Nagari</span>
                        </h2>
                   </div>
                </div>

                {/* Flagship Brand Showcase */}
                <div className="space-y-48">
                    {/* Saraswati Nagari - External Brand */}
                    <div className="group relative grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 overflow-hidden relative aspect-[4/3] lg:aspect-[16/10]">
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <Image
                                src="/about_aerial.png"
                                alt="Saraswati Nagari"
                                fill
                                priority
                                unoptimized
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s]"
                            />
                        </div>
                        <div className="lg:col-span-5 lg:pl-12">
                            <div className="border-l-2 border-vogue-black/10 pl-6 py-2 mb-8">
                                <p className="font-serif text-2xl italic text-vogue-black mb-1">NMRDA Sanctioned</p>
                                <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-400">Residential Layouts • Nagpur</p>
                            </div>

                            <p className="font-sans text-neutral-500 leading-relaxed mb-8 text-lg">
                                Nagpur&apos;s most trusted name in residential layouts, known for premium aesthetics, transparent titles, and world-class infrastructure.
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start gap-4">
                                    <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0"></span>
                                    <p className="font-sans text-sm text-neutral-600">On-time delivery across all phases of development.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0"></span>
                                    <p className="font-sans text-sm text-neutral-600">Layouts planned with wide roads, green pockets, and utility-ready infrastructure.</p>
                                </li>
                            </ul>

                            {/* Micro Case Highlight */}
                            <div className="bg-white p-6 border border-black/5 mb-10">
                                <p className="font-serif text-xl italic mb-1 text-vogue-black">Saraswati Nagari Phase X</p>
                                <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-400">120+ plots • 100% sold • Delivered in 24 months</p>
                            </div>

                            <div className="mt-12">
                                <a 
                                    href="https://saraswati-nagari.vercel.app/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-xs font-sans uppercase tracking-[0.2em] relative group cursor-pointer text-vogue-black inline-block"
                                >
                                    View Full Collection
                                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                </a>
                                <p className="mt-4 text-[9px] font-sans uppercase tracking-[0.2em] text-neutral-400">See all Saraswati Nagari phases and layouts.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
