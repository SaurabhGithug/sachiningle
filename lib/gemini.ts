import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("GOOGLE_GEMINI_API_KEY is not set in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

export interface RepurposedContent {
    instagram: {
        carousel: string[];
        caption: string;
        firstComment: string;
    };
    linkedin: {
        post: string;
        hashtags: string[];
    };
    twitter: {
        thread: string[];
    };
    facebook: {
        post: string;
    };
    youtube: {
        script: string;
        description: string;
    };
}

export async function repurposeBlogContent(
    title: string,
    content: string
): Promise<RepurposedContent> {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `You are a social media expert. Given the following blog post, create engaging, platform-optimized content for Instagram, LinkedIn, Twitter, Facebook, and YouTube.

Blog Title: ${title}

Blog Content:
${content}

Generate content in the following JSON format (respond ONLY with valid JSON, no additional text):

{
  "instagram": {
    "carousel": ["slide 1 text", "slide 2 text", "slide 3 text", "slide 4 text", "slide 5 text", "slide 6 text", "slide 7 text", "slide 8 text", "slide 9 text", "slide 10 text"],
    "caption": "Engaging caption with emojis and call-to-action",
    "firstComment": "First comment to boost engagement"
  },
  "linkedin": {
    "post": "Professional 250-300 word post with industry insights",
    "hashtags": ["#RealEstate", "#LandDevelopment", "#Investment"]
  },
  "twitter": {
    "thread": ["Hook tweet", "Supporting tweet 2", "Supporting tweet 3", "Supporting tweet 4", "Supporting tweet 5", "CTA tweet"]
  },
  "facebook": {
    "post": "Conversational, story-driven post"
  },
  "youtube": {
    "script": "60-second video script with hook, key points, and CTA",
    "description": "Video description with keywords and links"
  }
}

Requirements:
- Instagram carousel: exactly 10 slides with key points from the blog
- LinkedIn: professional tone, 250-300 words
- Twitter: 5-7 tweet thread with engaging hook
- Facebook: conversational and story-driven
- YouTube: 60-second script format
- All content should be engaging and optimized for each platform
- Include relevant hashtags and CTAs`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Extract JSON from markdown code blocks if present
        const jsonMatch = text.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
        const jsonText = jsonMatch ? jsonMatch[1] : text;

        const repurposedContent = JSON.parse(jsonText);
        return repurposedContent;
    } catch (error) {
        console.error("Error repurposing content:", error);
        throw new Error("Failed to repurpose blog content");
    }
}
