"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
        "Philosophy", "Work", "Expertise", "Journal"
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
                scrolled 
                    ? "bg-executive-navy/90 backdrop-blur-md py-4 border-white/10 shadow-lg" 
                    : "bg-transparent py-8"
            )}
        >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex items-center justify-between">
                
                {/* Logo */}
                <Link href="/" className="relative z-50 group">
                    <span className={cn(
                        "font-display text-2xl tracking-tighter transition-colors duration-300",
                        scrolled ? "text-white" : "text-executive-navy"
                    )}>
                        SACHIN<span className="font-serif italic font-light opacity-70">INGLE</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-10">
                    {navItems.map((item) => (
                        <Link 
                            key={item} 
                            href={`/#${item.toLowerCase()}`}
                            className={cn(
                                "text-sm uppercase tracking-[0.2em] font-sans transition-all duration-300 relative group",
                                scrolled ? "text-white/70 hover:text-white" : "text-executive-navy/70 hover:text-executive-navy"
                            )}
                        >
                            {item}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full",
                                scrolled ? "bg-white" : "bg-executive-navy"
                            )} />
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Link 
                        href="/contact"
                        className={cn(
                            "px-8 py-3 text-[10px] uppercase tracking-[0.25em] font-bold rounded-full transition-all duration-300 border",
                            scrolled 
                                ? "bg-white text-executive-navy border-white hover:bg-executive-platinum" 
                                : "bg-executive-navy text-white border-executive-navy hover:bg-executive-blue hover:border-executive-blue shadow-xl shadow-executive-navy/10"
                        )}
                    >
                        Start Project
                    </Link>
                </div>

                {/* Mobile Icons */}
                 <button 
                    onClick={() => setMobileMenuOpen(true)}
                    className={cn(
                        "lg:hidden p-2",
                        scrolled ? "text-white" : "text-executive-navy"
                    )}
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

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
                        key={item}
                        href={`/#${item.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-3xl font-display text-white hover:text-executive-blue transition-colors"
                    >
                        {item}
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
        </motion.nav>
    );
}
