import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-executive-navy text-white hover:bg-executive-blue hover:shadow-lg transition-all duration-300 font-sans tracking-widest uppercase",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                luxury: "bg-executive-navy text-white hover:bg-white hover:text-executive-navy hover:border-executive-navy hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 font-sans tracking-[0.2em] uppercase text-xs border border-transparent hover:scale-105 active:scale-95",
                "outline-luxury": "border border-executive-navy text-executive-navy bg-transparent hover:bg-executive-navy hover:text-white transition-all duration-500 font-sans tracking-[0.2em] uppercase text-xs hover:shadow-[0_0_30px_rgba(2,6,23,0.2)]",
                "ghost-luxury": "text-executive-navy hover:bg-executive-navy/5 hover:text-executive-blue transition-all duration-300 font-sans tracking-[0.2em] uppercase text-xs relative overflow-hidden after:absolute after:inset-0 after:bg-executive-navy/5 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "luxury",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
