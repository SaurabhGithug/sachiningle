import dynamic from 'next/dynamic';
import VogueHero from "@/components/vogue/hero";
import VogueStory from "@/components/vogue/story";

const VogueWorks = dynamic(() => import("@/components/vogue/works"), { ssr: true });
const VoguePhilosophy = dynamic(() => import("@/components/vogue/philosophy"), { ssr: true });
const VogueTrustBadges = dynamic(() => import("@/components/vogue/trust-badges"), { ssr: true });
const VogueJournal = dynamic(() => import("@/components/vogue/journal"), { ssr: true });

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
