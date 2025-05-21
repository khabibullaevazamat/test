"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { imageLoader } from "@/lib/imageLoader";
import { AnimatedGroup } from "./animated-group";

export type Testimonial = {
    quote: string;
    name: string;
    role: string;
    imgSrc: string;
};

interface TestimonialsProps {
    testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32" id="testimonials">
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
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-2">
                        What Our Clients Say
                    </h2>
                    <p>Hear Directly Our Satisfied Partners</p>
                </div>
                <div className="mx-auto lg:max-w-6xl px-3">
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem
                                    key={index}
                                    className="max-w-[400px] md:basis-1/2 lg:basis-1/3"
                                >
                                    <Card className="shadow-sm cursor-grab select-none">
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <div className="flex flex-col px-4 py-5 sm:p-6">
                                                <q className="flex-1 text-gray-600 dark:text-gray-300">
                                                    {testimonial.quote}
                                                </q>
                                                <div className="mt-6 flex gap-3">
                                                    <span className="inline-flex rounded-full">
                                                        <Image
                                                            loader={imageLoader}
                                                            className="h-10 w-10 rounded-full"
                                                            height={40}
                                                            width={40}
                                                            alt={testimonial.name}
                                                            src={testimonial.imgSrc}
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                                            {testimonial.name}
                                                        </p>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                                            {testimonial.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
                        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
                    </Carousel>
                </div>
            </AnimatedGroup>
        </section>
    );
}
