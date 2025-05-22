"use client";

import * as React from "react";

import { Mail, MapPin, Phone } from "lucide-react";

import { AnimatedGroup } from "./animated-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

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
                        <h2 className="text-3xl font-bold mb-2">Свяжитесь с нами</h2>
                        <p>Оставьте заявку — мы перезвоним в течение рабочего дня.</p>
                    </div>
                    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="shadow-none p-0">
                            <CardContent className="p-6 h-full">
                                <form className="flex flex-col justify-between gap-4 h-full">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Имя
                                        </label>
                                        <Input />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Email
                                        </label>
                                        <Input type="email" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Телефон
                                        </label>
                                        <Input type="tel" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Описание задачи
                                        </label>
                                        <Textarea
                                            rows={6}
                                            className="min-h-[120px] md:min-h-[180px] lg:min-h-[220px]"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full mt-2">
                                        Отправить
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
                                                <span className="font-semibold">
                                                    Приходите к нам
                                                </span>
                                                <Link
                                                    href=""
                                                    className="block text-sm text-neutral-400"
                                                >
                                                    г. Ташкент / Онлайн по всей Узбекистан и СНГ
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-5 h-5 text-neutral-400" />
                                            <div>
                                                <span className="font-semibold">
                                                    Электронная почта
                                                </span>
                                                <Link
                                                    target="_blank"
                                                    aria-label="Instagram"
                                                    rel="noopener noreferrer"
                                                    href="https:erkin@gmail.com"
                                                    className="block text-sm text-neutral-400"
                                                >
                                                    erkin@gmail.com
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 text-neutral-400" />
                                            <div>
                                                <span className="font-semibold">Позвоните нам</span>
                                                <Link
                                                    href="tel:998934914423"
                                                    className="block text-sm text-neutral-400"
                                                >
                                                    +998934914423
                                                </Link>
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
