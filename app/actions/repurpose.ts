"use server";

import { repurposeBlogContent, RepurposedContent } from "@/lib/gemini";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function repurposeContent(
    blogPostId: string,
    title: string,
    content: string
): Promise<{ success: boolean; data?: RepurposedContent; error?: string }> {
    try {
        // Call Gemini AI to repurpose content
        const repurposedContent = await repurposeBlogContent(title, content);

        // Save to Firebase
        await addDoc(collection(db, "repurposedContent"), {
            blogPostId,
            platforms: repurposedContent,
            createdAt: serverTimestamp(),
        });

        return { success: true, data: repurposedContent };
    } catch (error) {
        console.error("Error repurposing content:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to repurpose content",
        };
    }
}
