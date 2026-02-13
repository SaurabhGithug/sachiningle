'use client';

import VogueHero from "@/components/vogue/hero";
import VogueStory from "@/components/vogue/story";
import VogueWorks from "@/components/vogue/works";
import VoguePhilosophy from "@/components/vogue/philosophy";
import VogueTrustBadges from "@/components/vogue/trust-badges";
import VogueJournal from "@/components/vogue/journal";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-executive-navy selection:bg-executive-navy selection:text-white">
            <VogueHero />
            <VogueStory />
            <VogueWorks />
            <VogueTrustBadges />
            <VogueJournal />
            <VoguePhilosophy />
        </main>
    );
}
