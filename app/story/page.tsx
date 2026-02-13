import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/animations/fade-in";

export default function StoryPage() {

    return (
        <main className="min-h-screen bg-white text-vogue-black selection:bg-black selection:text-white">
            
            {/* Hero Section */}
            <section className="pt-48 pb-32 px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <span className="text-xs font-sans uppercase tracking-[0.4em] text-neutral-400 block mb-8">The Narrative</span>
                    <h1 className="font-serif text-6xl lg:text-9xl leading-[0.9] text-vogue-black mb-16">
                        A Decade of <br /> <span className="italic text-neutral-400">Defining Spaces.</span>
                    </h1>
                    
                    <div className="grid lg:grid-cols-12 gap-16 items-end">
                        <div className="lg:col-span-7">
                                <p className="font-serif text-2xl lg:text-4xl text-neutral-600 leading-relaxed italic">
                                &quot;My journey didn&apos;t start with blueprints, but with a simple belief: that land is the most honest asset a man can own.&quot;
                            </p>
                        </div>
                        <div className="lg:col-span-5">
                            <p className="font-sans text-neutral-500 leading-relaxed text-lg">
                                Since 2010, I have been identifying the silent growth corridors of Nagpur, transforming raw earth into structured, compliant, and thriving communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline / Milestones */}
            <section className="py-32 bg-vogue-offwhite">
                <div className="px-8 lg:px-16">
                    <div className="space-y-64 max-w-7xl mx-auto">
                        
                        {/* 2010 - The Beginning */}
                        <div className="group grid lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-5 order-2 lg:order-1">
                                <span className="font-serif text-sm italic text-neutral-400 block mb-4">Chapter I — 2010</span>
                                <h2 className="font-serif text-5xl lg:text-6xl mb-8">The First <br />Acquisition</h2>
                                <p className="font-sans text-neutral-600 leading-relaxed text-lg mb-8">
                                    The journey began with a single layout on the outskirts of Nagpur. It was a lesson in patience, compliance, and the immense responsibility of handling a client&apos;s life savings.
                                </p>
                                <div className="h-[1px] w-24 bg-vogue-black/20"></div>
                            </div>
                            <div className="lg:col-span-7 order-1 lg:order-2">
                                <div className="aspect-[16/10] relative overflow-hidden">
                                     <Image
                                        src="/about_aerial.png"
                                        alt="First Project"
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 2018 - Scaling Up */}
                        <div className="group grid lg:grid-cols-12 gap-16 items-center">
                             <div className="lg:col-span-7">
                                <div className="aspect-[16/10] relative overflow-hidden">
                                     <Image
                                        src="/emerald_estate.png"
                                        alt="Emerald Estate"
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <span className="font-serif text-sm italic text-neutral-400 block mb-4">Chapter II — 2022</span>
                                <h2 className="font-serif text-5xl lg:text-6xl mb-8">The Emerald <br />Standard</h2>
                                <p className="font-sans text-neutral-600 leading-relaxed text-lg mb-8">
                                    By 2022, the vision had expanded. The Emerald Estate became a benchmark for Wardha Road—proving that residential plots could be aesthetically planned with world-class infrastructure.
                                </p>
                                <div className="h-[1px] w-24 bg-vogue-black/20"></div>
                            </div>
                        </div>

                        {/* 2024 - The Flagship */}
                        <div className="group grid lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-5 order-2 lg:order-1">
                                <span className="font-serif text-sm italic text-neutral-400 block mb-4">Chapter III — Today</span>
                                <h2 className="font-serif text-5xl lg:text-7xl mb-8">Saraswati <br />Nagari</h2>
                                <p className="font-sans text-neutral-600 leading-relaxed text-lg mb-12">
                                    Today, all my experience culminates in Saraswati Nagari. More than a project, it is a brand entity that represents 10+ completed layouts and a promise of uncompromised transparency.
                                </p>
                                <a 
                                    href="https://saraswati-nagari.vercel.app/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-block px-12 py-6 bg-vogue-black text-white text-xs font-sans uppercase tracking-[0.3em] hover:bg-neutral-800 transition-colors"
                                >
                                    Experience the Flagship
                                </a>
                            </div>
                            <div className="lg:col-span-7 order-1 lg:order-2">
                                <div className="aspect-[16/11] relative overflow-hidden shadow-2xl">
                                     <Image
                                        src="/saraswati-nagari.png"
                                        alt="Saraswati Nagari Flagship"
                                        fill
                                        unoptimized
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-[3s]"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="py-48 px-8 lg:px-16 text-center bg-white">
                <div className="max-w-3xl mx-auto">
                    <h3 className="font-serif text-4xl lg:text-6xl mb-12">Building for the next decade.</h3>
                     <p className="font-sans text-neutral-500 leading-relaxed text-lg mb-16">
                        The journey of land development is never finished. I continue to identify strategic parcels that will become the landmarks of tomorrow.
                    </p>
                    <Link href="/contact" className="text-xs font-sans uppercase tracking-[0.3em] border-b border-black pb-4 hover:opacity-60 transition-opacity">
                        Let&apos;s Talk About Your Future Land
                    </Link>
                </div>
            </section>

        </main>
    );
}
