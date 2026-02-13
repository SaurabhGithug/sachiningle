import ContactForm from "@/components/vogue/contact-form";
import FadeIn from "@/components/animations/fade-in";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-executive-cream text-executive-navy selection:bg-executive-navy selection:text-white grain-texture">
            <div className="pt-32 lg:pt-48 pb-20 px-6 lg:px-16 min-h-screen flex flex-col justify-between max-w-[1440px] mx-auto relative z-10">
                
                <div className="flex-1">
                    <FadeIn delay={0.1} duration={0.8} direction="up">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[2px] w-8 lg:w-12 bg-executive-gold"></span>
                            <span className="text-[10px] lg:text-xs font-sans uppercase tracking-[0.4em] text-executive-gold">
                                Inquiries
                            </span>
                        </div>
                        <h1 className="font-display text-5xl lg:text-[7rem] leading-[1.1] text-executive-navy mb-12 lg:mb-20 tracking-tighter">
                            Start the <br /> <span className="italic font-serif text-executive-gold">Conversation</span>
                        </h1>
                    </FadeIn>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        <FadeIn delay={0.2} duration={0.8} direction="up">
                            <div>
                                <p className="font-serif text-lg lg:text-2xl text-executive-gray max-w-md leading-relaxed mb-16">
                                    Share your investment goals or layout requirements, and I&apos;ll personally help you evaluate the right land opportunity in Nagpur.
                                </p>

                                <div className="space-y-12 transition-all">
                                    <div className="group">
                                        <h3 className="text-[10px] font-sans uppercase tracking-[0.2em] text-executive-gold mb-3 font-semibold">Direct Line</h3>
                                        <p className="font-serif text-3xl lg:text-4xl hover:text-executive-gold cursor-pointer transition-all">+91 9822 555 123</p>
                                    </div>
                                    <div className="group">
                                        <h3 className="text-[10px] font-sans uppercase tracking-[0.2em] text-executive-gold mb-3 font-semibold">Private Email</h3>
                                        <a href="mailto:connect@sachiningle.com" className="font-serif text-3xl lg:text-4xl hover:text-executive-gold cursor-pointer transition-all break-words">connect@sachiningle.com</a>
                                    </div>
                                    <div className="pt-8 border-t border-executive-navy/5">
                                        <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-executive-navy/40">Office HQ</p>
                                        <p className="font-serif text-lg text-executive-navy mt-2">Wadi, Hazarihpahad, Nagpur, MH, India</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3} duration={0.8} direction="up" className="lg:sticky lg:top-32">
                            <div id="inquiry-form" className="bg-white p-8 lg:p-14 shadow-2xl shadow-black/5 border border-executive-navy/5 relative overflow-hidden">
                                {/* Decorative gold bar */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-executive-gold"></div>
                                <ContactForm />
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <div className="py-12 border-t border-executive-navy/10 mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-sans uppercase tracking-[0.3em] text-executive-navy/40">
                    <div className="text-center md:text-left">Sachin Ingle • Land Visionary & Developer</div>
                    <div className="flex gap-8">
                        <span>Nagpur, MH</span>
                        <span>&copy; 2026</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
