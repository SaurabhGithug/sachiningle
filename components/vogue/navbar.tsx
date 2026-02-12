import Link from 'next/link';

export default function VogueNavbar() {
    return (
        <nav className="fixed top-0 w-full z-50 text-vogue-black mix-blend-difference px-8 lg:px-16 py-8 flex justify-between items-center bg-transparent pointer-events-auto">
            <Link href="/" className="font-serif text-2xl italic tracking-wide text-white mix-blend-difference hover:scale-105 transition-transform">SI.</Link>
            <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-medium text-white mix-blend-difference">
                <Link href="/story" className="hover:opacity-60 transition-opacity">Story</Link>
                <Link href="/about" className="hover:opacity-60 transition-opacity">Philosophy</Link>
                <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
            </div>
        </nav>
    );
}
