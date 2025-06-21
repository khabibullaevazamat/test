"use client";

import { useState } from "react";

import { CircleCheck } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

import { AnimatedGroup } from "./animated-group";

interface PricingFeature {
    text: string;
}

interface PricingPlan {
    id: string;
    name: string;
    description: string;
    monthlyPrice: string;
    yearlyPrice: string;
    features: PricingFeature[];
    button: {
        text: string;
        url: string;
    };
}

interface PricingProps {
    heading?: string;
    description?: string;
    plans?: PricingPlan[];
}

export function Pricing({
    heading = "Цены",
    description = "Ознакомьтесь с нашими доступными тарифными планами",
    plans = [
        {
            id: "plus",
            name: "Plus",
            description: "Для личного пользования",
            monthlyPrice: "$19",
            yearlyPrice: "$179",
            features: [
                { text: "До 5 членов команды" },
                { text: "Библиотека базовых компонентов" },
                { text: "Поддержка сообщества" },
                { text: "Объем дискового пространства - 1ГБ" },
            ],
            button: {
                text: "Покупка",
                url: "https://shadcnblocks.com",
            },
        },
        {
            id: "pro",
            name: "Pro",
            description: "Для профессионалов",
            monthlyPrice: "$49",
            yearlyPrice: "$359",
            features: [
                { text: "Неограниченное количество членов команды" },
                { text: "Усовершенствованные компоненты" },
                { text: "Приоритетная поддержка" },
                { text: "Неограниченное пространство для хранения" },
            ],
            button: {
                text: "Покупка",
                url: "https://shadcnblocks.com",
            },
        },
    ],
}: PricingProps) {
    const [isYearly, setIsYearly] = useState(false);
    return (
        <section className="w-full py-16 md:py-24 lg:py-32" id="pricing">
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
                <div className="container">
                    <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
                        <h2 className="text-4xl font-semibold text-pretty lg:text-6xl">
                            {heading}
                        </h2>
                        <p className="text-muted-foreground lg:text-xl">{description}</p>
                        <div className="flex items-center gap-3 text-lg">
                            Monthly
                            <Switch
                                checked={isYearly}
                                onCheckedChange={() => setIsYearly(!isYearly)}
                            />
                            Yearly
                        </div>
                        <div className="flex flex-col items-stretch gap-6 md:flex-row">
                            {plans.map((plan) => (
                                <Card
                                    key={plan.id}
                                    className="flex w-80 flex-col justify-between text-left"
                                >
                                    <CardHeader>
                                        <CardTitle>
                                            <p>{plan.name}</p>
                                        </CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            {plan.description}
                                        </p>
                                        <div className="flex items-end">
                                            <span className="text-4xl font-semibold">
                                                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                            </span>
                                            <span className="text-2xl font-semibold text-muted-foreground">
                                                {isYearly ? "/yr" : "/mo"}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Separator className="mb-6" />
                                        {plan.id === "pro" && (
                                            <p className="mb-3 font-semibold">
                                                Everything in Plus, and:
                                            </p>
                                        )}
                                        <ul className="space-y-4">
                                            {plan.features.map((feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center gap-2 text-sm"
                                                >
                                                    <CircleCheck className="size-4" />
                                                    <span>{feature.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="mt-auto">
                                        <Button asChild className="w-full">
                                            <a href={plan.button.url} target="_blank">
                                                {plan.button.text}
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center mb-8 max-w-xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-semibold mb-2"></h2>
                        <p></p>
                    </div>
                </div>
            </AnimatedGroup>
        </section>
    );
}
