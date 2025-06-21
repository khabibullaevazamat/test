"use client";

import * as React from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

import { AnimatedGroup } from "./animated-group";

import api from "@/lib/axios";

const formSchema = z.object({
    name: z.string().min(2, "Длина имени должна составлять не менее 2 символов"),
    email: z.string(),
    phone: z.string().min(9, "Номер телефона должен быть действительным"),
    description: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            description: "",
        },
    });

    const onSubmit = async (data: FormValues) => {
        try {
            await api.post("/order", {
                ...data,
                phone: `+998${data.phone}`,
            });
            toast.success("Заявка успешно отправлена!");
            form.reset();
        } catch (err: unknown) {
            const message =
                err instanceof Error
                    ? err.message
                    : typeof err === "string"
                      ? err
                      : "Неизвестная ошибка";
            toast.error("Ошибка при отправке: " + message);
        }
    };

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
            <section className="py-16 md:py-24 lg:py-32" id="contact">
                <div className="flex flex-col items-center justify-center px-4">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold mb-2">Свяжитесь с нами</h2>
                        <p>Оставьте заявку — мы перезвоним в течение рабочего дня.</p>
                    </div>
                    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="shadow-none p-0">
                            <CardContent className="p-6 h-full">
                                <Form {...form}>
                                    <form className="h-full" onSubmit={form.handleSubmit(onSubmit)}>
                                        <div className="flex flex-col h-full space-y-4">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="w-max" htmlFor="name">
                                                            Имя
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                id="name"
                                                                placeholder="Введите имя"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel
                                                            className="w-max"
                                                            htmlFor="email"
                                                        >
                                                            Email
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="email"
                                                                id="email"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field, fieldState }) => (
                                                    <FormItem>
                                                        <FormLabel
                                                            className="w-max"
                                                            htmlFor="phone"
                                                        >
                                                            Номер телефона
                                                        </FormLabel>
                                                        <FormControl>
                                                            <div className="relative peer-aria-invalid:ring-destructive/50 ring-1 ring-input rounded-md transition">
                                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                                                                    +998
                                                                </span>
                                                                <Input
                                                                    {...field}
                                                                    id="phone"
                                                                    pattern="\d*"
                                                                    maxLength={9}
                                                                    autoComplete="tel"
                                                                    inputMode="numeric"
                                                                    className="peer pl-14"
                                                                    placeholder="00 000-00-00"
                                                                    aria-invalid={
                                                                        !!fieldState.error
                                                                    }
                                                                    value={field.value.replace(
                                                                        /\D/g,
                                                                        "",
                                                                    )}
                                                                    onChange={(e) => {
                                                                        const digitsOnly =
                                                                            e.target.value.replace(
                                                                                /\D/g,
                                                                                "",
                                                                            );
                                                                        field.onChange(digitsOnly);
                                                                    }}
                                                                />
                                                            </div>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <div className="flex-1">
                                                <FormField
                                                    control={form.control}
                                                    name="description"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel
                                                                className="w-max"
                                                                htmlFor="description"
                                                            >
                                                                Описание задачи
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Textarea
                                                                    className="h-28"
                                                                    id="description"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                className="w-full mt-2"
                                                disabled={form.formState.isSubmitting}
                                            >
                                                {form.formState.isSubmitting
                                                    ? "Отправка..."
                                                    : "Отправить"}
                                            </Button>
                                        </div>
                                    </form>
                                </Form>
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
