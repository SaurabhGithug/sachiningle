'use client';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-vogue-offwhite text-vogue-black pt-48 px-8 lg:px-16 selection:bg-black selection:text-white">
            <div className="max-w-4xl mx-auto">
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-neutral-400 block mb-6">Legal Framework</span>
                <h1 className="font-serif text-5xl lg:text-7xl mb-16">Privacy <span className="italic text-neutral-400">Notice</span></h1>
                
                <div className="space-y-12 font-sans text-neutral-600 leading-relaxed text-lg pb-24">
                    <section>
                        <h2 className="text-vogue-black font-semibold uppercase tracking-widest text-sm mb-4">DPDP Act 2023 Compliance</h2>
                        <p>This privacy notice is drafted in compliance with the Digital Personal Data Protection (DPDP) Act, 2023 of India. We are committed to protecting your personal data and ensuring transparency in how we handle it.</p>
                    </section>

                    <section>
                        <h2 className="text-vogue-black font-semibold uppercase tracking-widest text-sm mb-4">01. Data Collection & Purpose</h2>
                        <p>We collect personal data (Name, Phone Number, Email, and Investment Requirements) only when you voluntarily provide it through our inquiry forms. This data is processed for the following purposes:</p>
                        <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                            <li>Providing requested information on real estate projects.</li>
                            <li>Personalized land investment consultations.</li>
                            <li>Responding to your specific inquiries or requirements.</li>
                            <li>Complying with legal and regulatory obligations.</li>
                        </ul>
                    </section>
                    
                    <section>
                        <h2 className="text-vogue-black font-semibold uppercase tracking-widest text-sm mb-4">02. Basis for Processing</h2>
                        <p>We process your personal data based on your explicit consent provided at the time of inquiry. You have the right to withdraw this consent at any time.</p>
                    </section>

                    <section>
                        <h2 className="text-vogue-black font-semibold uppercase tracking-widest text-sm mb-4">03. Your Rights (Data Principal)</h2>
                        <p>Under the DPDP Act 2023, you have the following rights regarding your personal data:</p>
                        <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                            <li><strong>Right to Access:</strong> Request a summary of the data we hold about you.</li>
                            <li><strong>Right to Correction:</strong> Ask us to update or correct inaccurate information.</li>
                            <li><strong>Right to Erasure:</strong> Request the deletion of your personal data when no longer needed for the original purpose.</li>
                            <li><strong>Right to Withdrawal:</strong> Withdraw your consent at any time, after which we will stop processing your data.</li>
                        </ul>
                    </section>
                    
                    <section>
                        <h2 className="text-vogue-black font-semibold uppercase tracking-widest text-sm mb-4">04. Data Security</h2>
                        <p>We implement appropriate technical and organizational measures to prevent unauthorized access, accidental loss, or destruction of your personal data. Your information is stored on secure servers and access is restricted to authorized personnel only.</p>
                    </section>

                    <section>
                        <h2 className="text-vogue-black font-semibold uppercase tracking-widest text-sm mb-4">05. Data Protection & Inquiries</h2>
                        <p>If you have any questions, concerns, or wish to exercise your rights, please contact our data protection secretariat:</p>
                        <div className="mt-4 p-6 bg-white border border-black/10">
                            <p className="text-vogue-black font-serif text-xl italic text-neutral-400">Compliance Secretariat</p>
                            <p className="text-sm uppercase tracking-widest mt-2 text-neutral-400">Data Protection & Redressal</p>
                            <p className="mt-4 text-neutral-500">Email: privacy@sachiningle.com</p>
                            <p className="text-neutral-500">Address: Nagpur, Maharashtra, India</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
