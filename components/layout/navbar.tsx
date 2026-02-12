"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav
            className="fixed top-0 w-full z-50 mix-blend-difference text-white px-8 lg:px-16 py-8 flex justify-between items-center"
        >
            <Link href="/" className="font-serif text-2xl italic tracking-wide">
                SI.
            </Link>
            <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-medium">
                <Link href="/contact" className="hover:italic transition-all">Inquiry</Link>
            </div>
            <div className="md:hidden">
                {/* Minimal mobile menu icon if needed, but keeping it ultra minimal for now */}
                <div className="w-6 h-[1px] bg-white mb-1.5"></div>
                <div className="w-6 h-[1px] bg-white"></div>
            </div>
        </nav>
    );
}
