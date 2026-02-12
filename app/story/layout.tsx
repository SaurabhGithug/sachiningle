import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Journey of Sachin Ingle | Defining Spaces in Nagpur",
    description: "Discover the 10-year journey of Sachin Ingle, from the first acquisition to flagship residential projects like Saraswati Nagari in Nagpur.",
};

export default function StoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
