"use client";

import React from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import { useScroll } from "motion/react";

import { cn } from "@/lib/utils";
import { LogoIcon } from "./logo";
import { Button } from "./ui/button";

const links = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Testimonials",
        href: "#testimonials",
    },
    {
        label: "Pricing",
        href: "#pricing",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

function Header() {
    const [menuState, setMenuState] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    const { scrollYProgress } = useScroll();

    const handleMenuState = () => {
        setMenuState(!menuState);
    };

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setScrolled(latest > 0.05);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <>
            <header
                className={cn(
                    "fixed z-20 w-full border-b transition-colors duration-150",
                    scrolled && "bg-background/50 backdrop-blur-3xl",
                )}
            >
                <div
                    data-state={menuState && "active"}
                    className="container px-4 mx-auto transition-all duration-300"
                >
                    <div className="flex items-center justify-between gap-4 h-16">
                        <div>
                            <Link href="/" aria-label="home" className="font-medium">
                                <LogoIcon />
                            </Link>
                        </div>

                        <button
                            onClick={handleMenuState}
                            aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                            className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                        >
                            <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                            <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                        </button>

                        <div className="hidden lg:flex items-center gap-12">
                            <nav>
                                <ul className="flex items-center gap-4">
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                            >
                                                <span>{link.label}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <Button asChild variant="outline">
                                <Link href="#">
                                    <span>Get Started</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                        <div className="lg:hidden">
                            <nav className="mb-4">
                                <ul className="space-y-6 text-base">
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                            >
                                                <span>{link.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button asChild variant="outline">
                                    <Link href="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
