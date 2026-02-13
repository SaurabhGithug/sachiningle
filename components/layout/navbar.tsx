"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navItems = [
        { name: "Philosophy", href: "/#philosophy" },
        { name: "Work", href: "/#work" },
        { name: "Journal", href: "/journal" },
        { name: "Careers", href: "/careers" }
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 py-4 lg:py-6 transition-all duration-500 animate-slideDown",
                scrolled 
                    ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-executive-navy/5 py-3 lg:py-4" 
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex items-center justify-between">
                
                {/* Logo */}
                <Link href="/" className="relative z-[110] group">
                    <span className={cn(
                        "font-display text-xl lg:text-2xl tracking-tighter transition-colors duration-500",
                        mobileMenuOpen ? "text-white" : "text-executive-navy"
                    )}>
                        SACHIN<span className={cn(
                            "font-serif italic font-light transition-colors duration-500",
                            mobileMenuOpen ? "text-executive-gold" : "text-executive-gold"
                        )}>INGLE</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-10">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href}
                            className="text-[11px] uppercase tracking-[0.2em] font-sans transition-all duration-300 relative group text-executive-navy/70 hover:text-executive-navy"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-executive-gold" />
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA Button — Hidden on mobile to prevent overlap */}
                <div className="hidden lg:block">
                    <Link 
                        href="/contact"
                        className="px-8 py-3 text-[10px] uppercase tracking-[0.25em] font-semibold transition-all duration-500 border border-executive-navy/15 text-executive-navy hover:bg-executive-navy hover:text-white hover:border-executive-navy"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                 <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={cn(
                        "lg:hidden p-2 z-[110] relative transition-colors duration-500",
                        mobileMenuOpen ? "text-white" : "text-executive-navy"
                    )}
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

             {/* Mobile Menu Overlay — Fixed background and opacity */}
            <div className={cn(
                "fixed inset-0 bg-executive-navy z-[100] transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-8 space-y-8 grain-texture",
                mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            )}>
                {/* Mobile Menu Content Wrapper for slide-in animation */}
                <div className={cn(
                    "flex flex-col items-center justify-center space-y-8 transition-all duration-700 delay-100",
                    mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}>
                    {navItems.map((item, idx) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-3xl font-display text-white hover:text-executive-gold transition-colors duration-300 tracking-tight"
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-12 py-4 border-2 border-executive-gold text-executive-gold text-sm uppercase tracking-[0.2em] hover:bg-executive-gold hover:text-executive-navy transition-all duration-500 mt-8"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </nav>
    );
}
