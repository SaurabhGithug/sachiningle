"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
    const pathname = usePathname();
    
    // Do not show the global footer on the inquiry/contact page to avoid redundancy
    if (pathname === '/contact') return null;

    return (
        <footer id="contact" className="bg-[#FAFAFA] text-black pt-32 pb-12 px-8 lg:px-16">
            <div className="border-b border-black/10 pb-24 mb-12">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <p className="font-serif text-xl italic text-vogue-black mb-10 max-w-md">
                            Share your investment goals or layout requirements, and I’ll personally help you evaluate the right land opportunity.
                        </p>
                        <h2 className="font-serif text-7xl lg:text-9xl tracking-tight mb-8">
                            Let&apos;s <br /> <span className="italic">Talk.</span>
                        </h2>
                        <div className="mb-8 space-y-6">
                            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">Send a brief about your requirements (budget, preferred location, and timeline).</p>
                            <div className="flex flex-col gap-6">
                                <a href="mailto:hello@sachiningle.com"
                                    className="inline-flex items-center gap-4 text-sm font-sans uppercase tracking-[0.2em] group">
                                    hello@sachiningle.com
                                    <span className="w-8 h-[1px] bg-black group-hover:w-16 transition-all duration-500"></span>
                                </a>
                                <Link href="/contact#inquiry-form" className="inline-block text-xs font-sans uppercase tracking-[0.3em] font-semibold border border-black px-8 py-4 w-fit hover:bg-black hover:text-white transition-all duration-500">
                                    Start Digital Inquiry
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:pl-32">
                        <div>
                            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6 font-semibold">Connect with Sachin</h4>
                            <ul className="social-icons space-y-4 font-sans text-sm">
                                <li><a href="https://www.instagram.com/sachin_ingle8866" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] transition-all duration-300 font-medium">Instagram</a></li>
                                <li><a href="https://www.linkedin.com/in/sachin-ingle-065698392/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-all duration-300 font-medium">LinkedIn</a></li>
                                <li><a href="https://twitter.com/sachiningle" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] transition-all duration-300 font-medium">Twitter</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6">Office</h4>
                            <address className="font-sans text-sm not-italic leading-relaxed">
                                42, Civil Lines <br />
                                Nagpur, MH 440001 <br />
                                India
                            </address>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="flex flex-col lg:flex-row justify-between items-center text-xs font-sans uppercase tracking-widest text-neutral-400">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
                    <div>&copy; {new Date().getFullYear()} Sachin Ingle</div>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
                    </div>
                </div>
                <div className="mt-4 lg:mt-0 text-[10px] opacity-40">Secured with Industry Standards</div>
            </div>
        </footer>
    );
}
