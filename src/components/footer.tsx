import Link from "next/link";

import { LogoIcon } from "@/components/logo";
import { IconTelegram } from "./icons/icon-telegram";
import { IconInstagram } from "./icons/icon-instagram";

const links = [
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Testimonials",
        href: "#testimonials",
    },
    {
        title: "Pricing",
        href: "#pricing",
    },
    {
        title: "Solution",
        href: "#",
    },
    {
        title: "Contact",
        href: "#contact",
    },
];

export function Footer() {
    return (
        <footer className="py-16 md:py-32 border-t">
            <div className="mx-auto max-w-5xl px-6">
                <Link href="/" aria-label="go home" className="mx-auto block size-fit">
                    <LogoIcon />
                </Link>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150"
                        >
                            <span>{link.title}</span>
                        </a>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    <Link
                        target="_blank"
                        aria-label="Telegram"
                        rel="noopener noreferrer"
                        href="https://t.me/azamatkhabibullaev"
                        className="text-muted-foreground hover:text-primary block"
                    >
                        <IconTelegram />
                    </Link>
                    <Link
                        target="_blank"
                        aria-label="Instagram"
                        rel="noopener noreferrer"
                        href="https:instagram.com/azamatcto"
                        className="text-muted-foreground hover:text-primary block"
                    >
                        <IconInstagram />
                    </Link>
                </div>
                <span className="text-muted-foreground block text-center text-sm">
                    &copy; {new Date().getFullYear()} Test, All rights reserved
                </span>
            </div>
        </footer>
    );
}
