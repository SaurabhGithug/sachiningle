'use client';

import FadeIn from '@/components/animations/fade-in';
import SpotlightCard from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';

export default function VogueCareers() {
    const openings = [
        {
            role: "Site Engineer",
            location: "Nagpur (Field)",
            type: "Full-time",
            desc: "Oversee layout development and infrastructure execution."
        },
        {
            role: "Sales Executive",
            location: "Nagpur (HQ)",
            type: "Full-time",
            desc: "Manage client relationships and premium plot sales."
        },
        {
            role: "Legal Consultant",
            location: "Remote / Hybrid",
            type: "Contract",
            desc: "Handle 7/12 clearances and NMRDA documentation."
        }
    ];

    return (
        <section className="bg-executive-cream min-h-screen grain-texture">
             {/* Hero Section */}
            <div className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 bg-executive-navy overflow-hidden">
                <div className="absolute inset-0 bg-executive-gold/5 blur-[120px] pointer-events-none"></div>
                <div className="relative z-10 px-8 lg:px-16 max-w-[1440px] mx-auto text-center">
                    <FadeIn delay={0.1} duration={0.8} direction="up">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="h-[2px] w-8 lg:w-12 bg-executive-gold"></span>
                            <span className="text-[10px] lg:text-xs font-sans uppercase tracking-[0.4em] text-executive-gold">
                                Work With Us
                            </span>
                            <span className="h-[2px] w-8 lg:w-12 bg-executive-gold"></span>
                        </div>
                        <h1 className="font-display text-4xl lg:text-8xl text-white mb-8 leading-tight tracking-tight">
                            Build Your <span className="italic font-serif text-executive-gold">Legacy</span>
                        </h1>
                        <p className="font-serif text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                            Join a team committed to transforming Nagpur&apos;s landscape with integrity, precision, and a vision for the future.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Values Grid */}
            <div className="py-24 border-b border-executive-navy/5">
                 <div className="px-8 lg:px-16 max-w-[1440px] mx-auto">
                    <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
                        {[
                            { title: "Integrity First", desc: "Transactions as transparent as our titles." },
                            { title: "Precision", desc: "Every square foot planned with purpose." },
                            { title: "Growth", desc: "We invest in our people as we do in our land." }
                        ].map((item, idx) => (
                            <FadeIn key={idx} delay={0.2 * (idx + 1)} duration={0.8} direction="up">
                                <div className="text-center lg:text-left">
                                    <h3 className="font-display text-2xl lg:text-3xl text-executive-navy mb-4">{item.title}</h3>
                                    <p className="font-sans text-sm text-executive-gray leading-relaxed lg:max-w-xs">{item.desc}</p>
                                    <div className="h-[1px] w-12 bg-executive-gold mt-6 mx-auto lg:mx-0"></div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                 </div>
            </div>

            {/* Openings */}
            <div className="py-24 lg:py-32 px-8 lg:px-16 max-w-[1440px] mx-auto">
                <FadeIn delay={0.2} duration={0.8} direction="up" className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="h-[2px] w-8 bg-executive-gold"></span>
                        <span className="text-xs font-sans uppercase tracking-[0.3em] text-executive-gold font-semibold">Opportunities</span>
                    </div>
                    <h2 className="font-display text-4xl lg:text-6xl text-executive-navy">Current Openings</h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {openings.map((job, idx) => (
                        <FadeIn key={idx} delay={0.1 * idx} duration={0.8} direction="up">
                            <SpotlightCard 
                                className="h-full p-8 lg:p-10 flex flex-col justify-between group bg-white border-executive-navy/5" 
                                spotlightColor="rgba(201, 169, 110, 0.08)"
                            >
                                <div>
                                    <div className="flex flex-col gap-4 mb-6">
                                        <span className="w-fit px-3 py-1 bg-executive-navy text-[10px] uppercase tracking-wider font-semibold text-white">
                                            {job.type}
                                        </span>
                                        <h3 className="font-display text-2xl lg:text-3xl text-executive-navy group-hover:text-executive-gold transition-colors duration-500">{job.role}</h3>
                                    </div>
                                    <p className="font-sans text-sm text-executive-gray mb-8 leading-relaxed">
                                        {job.desc}
                                    </p>
                                </div>
                                
                                <div className="flex justify-between items-center pt-8 border-t border-executive-navy/5">
                                    <span className="text-[11px] font-sans text-executive-gold font-semibold uppercase tracking-[0.2em]">
                                        {job.location}
                                    </span>
                                    <Button variant="ghost" className="px-0 font-sans text-[11px] uppercase tracking-widest hover:bg-transparent hover:text-executive-gold flex items-center gap-2 group/btn" asChild>
                                        <a href={`mailto:connect@sachiningle.com?subject=Application for ${job.role} - ${job.location}`}>
                                            Apply Now
                                            <span className="w-5 h-[1px] bg-executive-navy group-hover/btn:bg-executive-gold group-hover/btn:w-8 transition-all duration-500"></span>
                                        </a>
                                    </Button>
                                </div>
                            </SpotlightCard>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.5} duration={0.8} direction="up" className="mt-32">
                    <div className="bg-executive-navy p-12 lg:p-24 relative overflow-hidden grain-texture">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-executive-gold/5 blur-[100px] pointer-events-none"></div>
                        <div className="relative z-10 text-center max-w-2xl mx-auto">
                            <h3 className="font-display text-4xl lg:text-6xl text-white mb-6 tracking-tight">Don&apos;t see your <span className="italic font-serif text-executive-gold">role?</span></h3>
                            <p className="font-serif text-lg text-white/60 mb-10">
                                We are always looking for exceptional talent. If you share our vision for quality and integrity, we want to hear from you.
                            </p>
                            <a href="mailto:connect@sachiningle.com">
                                 <Button className="px-12 py-6 bg-white text-executive-navy hover:bg-executive-gold hover:text-white transition-all duration-500 rounded-none font-sans text-xs uppercase tracking-[0.2em] font-bold shadow-xl shadow-black/10">
                                    Email Your Resume
                                </Button>
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
