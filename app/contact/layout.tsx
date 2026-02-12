import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Connect with Sachin Ingle | Land Inquiry • Nagpur",
    description: "Inquire about premium NMRDA approved residential plots in Nagpur. Direct consultation with Sachin Ingle for clear-title land investments.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
