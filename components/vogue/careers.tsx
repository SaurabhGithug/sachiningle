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
        <section className="bg-white min-h-screen">
             {/* Hero Section */}
            <div className="relative pt-32 pb-24 bg-executive-navy overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10 px-8 lg:px-16 max-w-[1440px] mx-auto text-center">
                    <FadeIn delay={0.1} duration={0.8} direction="up">
                        <span className="block text-xs font-sans uppercase tracking-[0.4em] text-executive-blue mb-6">
                            Work With Us
                        </span>
                        <h1 className="font-display text-5xl lg:text-7xl text-white mb-8 leading-tight">
                            Build Your <span className="italic font-serif text-executive-platinum">Legacy</span>
                        </h1>
                        <p className="font-serif text-lg text-executive-platinum/80 max-w-2xl mx-auto leading-relaxed">
                            Join a team committed to transforming Nagpur&apos;s landscape with integrity, precision, and a vision for the future.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Values Grid */}
            <div className="py-24 bg-executive-platinum/10">
                 <div className="px-8 lg:px-16 max-w-[1440px] mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Integrity First", desc: "Transactions as transparent as our titles." },
                            { title: "Precision", desc: "Every square foot planned with purpose." },
                            { title: "Growth", desc: "We invest in our people as we do in our land." }
                        ].map((item, idx) => (
                            <FadeIn key={idx} delay={0.2 * (idx + 1)} duration={0.8} direction="up">
                                <div className="text-center">
                                    <h3 className="font-display text-2xl text-executive-navy mb-4">{item.title}</h3>
                                    <p className="font-sans text-sm text-executive-gray leading-relaxed">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                 </div>
            </div>

            {/* Openings */}
            <div className="py-24 px-8 lg:px-16 max-w-[1440px] mx-auto">
                <FadeIn delay={0.2} duration={0.8} direction="up" className="mb-16">
                    <h2 className="font-display text-4xl text-executive-navy mb-4">Current Openings</h2>
                    <div className="h-1 w-24 bg-executive-blue"></div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {openings.map((job, idx) => (
                        <FadeIn key={idx} delay={0.3 * (idx + 1)} duration={0.8} direction="up">
                            <SpotlightCard className="h-full p-8 flex flex-col justify-between group hover:border-executive-blue/30" spotlightColor="rgba(37, 99, 235, 0.1)">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="font-display text-2xl text-executive-navy group-hover:text-executive-blue transition-colors">{job.role}</h3>
                                        <span className="px-3 py-1 bg-executive-platinum text-[10px] uppercase tracking-wider font-semibold text-executive-navy rounded-full">
                                            {job.type}
                                        </span>
                                    </div>
                                    <p className="font-sans text-sm text-executive-gray mb-8 leading-relaxed">
                                        {job.desc}
                                    </p>
                                </div>
                                
                                <div className="flex justify-between items-center pt-8 border-t border-executive-navy/5">
                                    <span className="text-xs font-sans text-executive-blue font-semibold uppercase tracking-wider">
                                        {job.location}
                                    </span>
                                    <Button variant="ghost-luxury" className="px-0 hover:bg-transparent hover:text-executive-blue" asChild>
                                        <a href={`mailto:connect@sachiningle.com?subject=Application for ${job.role} - ${job.location}`}>
                                            Apply Now &rarr;
                                        </a>
                                    </Button>
                                </div>
                            </SpotlightCard>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.6} duration={0.8} direction="up" className="mt-24 text-center">
                    <div className="bg-executive-navy/5 p-12 rounded-2xl max-w-4xl mx-auto">
                        <h3 className="font-display text-3xl text-executive-navy mb-6">Don&apos;t see your role?</h3>
                        <p className="font-serif text-executive-gray mb-8">
                            We are always looking for exceptional talent. Send your portfolio to us.
                        </p>
                        <a href="mailto:connect@sachiningle.com">
                             <Button variant="luxury" size="lg">
                                Email Your Resume
                            </Button>
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
