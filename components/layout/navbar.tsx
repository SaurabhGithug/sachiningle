"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Philosophy", href: "/about" },
        { label: "Portfolio", href: "/#work" },
        { label: "Journal", href: "/journal" },
    ];

    return (
        <header 
            className={cn(
                "fixed top-6 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4",
                scrolled ? "top-4" : "top-8"
            )}
        >
            <nav 
                className={cn(
                    "w-full max-w-5xl flex items-center justify-between p-2 pl-6 pr-2 rounded-full border transition-all duration-500",
                    scrolled 
                        ? "bg-white/80 backdrop-blur-xl border-white/20 shadow-2xl shadow-executive-navy/10" 
                        : "bg-white/5 backdrop-blur-sm border-white/10"
                )}
            >
                {/* Logo */}
                <Link href="/" className="font-display text-xl tracking-tight text-executive-navy flex items-center gap-2">
                    <span className={cn("font-bold transition-colors", scrolled ? "text-executive-navy" : "text-white")}>
                        SACHIN<span className="font-serif italic text-executive-blue">INGLE</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center bg-executive-navy/5 rounded-full px-2 py-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "px-5 py-2 text-[10px] font-sans uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:bg-white hover:shadow-sm",
                                scrolled ? "text-executive-gray hover:text-executive-navy" : "text-white/80 hover:text-executive-navy"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="ml-2 px-6 py-2.5 bg-executive-navy text-white text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-executive-blue transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Inquire
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button 
                    onClick={() => setMobileMenuOpen(true)}
                    className={cn(
                        "md:hidden p-3 rounded-full transition-colors",
                        scrolled ? "bg-executive-navy/5 text-executive-navy" : "bg-white/10 text-white"
                    )}
                >
                    <Menu className="w-5 h-5" />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-executive-navy z-[60] transition-transform duration-500 flex flex-col items-center justify-center p-8 space-y-8",
                mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            )}>
                <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                >
                    <X className="w-8 h-8" />
                </button>

                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-3xl font-display text-white hover:text-executive-blue transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
                <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-10 py-4 bg-white text-executive-navy text-sm uppercase tracking-widest rounded-full hover:bg-executive-blue hover:text-white transition-all duration-300"
                >
                    Start a Project
                </Link>
            </div>
        </header>
    );
}
