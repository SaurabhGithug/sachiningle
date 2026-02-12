'use client';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-vogue-offwhite text-vogue-black pt-48 px-8 lg:px-16 selection:bg-black selection:text-white">
            <div className="max-w-4xl mx-auto">
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-neutral-400 block mb-6">Legal Agreement</span>
                <h1 className="font-serif text-5xl lg:text-7xl mb-16">Terms of <span className="italic text-neutral-400">Service</span></h1>
                
                <div className="space-y-12 font-sans text-neutral-600 leading-relaxed text-lg pb-24">
                    <section>
                        <h2 className="text-vogue-black font-semibold uppercase tracking-widest text-sm mb-4">01. Information Accuracy</h2>
                        <p>While we strive for 100% accuracy, all layout information, plot maps, and pricing are subject to final government approvals and market fluctuations. The imagery provided is for representational purposes only.</p>
                    </section>
                    
                    <section>
                        <h2 className="text-vogue-black font-semibold uppercase tracking-widest text-sm mb-4">02. Consultations</h2>
                        <p>Consultations provided by Sachin Ingle are intended to offer strategic land advice and investment perspective. These do not constitute a legal binding contract or financial guarantee until formal registration documents are executed.</p>
                    </section>

                    <section>
                        <h2 className="text-vogue-black font-semibold uppercase tracking-widest text-sm mb-4">03. Jurisdiction & Dispute Resolution</h2>
                        <p>These terms are governed by the laws of India. Any disputes arising from the use of this website or our services shall be subject to the exclusive jurisdiction of the courts in <strong>Nagpur, Maharashtra</strong>.</p>
                    </section>

                    <section>
                        <h2 className="text-vogue-black font-semibold uppercase tracking-widest text-sm mb-4">04. Limitation of Liability</h2>
                        <p>We are not liable for any indirect, incidental, or consequential damages arising out of your access to or use of this website. Use of the information provided is at your own risk.</p>
                    </section>

                    <section>
                        <h2 className="text-vogue-black font-semibold uppercase tracking-widest text-sm mb-4">05. Intellectual Property</h2>
                        <p>All content, branding, and proprietary layouts showcased on this website are the intellectual property of Sachin Ingle and protected under Indian copyright laws.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
