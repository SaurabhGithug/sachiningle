"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
    const pathname = usePathname();
    
    // Do not show the global footer on the inquiry/contact page to avoid redundancy
    if (pathname === '/contact') return null;

    return (
        <footer id="contact" className="bg-executive-navy text-white pt-32 pb-12 px-8 lg:px-16 border-t border-white/5">
            <div className="border-b border-white/10 pb-24 mb-12">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <p className="font-serif text-2xl italic text-executive-platinum mb-10 max-w-md leading-relaxed">
                            Share your investment goals or layout requirements. I&apos;ll personally help you evaluate the right land opportunity.
                        </p>
                        <h2 className="font-display text-7xl lg:text-9xl tracking-tight mb-8 text-white">
                            Let&apos;s <br /> <span className="italic text-gradient-blue font-serif">Talk.</span>
                        </h2>
                        <div className="mb-8 space-y-8">
                            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">Send a brief about your requirements (budget, preferred location, and timeline).</p>
                            <div className="flex flex-col gap-6">
                                <a href="mailto:connect@sachiningle.com"
                                    className="inline-flex items-center gap-4 text-sm font-sans tracking-[0.2em] group hover:text-executive-blue transition-colors duration-300">
                                    connect@sachiningle.com
                                    <span className="w-8 h-[1px] bg-executive-blue group-hover:w-16 transition-all duration-500"></span>
                                </a>
                                <Link href="/contact#inquiry-form" className="inline-block text-xs font-sans uppercase tracking-[0.3em] font-semibold border border-executive-platinum/30 px-10 py-5 w-fit hover:bg-executive-blue hover:border-executive-blue hover:text-white transition-all duration-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                    Start Digital Inquiry
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:pl-32 pt-12">
                        <div>
                            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-executive-blue mb-8 font-semibold">Connect</h4>
                            <ul className="social-icons space-y-6 font-sans text-sm text-executive-platinum">
                                <li><Link href="/careers" className="hover:text-white transition-all duration-300 font-medium tracking-wide flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-white transition-all duration-300"></span>Careers</Link></li>
                                <li><a href="https://www.instagram.com/sachin_ingle8866" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 font-medium tracking-wide flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-white transition-all duration-300"></span>Instagram</a></li>
                                <li><a href="https://www.linkedin.com/in/sachin-ingle-065698392/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 font-medium tracking-wide flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-white transition-all duration-300"></span>LinkedIn</a></li>
                                <li><a href="https://twitter.com/sachiningle" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 font-medium tracking-wide flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-white transition-all duration-300"></span>Twitter</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-executive-blue mb-8 font-semibold">Office</h4>
                            <address className="font-serif text-lg not-italic leading-loose text-executive-platinum/80">
                                Wadi, Hazarihpahad <br />
                                Nagpur, MH <br />
                                India
                            </address>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="flex flex-col lg:flex-row justify-between items-center text-[10px] font-sans uppercase tracking-widest text-neutral-400">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
                    <div>&copy; {new Date().getFullYear()} Sachin Ingle</div>
                    <div className="flex gap-6">

                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
                <div className="mt-4 lg:mt-0 opacity-40">Secured with Industry Standards</div>
            </div>
        </footer>
    );
}
