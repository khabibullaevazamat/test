"use client";

import { AnimatedGroup } from "./animated-group";

export function About() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32" id="about">
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
                }}
            >
                <div>
                    <div className="text-center mb-8 max-w-xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-semibold mb-2">О Нас</h2>
                        <p>
                            Работая по всему Узбекистану и СНГ, мы предлагаем гибкие решения и
                            поддержку на каждом этапе развития вашего проекта.
                        </p>
                    </div>
                </div>
            </AnimatedGroup>
        </section>
    );
}
