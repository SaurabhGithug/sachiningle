"use client";

import { useState } from 'react';
import { z } from 'zod';
import { cn } from "@/lib/utils";

// Define Zod schema for form validation
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
    phone: z.string().regex(/^\+?[\d\s-]{10,}$/, "Please enter a valid phone number (at least 10 digits)"),
    interest: z.enum(["Residential Plot", "Commercial Land", "Investment/Partnership"], {
        errorMap: () => ({ message: "Please select a valid investment type" })
    }),
    requirements: z.string().min(10, "Please provide more details").max(1000, "Requirement description is too long"),
    honeyPot: z.string().max(0, "Bot detected"), // Should remain empty
    consent: z.literal("on", {
        errorMap: () => ({ message: "You must consent to continue" })
    }),
});

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        
        // Extract data
        const rawData = {
            name: (formData.get('name') as string)?.trim(),
            phone: (formData.get('phone') as string)?.replace(/[^\d+]/g, ''),
            interest: formData.get('interest') as string,
            requirements: (formData.get('requirements') as string)?.trim(),
            honeyPot: formData.get('b_phone') as string, // Maps to hidden input
            consent: formData.get('consent') as string,
        };

        // Validate with Zod
        const result = contactSchema.safeParse(rawData);

        if (!result.success) {
            const firstError = result.error.errors[0].message;
            alert(firstError);
            setIsSubmitting(false);
            return;
        }

        const data = result.data;

        // Construct the WhatsApp message
        const message = `Hi Sachin, I am ${data.name}. I am interested in ${data.interest}.\n\nMy Requirements: ${data.requirements}\n\nPlease contact me at: ${data.phone}`;
        const encodedMessage = encodeURIComponent(message);
        
        // WhatsApp link - using business number
        const whatsappUrl = `https://wa.me/919822555123?text=${encodedMessage}`;

        // Redirect after a short delay for UX
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);
        }, 800);
    };

    const handleEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        // Get form data directly from the DOM
        const form = e.currentTarget.closest('form');
        if (!form) return;
        
        const formData = new FormData(form);
        const rawData = {
            name: (formData.get('name') as string)?.trim(),
            phone: (formData.get('phone') as string)?.replace(/[^\d+]/g, ''),
            interest: formData.get('interest') as string,
            requirements: (formData.get('requirements') as string)?.trim(),
            honeyPot: formData.get('b_phone') as string,
            consent: formData.get('consent') as string,
        };

        // Basic validation for email button click
        const result = contactSchema.safeParse(rawData);

        if (!result.success) {
             const firstError = result.error.errors[0].message;
             alert(firstError);
             return;
        }
        
        const data = result.data;

        const subject = `Inquiry: ${data.interest} - ${data.name}`;
        const body = `Hi Sachin,\n\nI am ${data.name}.\nI am interested in ${data.interest}.\n\nMy Requirements:\n${data.requirements}\n\nPlease contact me at: ${data.phone}`;
        
        window.location.href = `mailto:connect@sachiningle.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="group">
                <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-executive-gold mb-2 transition-colors group-focus-within:text-executive-navy">Full Name</label>
                <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full bg-transparent border-b border-executive-navy/10 py-4 focus:border-executive-gold outline-none transition-all font-serif text-2xl placeholder:text-executive-navy/20" 
                    placeholder="e.g. Anand Mahindra" 
                />
            </div>
            <div className="group">
                <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-executive-gold mb-2 transition-colors group-focus-within:text-executive-navy">Mobile Number</label>
                <input 
                    type="tel" 
                    name="phone" 
                    required 
                    className="w-full bg-transparent border-b border-executive-navy/10 py-4 focus:border-executive-gold outline-none transition-all font-serif text-2xl placeholder:text-executive-navy/20" 
                    placeholder="+91 00000 00000" 
                />
            </div>
            <div className="group">
                <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-executive-gold mb-2 transition-colors group-focus-within:text-executive-navy">Primary Interest</label>
                <div className="relative">
                    <select 
                        name="interest" 
                        required 
                        className="w-full bg-transparent border-b border-executive-navy/10 py-4 focus:border-executive-gold outline-none transition-all font-serif text-xl appearance-none rounded-none text-executive-navy cursor-pointer"
                    >
                        <option value="" disabled selected>Select Investment Type</option>
                        <option value="Residential Plot">Residential Layout</option>
                        <option value="Commercial Land">Commercial Land Bank</option>
                        <option value="Investment/Partnership">Strategic Partnership</option>
                    </select>
                    <div className="absolute right-0 bottom-4 pointer-events-none opacity-40">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5"/></svg>
                    </div>
                </div>
            </div>
            <div className="group">
                <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-executive-gold mb-2 transition-colors group-focus-within:text-executive-navy">Vision & Requirements</label>
                <textarea
                    id="requirements"
                    name="requirements"
                    className="w-full bg-transparent border-b border-executive-navy/10 py-4 focus:border-executive-gold outline-none transition-all font-serif text-xl resize-none min-h-[120px] placeholder:text-executive-navy/20"
                    rows={4}
                    required
                    placeholder="Describe your ideal location, investment horizon, or specific layout needs..."
                />
            </div>
            
            {/* Honeypot field */}
            <div className="hidden" aria-hidden="true">
                <input type="text" name="b_phone" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
                <div className="flex items-start gap-4 mb-10 group/check">
                    <input 
                        type="checkbox" 
                        id="consent" 
                        name="consent" 
                        required 
                        className="mt-1.5 w-4 h-4 rounded-none accent-executive-navy border-executive-navy/20 cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-[10px] font-sans text-executive-gray uppercase tracking-[0.15em] leading-relaxed cursor-pointer group-hover/check:text-executive-navy transition-colors">
                        I consent to the collection of my details for <span className="underline decoration-executive-gold/40 underline-offset-4">exclusive investment updates</span>.
                    </label>
                </div>
                
                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-executive-navy text-white py-6 text-xs font-bold uppercase tracking-[0.3em] hover:bg-executive-charcoal transition-all duration-500 shadow-2xl shadow-black/10 disabled:opacity-50 disabled:cursor-wait rounded-none relative overflow-hidden group/btn"
                >
                    <span className="relative z-10">{isSubmitting ? 'Architecting Connection...' : 'Request Consultation'}</span>
                    <div className="absolute inset-0 bg-executive-gold transform translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 z-20">
                        {isSubmitting ? 'Architecting Connection...' : 'Request Consultation'}
                    </span>
                </button>
                
                <button 
                    type="button"
                    onClick={handleEmail}
                    className="w-full text-[10px] font-sans uppercase tracking-[0.25em] text-executive-gold hover:text-executive-navy mt-8 transition-all border-b border-transparent hover:border-executive-navy/30 pb-1 w-fit mx-auto block font-semibold"
                >
                    Prefer Email Communication?
                </button>
                
                <div className="mt-10 pt-10 border-t border-executive-navy/5 flex flex-col items-center gap-4">
                    <p className="text-[9px] font-sans text-executive-gray/60 uppercase tracking-[0.25em] text-center">
                        Private Client Service • Response within 24h
                    </p>
                    <div className="flex gap-2 text-[9px] uppercase tracking-widest text-executive-gold font-bold items-center opacity-80">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M5 2L6.5 4.5L9.5 5L7 7.5L8 10.5L5 9L2 10.5L3 7.5L0.5 5L3.5 4.5L5 2Z"/></svg>
                        Secured with Industry Standards
                    </div>
                </div>
            </div>
        </form>
    );
}
