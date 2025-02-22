"use client"

import { GlobeIcon } from "@radix-ui/react-icons";

import { useLocale } from 'next-intl';
import { Button } from "../ui/button";
import { Locale } from "@/app/i18n/config";
import { setUserLocale } from "@/app/i18n/locale";
import { 
    useTransition, 
    useState, 
    useCallback, 
    useEffect 
} from "react";

export const LanguageSwitcher = () => {
    const locale = useLocale();
    const [currentLocale, setCurrentLocale] = useState<Locale>(locale as Locale);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        setCurrentLocale(locale as Locale);
    }, [locale]);


    const toggleLocale = useCallback(() => {
        const nextLocale = currentLocale === 'en' ? 'ru' : 'en';
        startTransition(async () => {
            localStorage.setItem("locale", nextLocale);
            await setUserLocale(nextLocale);
            setCurrentLocale(nextLocale as Locale);
        });
    }, [currentLocale, startTransition, setCurrentLocale]);


    return (
        <Button
            onClick={toggleLocale}
            disabled={isPending}
            className="bg-transparent text-textPrimary hover:bg-transparent"
        >
            <GlobeIcon className="size-4" />
            {currentLocale === 'en' ? 'Eng' : 'Rus'}
        </Button>
    );
};