export default function VogueFooter() {
    return (
        <footer className="bg-vogue-offwhite text-vogue-black pt-32 pb-12 px-8 lg:px-16">
            <div className="border-b border-black/10 pb-24 mb-12">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-serif text-7xl lg:text-9xl tracking-tight mb-8">
                            Let&apos;s <br /> <span className="italic">Talk.</span>
                        </h2>
                        <a href="mailto:connect@sachiningle.com" className="inline-flex items-center gap-4 text-sm font-sans uppercase tracking-[0.2em] group">
                            connect@sachiningle.com
                            <span className="w-8 h-[1px] bg-black group-hover:w-16 transition-all duration-500"></span>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-12 lg:pl-32">
                        <div>
                            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6">Socials</h4>
                            <ul className="space-y-4 font-sans text-sm">
                                <li><a href="#" className="hover:italic transition-all">Instagram</a></li>
                                <li><a href="#" className="hover:italic transition-all">LinkedIn</a></li>
                                <li><a href="#" className="hover:italic transition-all">Twitter</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6">Office</h4>
                            <address className="font-sans text-sm not-italic leading-relaxed">
                                Wadi, Hazarihpahad <br />
                                Nagpur, MH <br />
                                India
                            </address>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center text-xs font-sans uppercase tracking-widest text-neutral-400">
                <div>&copy; 2024 Sachin Ingle</div>
                <div className="mt-4 lg:mt-0">Designed by Antigravity</div>
            </div>
        </footer>
    );
}
