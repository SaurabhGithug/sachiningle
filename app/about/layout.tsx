import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Sachin Ingle | Nagpur Land Expert Since 2010",
    description: "Learn about Sachin Ingle's mission to transform land into thriving communities in Nagpur. Expert in NMRDA approved residential layouts and clear-title investments.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
