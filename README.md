# Sachin Ingle - Personal Branding Website

A modern Next.js 14 website for Mr. Sachin Ingle, a land developer, featuring AI-powered blog content repurposing.

## Features

- **Personal Branding**: Professional website showcasing projects and expertise
- **AI-Powered Blog**: Content repurposing using Google Gemini AI for social media
- **SEO Optimized**: Metadata optimized for both Google and AI LLMs
- **Lead Capture**: Simple contact forms with Firebase integration
- **Responsive Design**: Mobile-first, premium UI with Tailwind CSS

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + Shadcn/ui
- Firebase (Firestore, Auth, Storage)
- Google Gemini API

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase project
- Google Gemini API key

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file (see `.env.example`):
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
GOOGLE_GEMINI_API_KEY=your_gemini_key
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Firebase Setup

Create these Firestore collections:
- `blogPosts`: Blog content
- `leads`: Contact form submissions
- `repurposedContent`: AI-generated social media content

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog listing & posts
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   └── actions/           # Server actions
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── layout/           # Layout components
│   └── admin/            # Admin components
├── lib/                   # Utilities & configs
│   ├── firebase.ts       # Firebase config
│   ├── gemini.ts         # AI integration
│   └── utils.ts          # Helper functions
```

## Core Features

### AI Content Repurposing

The blog system includes an AI-powered content repurposing feature that automatically generates social media content:

- **Instagram**: 10-slide carousel with caption
- **LinkedIn**: Professional post with hashtags
- **Twitter**: Tweet thread (5-7 tweets)
- **Facebook**: Conversational post
- **YouTube**: 60-second video script

### SEO Optimization

- Comprehensive metadata for all pages
- JSON-LD structured data
- Custom AI meta tags for LLM crawlers
- Sitemap and robots.txt
- Fast page loads with Next.js optimization

## License

Private project for Mr. Sachin Ingle
