'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/animations/fade-in';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

interface ArticleData {
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    content: React.ReactNode;
}

export default function JournalArticleView({ article }: { article: ArticleData }) {
    if (!article) {
        return null;
    }

    return (
        <article className="bg-executive-white min-h-screen pt-32 pb-24">
            {/* Hero Section */}
            <div className="container mx-auto px-4 lg:px-0 max-w-4xl">
                <FadeIn delay={0.1} duration={0.6}>
                    <Link href="/#journal" className="inline-flex items-center gap-2 text-executive-blue text-sm uppercase tracking-widest font-bold mb-8 hover:opacity-70 transition-opacity">
                        <ArrowLeft className="w-4 h-4" /> Back to Journal
                    </Link>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-executive-navy/5 text-executive-navy text-xs font-bold uppercase tracking-wider rounded-full">
                            {article.category}
                        </span>
                        <span className="text-executive-gray text-xs uppercase tracking-wider">
                            {article.date} • {article.readTime}
                        </span>
                    </div>

                    <h1 className="font-display text-4xl lg:text-6xl text-executive-navy leading-tight mb-12">
                        {article.title}
                    </h1>
                </FadeIn>

                {/* Featured Image */}
                <FadeIn delay={0.2} duration={0.6}>
                    <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl mb-16">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </FadeIn>

                {/* Content */}
                <FadeIn delay={0.3} duration={0.6}>
                    <div className="prose prose-lg prose-headings:font-display prose-headings:text-executive-navy prose-p:font-serif prose-p:text-executive-gray max-w-none">
                        {article.content}
                    </div>
                </FadeIn>
            </div>
        </article>
    );
}
