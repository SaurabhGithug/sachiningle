export default function VogueFooter() {
    return (
        <footer className="bg-executive-navy text-white pt-24 lg:pt-32 pb-12 px-6 lg:px-16 relative grain-texture">
            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="border-b border-white/10 pb-20 lg:pb-24 mb-12">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="font-display text-[2.75rem] md:text-6xl lg:text-8xl xl:text-9xl tracking-tight mb-8 text-white leading-[1.1]">
                                Let&apos;s <br /> <span className="italic font-serif text-executive-gold">Talk.</span>
                            </h2>
                            <a href="mailto:connect@sachiningle.com" className="inline-flex items-center gap-4 text-sm font-sans tracking-[0.2em] group text-white/70 hover:text-executive-gold transition-colors duration-500">
                                connect@sachiningle.com
                                <span className="w-8 h-[1px] bg-executive-gold/50 group-hover:w-16 group-hover:bg-executive-gold transition-all duration-500"></span>
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:pl-32">
                            <div>
                                <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-executive-gold/60 mb-6 font-semibold">Socials</h4>
                                <ul className="space-y-4 font-sans text-sm text-white/70">
                                    <li><a href="#" className="hover:text-executive-gold transition-colors duration-300">Instagram</a></li>
                                    <li><a href="#" className="hover:text-executive-gold transition-colors duration-300">LinkedIn</a></li>
                                    <li><a href="#" className="hover:text-executive-gold transition-colors duration-300">Twitter</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-executive-gold/60 mb-6">Office</h4>
                                <address className="font-sans text-sm not-italic leading-relaxed text-white/70">
                                    Wadi, Hazarihpahad <br />
                                    Nagpur, MH <br />
                                    India
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center text-xs font-sans uppercase tracking-widest text-white/30">
                    <div>&copy; 2026 Sachin Ingle</div>
                    <div className="mt-4 lg:mt-0">Designed by Antigravity</div>
                </div>
            </div>
        </footer>
    );
}
