"use client";

import { useState } from 'react';
import { z } from 'zod';

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
        
        // WhatsApp link - using your business number
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
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
                <label className="block text-xs font-sans uppercase tracking-widest text-neutral-400 mb-2">Full Name</label>
                <input type="text" name="name" required className="w-full bg-transparent border-b border-black/20 py-3 focus:border-black outline-none transition-colors font-serif text-xl" placeholder="e.g. Sachin Ingle" />
            </div>
            <div>
                <label className="block text-xs font-sans uppercase tracking-widest text-neutral-400 mb-2">Mobile Number</label>
                <input type="tel" name="phone" required className="w-full bg-transparent border-b border-black/20 py-3 focus:border-black outline-none transition-colors font-serif text-xl" placeholder="+91" />
            </div>
            <div>
                <label className="block text-xs font-sans uppercase tracking-widest text-neutral-400 mb-2">Primary Interest</label>
                <select name="interest" required className="w-full bg-transparent border-b border-black/20 py-3 focus:border-black outline-none transition-colors font-serif text-xl appearance-none rounded-none">
                    <option value="" disabled selected>Select Investment Type</option>
                    <option value="Residential Plot">Residential Layout</option>
                    <option value="Commercial Land">Commercial Land Bank</option>
                    <option value="Investment/Partnership">Strategic Partnership</option>
                </select>
            </div>
            <div>
                <label className="block text-xs font-sans uppercase tracking-widest text-neutral-400 mb-2">Vision & Requirements</label>
                <textarea
                    id="requirements"
                    name="requirements"
                    className="w-full bg-transparent border-b border-black/20 py-3 focus:border-black outline-none transition-colors font-serif text-xl resize-none min-h-[100px]"
                    rows={4}
                    required
                    placeholder="Describe your ideal location, investment horizon, or specific layout needs..."
                />
            </div>
            {/* Honeypot field - hidden from humans, stops automated bots */}
            <div className="hidden" aria-hidden="true">
                <input type="text" name="b_phone" tabIndex={-1} autoComplete="off" />
            </div>
            <div>
                <div className="flex items-start gap-4 mb-8 group">
                    <input 
                        type="checkbox" 
                        id="consent" 
                        name="consent" 
                        required 
                        className="mt-1 w-4 h-4 accent-vogue-black border-black/20 cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-[10px] font-sans text-neutral-500 uppercase tracking-widest leading-relaxed cursor-pointer group-hover:text-black transition-colors">
                        I consent to the collection of my details for <span className="underline">exclusive investment updates</span>.
                    </label>
                </div>
                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-vogue-black text-white py-5 text-xs uppercase tracking-[0.25em] hover:bg-neutral-800 transition-all duration-500 hover:shadow-lg disabled:opacity-50 disabled:cursor-wait"
                >
                    {isSubmitting ? 'Connecting...' : 'Request Consultation'}
                </button>
                <button 
                    type="button"
                    onClick={handleEmail}
                    className="w-full text-[10px] font-sans uppercase tracking-[0.2em] text-neutral-400 hover:text-black mt-6 transition-colors border-b border-transparent hover:border-black/50 pb-1 w-fit mx-auto block"
                >
                    Prefer Email Communication?
                </button>
                <p className="mt-6 text-[9px] font-sans text-neutral-400 text-center uppercase tracking-widest opacity-60">
                    Private Client Service • Response within 24h
                </p>
            </div>
        </form>
    );
}
