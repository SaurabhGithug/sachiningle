"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { repurposeContent } from "@/app/actions/repurpose";
import { RepurposedContent } from "@/lib/gemini";
import { Sparkles, Copy, CheckCircle2 } from "lucide-react";

interface ContentRepurposeProps {
    blogPostId: string;
    title: string;
    content: string;
}

export default function ContentRepurpose({
    blogPostId,
    title,
    content,
}: ContentRepurposeProps) {
    const [loading, setLoading] = useState(false);
    const [repurposed, setRepurposed] = useState<RepurposedContent | null>(null);
    const [copiedSection, setCopiedSection] = useState<string | null>(null);

    const handleRepurpose = async () => {
        setLoading(true);
        try {
            const result = await repurposeContent(blogPostId, title, content);
            if (result.success && result.data) {
                setRepurposed(result.data);
            } else {
                alert(result.error || "Failed to repurpose content");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred");
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = (text: string, section: string) => {
        navigator.clipboard.writeText(text);
        setCopiedSection(section);
        setTimeout(() => setCopiedSection(null), 2000);
    };

    if (!repurposed) {
        return (
            <div className="my-8">
                <Button
                    onClick={handleRepurpose}
                    disabled={loading}
                    size="lg"
                    className="bg-gradient-to-r from-accent to-accent/80"
                >
                    <Sparkles className="mr-2 h-5 w-5" />
                    {loading ? "Generating AI Content..." : "AI Repurpose Content"}
                </Button>
            </div>
        );
    }

    return (
        <div className="my-8 space-y-6">
            <h2 className="text-2xl font-display font-bold text-primary mb-4">
                AI-Generated Social Media Content
            </h2>

            {/* Instagram */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>Instagram</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                                copyToClipboard(
                                    repurposed.instagram.carousel.join("\n\n") +
                                    "\n\nCaption: " +
                                    repurposed.instagram.caption,
                                    "instagram"
                                )
                            }
                        >
                            {copiedSection === "instagram" ? (
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                                <Copy className="h-4 w-4" />
                            )}
                        </Button>
                    </CardTitle>
                    <CardDescription>Carousel post with 10 slides</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-2">Carousel Slides:</h4>
                        <div className="space-y-2">
                            {repurposed.instagram.carousel.map((slide, idx) => (
                                <div key={idx} className="bg-secondary p-3 rounded border text-sm">
                                    <strong>Slide {idx + 1}:</strong> {slide}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Caption:</h4>
                        <p className="bg-secondary p-3 rounded border text-sm whitespace-pre-wrap">
                            {repurposed.instagram.caption}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">First Comment:</h4>
                        <p className="bg-secondary p-3 rounded border text-sm">
                            {repurposed.instagram.firstComment}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>LinkedIn</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                                copyToClipboard(
                                    repurposed.linkedin.post +
                                    "\n\n" +
                                    repurposed.linkedin.hashtags.join(" "),
                                    "linkedin"
                                )
                            }
                        >
                            {copiedSection === "linkedin" ? (
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                                <Copy className="h-4 w-4" />
                            )}
                        </Button>
                    </CardTitle>
                    <CardDescription>Professional post</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-2">Post:</h4>
                        <p className="bg-secondary p-3 rounded border text-sm whitespace-pre-wrap">
                            {repurposed.linkedin.post}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Hashtags:</h4>
                        <p className="bg-secondary p-3 rounded border text-sm">
                            {repurposed.linkedin.hashtags.join(" ")}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Twitter */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>Twitter/X</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                                copyToClipboard(repurposed.twitter.thread.join("\n\n"), "twitter")
                            }
                        >
                            {copiedSection === "twitter" ? (
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                                <Copy className="h-4 w-4" />
                            )}
                        </Button>
                    </CardTitle>
                    <CardDescription>Tweet thread</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        {repurposed.twitter.thread.map((tweet, idx) => (
                            <div key={idx} className="bg-secondary p-3 rounded border text-sm">
                                <strong>Tweet {idx + 1}:</strong> {tweet}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Facebook */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>Facebook</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(repurposed.facebook.post, "facebook")}
                        >
                            {copiedSection === "facebook" ? (
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                                <Copy className="h-4 w-4" />
                            )}
                        </Button>
                    </CardTitle>
                    <CardDescription>Conversational post</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="bg-secondary p-3 rounded border text-sm whitespace-pre-wrap">
                        {repurposed.facebook.post}
                    </p>
                </CardContent>
            </Card>

            {/* YouTube */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>YouTube</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                                copyToClipboard(
                                    "Script:\n" +
                                    repurposed.youtube.script +
                                    "\n\nDescription:\n" +
                                    repurposed.youtube.description,
                                    "youtube"
                                )
                            }
                        >
                            {copiedSection === "youtube" ? (
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                                <Copy className="h-4 w-4" />
                            )}
                        </Button>
                    </CardTitle>
                    <CardDescription>60-second video script</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-2">Script:</h4>
                        <p className="bg-secondary p-3 rounded border text-sm whitespace-pre-wrap">
                            {repurposed.youtube.script}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Description:</h4>
                        <p className="bg-secondary p-3 rounded border text-sm whitespace-pre-wrap">
                            {repurposed.youtube.description}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
