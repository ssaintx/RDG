"use client"

import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { Locale } from "@/app/i18n/config";
import { setUserLocale } from "@/app/i18n/locale";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { GlobeIcon } from "@radix-ui/react-icons";

import Image from "next/image";

interface LanguageSwitcherSelectProps {
    defaultValue: string;
    items: Array<{ value: string; label: string, icon: string }>;
};

export const LanguageSwitcherSelect = ({ defaultValue, items }: LanguageSwitcherSelectProps) => {
    const t = useTranslations("Functions");
    const [isPending, startTransition] = useTransition();

    const onChange = async (value: string) => {
        const locale = value as Locale;
        startTransition(async () => {
            localStorage.setItem("locale", locale);
            await setUserLocale(locale);
        });
    };

    return (
        <Select defaultValue={defaultValue} onValueChange={onChange}>
            <SelectTrigger className="h-8 w-auto gap-2 bg-transparent border-none focus:outline-none" disabled={isPending}>
                <GlobeIcon />
                <SelectValue placeholder={t("Language")} />
            </SelectTrigger>
            <SelectContent className="border-none w-auto">
                <SelectGroup>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            <div className="">
                                <p>{item.label}</p>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};