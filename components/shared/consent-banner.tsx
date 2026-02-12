'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ConsentBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('data-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('data-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 left-8 right-8 z-50 flex justify-center pointer-events-none">
            <div className="bg-white border border-black/10 shadow-2xl p-6 lg:p-8 max-w-2xl w-full pointer-events-auto flex flex-col lg:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex-1">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-400 mb-2">Data Protection Notice</p>
                    <p className="font-sans text-xs text-neutral-600 leading-relaxed uppercase tracking-wider">
                        We use essential cookies and process limited personal data to enhance your experience, compliant with India&apos;s DPDP Act 2023. By continuing, you agree to our <Link href="/privacy" className="text-black underline">Privacy Notice</Link>.
                    </p>
                </div>
                <div className="flex gap-4 shrink-0">
                    <button 
                        onClick={handleAccept}
                        className="bg-vogue-black text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
