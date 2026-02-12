import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    MapPin,
    CheckCircle2,
    Home,
    Trees,
    Droplets,
    Shield,
    ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Saraswati Nagari - Premium Land Development Project",
    description:
        "RERA approved residential plots in Saraswati Nagari. Premium amenities, excellent connectivity, sustainable living. Invest in your dream community today.",
};

export default function SaraswatiNagariPage() {
    const amenities = [
        { icon: Home, label: "Club House" },
        { icon: Trees, label: "Landscaped Gardens" },
        { icon: Droplets, label: "Water Supply" },
        { icon: Shield, label: "24/7 Security" },
    ];

    return (
        <div className="pt-16">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-accent/20 text-primary-foreground">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        Featured Project
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        Saraswati Nagari
                    </h1>
                    <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
                        Transforming Land into a Thriving Community
                    </p>
                    <Button
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-accent/90"
                        asChild
                    >
                        <Link href="/contact">Schedule a Site Visit</Link>
                    </Button>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold mb-6 text-primary">
                                Project Overview
                            </h2>
                            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                                Saraswati Nagari is a meticulously planned residential community
                                that offers premium plots in a strategic location. With world-class
                                amenities, excellent connectivity, and a focus on sustainable living,
                                this project represents the future of modern communities.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Every aspect of Saraswati Nagari has been designed with attention to
                                detail, ensuring that residents enjoy a superior quality of life
                                while benefiting from strong appreciation potential.
                            </p>

                            <div className="flex items-center space-x-2 mb-4">
                                <MapPin className="h-5 w-5 text-accent" />
                                <span className="font-semibold">
                                    Prime Location, Maharashtra
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-card p-6 rounded-xl border shadow-sm text-center">
                                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                                <div className="text-sm text-muted-foreground">Plots Available</div>
                            </div>
                            <div className="bg-card p-6 rounded-xl border shadow-sm text-center">
                                <div className="text-4xl font-bold text-accent mb-2">RERA</div>
                                <div className="text-sm text-muted-foreground">Approved</div>
                            </div>
                            <div className="bg-card p-6 rounded-xl border shadow-sm text-center">
                                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                                <div className="text-sm text-muted-foreground">Clear Titles</div>
                            </div>
                            <div className="bg-card p-6 rounded-xl border shadow-sm text-center">
                                <div className="text-4xl font-bold text-accent mb-2">20+</div>
                                <div className="text-sm text-muted-foreground">Amenities</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold mb-4 text-primary">
                            Key Features
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Everything you need for a premium lifestyle
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-card p-6 rounded-xl border shadow-sm">
                            <CheckCircle2 className="h-10 w-10 text-accent mb-4" />
                            <h3 className="font-semibold text-lg mb-2">RERA Approved</h3>
                            <p className="text-muted-foreground text-sm">
                                Fully compliant with RERA regulations, ensuring transparency and
                                legal security
                            </p>
                        </div>

                        <div className="bg-card p-6 rounded-xl border shadow-sm">
                            <CheckCircle2 className="h-10 w-10 text-accent mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Clear Titles</h3>
                            <p className="text-muted-foreground text-sm">
                                100% clear and verified titles with complete legal documentation
                            </p>
                        </div>

                        <div className="bg-card p-6 rounded-xl border shadow-sm">
                            <CheckCircle2 className="h-10 w-10 text-accent mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Premium Location</h3>
                            <p className="text-muted-foreground text-sm">
                                Strategically located with excellent connectivity to major highways
                                and cities
                            </p>
                        </div>

                        <div className="bg-card p-6 rounded-xl border shadow-sm">
                            <CheckCircle2 className="h-10 w-10 text-accent mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Modern Infrastructure</h3>
                            <p className="text-muted-foreground text-sm">
                                Wide roads, street lighting, underground drainage, and water supply
                            </p>
                        </div>

                        <div className="bg-card p-6 rounded-xl border shadow-sm">
                            <CheckCircle2 className="h-10 w-10 text-accent mb-4" />
                            <h3 className="font-semibold text-lg mb-2">High ROI Potential</h3>
                            <p className="text-muted-foreground text-sm">
                                Strategic location and quality amenities ensure strong appreciation
                            </p>
                        </div>

                        <div className="bg-card p-6 rounded-xl border shadow-sm">
                            <CheckCircle2 className="h-10 w-10 text-accent mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Gated Community</h3>
                            <p className="text-muted-foreground text-sm">
                                24/7 security with controlled access for safety and peace of mind
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-display font-bold mb-4 text-primary">
                            World-Class Amenities
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Designed for a comfortable and convenient lifestyle
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {amenities.map((amenity, idx) => {
                            const Icon = amenity.icon;
                            return (
                                <div key={idx} className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                                        <Icon className="h-8 w-8 text-accent" />
                                    </div>
                                    <p className="font-medium">{amenity.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-display font-bold mb-6">
                        Ready to Invest in Saraswati Nagari?
                    </h2>
                    <p className="text-xl mb-8 text-primary-foreground/90">
                        Schedule a site visit or consultation to learn more about this
                        exceptional opportunity
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-accent text-accent-foreground hover:bg-accent/90"
                            asChild
                        >
                            <Link href="/contact">Schedule Site Visit</Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                            asChild
                        >
                            <Link href="/projects">
                                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
