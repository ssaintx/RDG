"use client"

import { useTransition } from "react";
import { Locale } from "@/app/i18n/config";
import { setUserLocale } from "@/app/i18n/locale";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../ui/select";
import { GlobeIcon } from "@radix-ui/react-icons";

// INTERFACE FOR PROPERTIES OF THE COMPONENT
interface LanguageSwitcherSelectProps {
    defaultValue: string;
    items: Array<{ value: string; label: string, icon: string }>;
};

export const LanguageSwitcherSelect = ({ defaultValue, items }: LanguageSwitcherSelectProps) => {
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
            <SelectTrigger className="select" disabled={isPending}>
                <GlobeIcon />
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="select-content">
                <SelectGroup>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            <div>
                                <p>{item.label}</p>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};