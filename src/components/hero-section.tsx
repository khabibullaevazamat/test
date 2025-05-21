import Link from "next/link";
import Image from "next/image";

import HeroImage from "@/assets/images/hero.jpg";

import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/text-effect";
import { AnimatedGroup } from "@/components/animated-group";

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: "blur(12px)",
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
};

export function HeroSection() {
    return (
        <section className="pb-16 md:pb-24 lg:pb-36">
            <div aria-hidden className="absolute inset-0 isolate hidden contain-strict lg:block">
                <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>
            <div className="relative pt-24 md:pt-36">
                <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                        <TextEffect
                            as="h1"
                            speedSegment={0.3}
                            preset="fade-in-blur"
                            className="mt-8 text-balance text-4xl md:text-6xl lg:text-7xl xl:text-[5.25rem] lg:mt-16"
                        >
                            Modern Solutions for Customer Engagement
                        </TextEffect>
                        <TextEffect
                            as="p"
                            per="line"
                            delay={0.5}
                            speedSegment={0.3}
                            preset="fade-in-blur"
                            className="mx-auto mt-8 max-w-2xl text-balance text-md md:text-lg"
                        >
                            Highly customizable components for building modern websites and
                            applications that look and feel the way you mean it.
                        </TextEffect>
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                        >
                            <div
                                key={1}
                                className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                            >
                                <Button asChild size="lg" className="rounded-xl px-5 text-base">
                                    <Link href="#link">
                                        <span className="text-nowrap">Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </AnimatedGroup>
                    </div>
                </div>
                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}
                >
                    <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20 max-w-full w-full">
                        <div
                            aria-hidden
                            className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                        />
                        <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                            <Image
                                width="4092"
                                height="1924"
                                src={HeroImage}
                                alt="Exam class"
                                className="bg-background aspect-15/8 relative rounded-2xl"
                            />
                        </div>
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    );
}
