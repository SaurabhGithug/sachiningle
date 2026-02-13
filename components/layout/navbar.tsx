"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Philosophy", href: "/#philosophy" },
        { name: "Work", href: "/#work" },
        { name: "Journal", href: "/journal" },
        { name: "Careers", href: "/careers" }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 z-50 py-8 border-b border-transparent"
        >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex items-center justify-between">
                
                {/* Logo */}
                <Link href="/" className="relative z-50 group">
                    <span className="font-display text-2xl tracking-tighter transition-colors duration-300 text-executive-navy">
                        SACHIN<span className="font-serif italic font-light opacity-70">INGLE</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-10">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href}
                            className="text-sm uppercase tracking-[0.2em] font-sans transition-all duration-300 relative group text-executive-navy/70 hover:text-executive-navy"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-executive-navy" />
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Link 
                        href="/contact"
                        className="px-8 py-3 text-[10px] uppercase tracking-[0.25em] font-bold rounded-full transition-all duration-300 border bg-executive-navy text-white border-executive-navy hover:bg-executive-blue hover:border-executive-blue shadow-xl shadow-executive-navy/10"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Icons */}
                 <button 
                    onClick={() => setMobileMenuOpen(true)}
                    className="lg:hidden p-2 text-executive-navy z-50 relative"
                    aria-label="Toggle Menu"
                >
                    <Menu className="w-8 h-8" />
                </button>
            </div>

             {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-executive-navy z-[100] transition-transform duration-500 flex flex-col items-center justify-center p-8 space-y-8",
                mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            )}>
                <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-4"
                    aria-label="Close Menu"
                >
                    <X className="w-10 h-10" />
                </button>

                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-4xl font-display text-white hover:text-executive-blue transition-colors tracking-tight"
                    >
                        {item.name}
                    </Link>
                ))}
                <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-12 py-5 bg-white text-executive-navy text-sm uppercase tracking-[0.2em] rounded-full hover:bg-executive-blue hover:text-white transition-all duration-300 mt-8"
                >
                    Get in Touch
                </Link>
            </div>
        </motion.nav>
    );
}
