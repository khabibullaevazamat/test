"use client";

import * as React from "react";

import { Mail, MapPin, Phone } from "lucide-react";

import { AnimatedGroup } from "./animated-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
    return (
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
            <section className="py-16 md:py-24 lg:py-32">
                <div className="flex flex-col items-center justify-center px-4">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
                        <p>We&apos;d love to hear from you. Please fill out this form.</p>
                    </div>
                    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="shadow-none p-0">
                            <CardContent className="p-6 h-full">
                                <form className="flex flex-col justify-between gap-4 h-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                First name
                                            </label>
                                            <Input placeholder="First name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Last name
                                            </label>
                                            <Input placeholder="Last name" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Email
                                        </label>
                                        <Input placeholder="Email" type="email" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Phone
                                        </label>
                                        <Input placeholder="Phone" type="tel" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Message
                                        </label>
                                        <Textarea
                                            className="min-h-[120px] md:min-h-[180px] lg:min-h-[220px]"
                                            placeholder="Your message"
                                            rows={6}
                                        />
                                    </div>
                                    <Button type="submit" className="w-full mt-2">
                                        Send message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                        <div className="flex flex-col gap-6">
                            <Card className="shadow-none">
                                <CardContent>
                                    <div className="w-full h-60 rounded-md overflow-hidden shadow-lg">
                                        <iframe
                                            loading="lazy"
                                            allowFullScreen
                                            title="Google Map"
                                            className="w-full h-full border-0"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            src="https://www.google.com/maps?q=Riverside+Building,+County+Hall,+London,+SE1+7JA&output=embed"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="shadow-none">
                                <CardContent>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <MapPin className="w-5 h-5 text-neutral-400" />
                                            <div>
                                                <span className="font-semibold">Visit us</span>
                                                <div className="text-sm text-neutral-400">
                                                    100 Smith Street, Melbourne VIC 3000, Australia
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-5 h-5 text-neutral-400" />
                                            <div>
                                                <span className="font-semibold">Email us</span>
                                                <div className="text-sm text-neutral-400">
                                                    hello@example.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 text-neutral-400" />
                                            <div>
                                                <span className="font-semibold">Call us</span>
                                                <div className="text-sm text-neutral-400">
                                                    +1 (234) 567-890
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedGroup>
    );
}
