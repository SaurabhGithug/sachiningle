"use client";
import { useState } from 'react';



 export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        
        // Honeypot check - reject if hidden field is filled
        if (formData.get('b_phone')) {
            console.warn('Bot detected via honeypot');
            return;
        }

        const name = (formData.get('name') as string).trim().slice(0, 100);
        const phone = (formData.get('phone') as string).replace(/[^\d+]/g, '');
        const interest = formData.get('interest') as string;
        const requirements = (formData.get('requirements') as string).trim().slice(0, 500);

        if (phone.length < 10) {
            alert('Please enter a valid phone number (at least 10 digits).');
            setIsSubmitting(false);
            return;
        }

        // Construct the WhatsApp message
        const message = `Hi Sachin, I am ${name}. I am interested in ${interest}.\n\nMy Requirements: ${requirements}\n\nPlease contact me at: ${phone}`;
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
        
        // Get form data directly from the DOM to avoid huge refactoring
        const form = e.currentTarget.closest('form');
        if (!form) return;
        
        const formData = new FormData(form);
        const name = (formData.get('name') as string).trim();
        const phone = (formData.get('phone') as string).replace(/[^\d+]/g, '');
        const interest = formData.get('interest') as string;
        const requirements = (formData.get('requirements') as string).trim();

        if (phone.length < 10) {
            alert('Please enter a valid phone number before sending via email.');
            return;
        }

        if (!name || !phone || !interest) {
            alert('Please fill in the required fields first.');
            return;
        }

        const subject = `Inquiry: ${interest} - ${name}`;
        const body = `Hi Sachin,\n\nI am ${name}.\nI am interested in ${interest}.\n\nMy Requirements:\n${requirements}\n\nPlease contact me at: ${phone}`;
        
        window.location.href = `mailto:hello@sachiningle.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <main className="min-h-screen bg-vogue-offwhite text-vogue-black selection:bg-black selection:text-white">

            <div className="pt-48 px-8 lg:px-16 min-h-screen flex flex-col justify-between">

                <div>
                    <span className="text-xs font-sans uppercase tracking-[0.3em] text-neutral-400 block mb-6">Inquiries</span>
                    <h1 className="font-serif text-6xl lg:text-8xl leading-none text-vogue-black mb-16">
                        Start the <br /> <span className="italic text-neutral-400">Conversation</span>
                    </h1>

                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <p className="font-sans text-lg text-neutral-600 max-w-md leading-relaxed mb-12">
                                Share your investment goals or layout requirements, and I&apos;ll personally help you evaluate the right land opportunity.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-neutral-400 mb-2">Call Us</h3>
                                    <p className="font-serif text-2xl hover:italic cursor-pointer transition-all">+91 9822 555 123</p>
                                </div>
                                <div>
                                    <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-neutral-400 mb-2">Email</h3>
                                    <a href="mailto:hello@sachiningle.com" className="font-serif text-2xl hover:italic cursor-pointer transition-all">hello@sachiningle.com</a>
                                </div>
                            </div>
                        </div>

                        <div id="inquiry-form" className="bg-white p-8 lg:p-12 shadow-sm border border-black/5">
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-xs font-sans uppercase tracking-widest text-neutral-400 mb-2">Name</label>
                                    <input type="text" name="name" required className="w-full bg-transparent border-b border-black/20 py-2 focus:border-black outline-none transition-colors font-serif text-xl" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-sans uppercase tracking-widest text-neutral-400 mb-2">Phone</label>
                                    <input type="tel" name="phone" required className="w-full bg-transparent border-b border-black/20 py-2 focus:border-black outline-none transition-colors font-serif text-xl" placeholder="+91" />
                                </div>
                                <div>
                                    <label className="block text-xs font-sans uppercase tracking-widest text-neutral-400 mb-2">Interest</label>
                                    <select name="interest" required className="w-full bg-transparent border-b border-black/20 py-2 focus:border-black outline-none transition-colors font-serif text-xl">
                                        <option value="" disabled selected>Select your interest</option>
                                        <option value="Residential Plot">Residential Plot</option>
                                        <option value="Commercial Land">Commercial Land</option>
                                        <option value="Investment/Partnership">Investment/Partnership</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-sans uppercase tracking-widest text-neutral-400 mb-2">YOUR REQUIREMENTS</label>
                                    <textarea
                                        id="requirements"
                                        name="requirements"
                                        className="w-full bg-transparent border-b border-black/20 py-2 focus:border-black outline-none transition-colors font-serif text-xl resize-none"
                                        rows={4}
                                        required
                                        placeholder="Share your vision, location preferences, budget range, and timeline."
                                    />
                                </div>
                                {/* Honeypot field - hidden from humans, stops automated bots */}
                                <div className="hidden" aria-hidden="true">
                                    <input type="text" name="b_phone" tabIndex={-1} autoComplete="off" />
                                </div>
                                <div>
                                    <div className="flex items-start gap-3 mb-6">
                                        <input 
                                            type="checkbox" 
                                            id="consent" 
                                            name="consent" 
                                            required 
                                            className="mt-1 w-4 h-4 accent-vogue-black border-black/20 cursor-pointer"
                                        />
                                        <label htmlFor="consent" className="text-[10px] font-sans text-neutral-500 uppercase tracking-widest leading-relaxed cursor-pointer">
                                            I consent to the collection and processing of my personal data in accordance with the <a href="/privacy" className="underline hover:text-black">Privacy Notice</a>.
                                        </label>
                                    </div>
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-vogue-black text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-wait"
                                    >
                                        {isSubmitting ? 'Opening WhatsApp...' : 'Send Inquiry'}
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={handleEmail}
                                        className="w-full text-xs font-sans uppercase tracking-[0.2em] text-neutral-500 hover:text-black mt-6 transition-colors border-b border-transparent hover:border-black pb-1"
                                    >
                                        Or send via Email
                                    </button>
                                    <p className="mt-4 text-[10px] font-sans text-neutral-400 text-center uppercase tracking-widest">
                                        You’ll receive a call or WhatsApp within 24 hours
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="py-12 border-t border-black/10 mt-16 flex justify-between text-xs font-sans uppercase tracking-widest text-neutral-400">
                    <div>Nagpur, India</div>
                    <div>&copy; 2026 Sachin Ingle</div>
                </div>

            </div>
        </main>
    );
}
