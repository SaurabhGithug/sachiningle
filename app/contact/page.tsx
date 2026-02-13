import Link from "next/link";
import ContactForm from "@/components/vogue/contact-form";

export default function ContactPage() {
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
                                    <a href="mailto:connect@sachiningle.com" className="font-serif text-2xl hover:italic cursor-pointer transition-all">connect@sachiningle.com</a>
                                </div>
                            </div>
                        </div>

                        <div id="inquiry-form" className="bg-white p-8 lg:p-12 shadow-sm border border-black/5">
                            <ContactForm />
                        </div>
                    </div>
                </div>

                <div className="py-12 border-t border-black/10 mt-16 flex justify-between text-xs font-sans uppercase tracking-widest text-neutral-400">
                    <div>Wadi, Hazarihpahad, Nagpur</div>
                    <div>&copy; 2026 Sachin Ingle</div>
                </div>

            </div>
        </main>
    );
}
