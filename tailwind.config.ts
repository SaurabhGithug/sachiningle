import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
                // Premium Luxury Executive Theme
                executive: {
                    navy: "#020617",
                    blue: "#334155",
                    platinum: "#F1F5F9",
                    gray: "#475569",       // Slate 600 — improved contrast (was 500)
                    white: "#FFFFFF",
                    accent: "#0F172A",
                    gold: "#C9A96E",       // Champagne gold — luxury accent
                    cream: "#FAF7F2",      // Warm cream — editorial background
                    charcoal: "#1A1A1A",   // Rich black for deep sections
                    warmgray: "#6B7280",   // Gray 500 — secondary text
                },
                // Vogue tokens (footer compatibility)
                vogue: {
                    black: "#020617",
                    offwhite: "#FAF7F2",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
                display: ["var(--font-cinzel)", "system-ui", "sans-serif"],
                serif: ["var(--font-cormorant)", "var(--font-playfair)", "serif"],
            },
            fontSize: {
                '10xl': '10rem',
                '12xl': '12rem',
                'huge': '16rem',
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'marquee': 'marquee 20s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;

