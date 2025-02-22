"use client"

import Image from "next/image";

import { Team } from "../sections/Team";
import { GetStarted } from "../sections/GetStarted";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { useState } from "react";
import { Locale } from "@/app/i18n/config";
import { aboutUsItems } from "@/constants";
import { useRouter } from 'next/navigation';
import {
    useLocale,
    useTranslations
} from "next-intl";


export const AboutUs = () => {
    const t = useTranslations("AboutUs");
    const router = useRouter();
    // get locale to make text bigger in english and smaller in russian
    const locale = useLocale();
    const [currentLocale] = useState<Locale>(locale as Locale);

    return (
        <section className="about-us">

            {/* BG IMAGE */}
            <div className="about-us-hero-bg" />

            {/* HERO TEXT CONTAINER */}
            <div className="flex flex-col items-start justify-center container-padding container-padding-2 my-20 gap-4 w-full">
                <h1
                    className={`text-white font-bold ${(currentLocale === 'ru') ? 'text-4xl' : 'text-5xl'} sm:text-5xl lg:text-7xl`}
                >
                    <span className="text-[#AEB3D3] pr-1">#</span>
                    {t("Title")}
                </h1>
                <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl">{t("Subtitle")}</p>
            </div>

            {/* CARD CONTAINER */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container-padding">
                {aboutUsItems().map((item) => (
                    <div className="card !bg-white gap-4" key={item.id}>
                        <Image src={item.icon} alt={item.title} width={40} height={40} />
                        <h1 className="text-black font-bold text-lg">{item.title}</h1>
                        <p className="text-textTertiary">{item.description}</p>
                        <p className="mt-6 text-textTertiary" dangerouslySetInnerHTML={{ __html: item.features }} />
                    </div>
                ))}
            </div>

            {/* MESSAGES CONTAINER */}
            <div className="grid grid-cols-2 gap-4 w-full container-padding mt-12">
                {/* FIRST MESSAGE */}
                <div className="flex items-center justify-center p-4 bg-backgroundSecondary sm:text-lg rounded-2xl col-start-1 row-start-1">
                    {t("Messages.FirstMessage")}
                </div>
                {/* BORDER LINE */}
                <div className="w-[50%] mt-8 col-start-2 row-start-1 border-[2px] border-b-0 border-l-0 rounded-tr-full border-dashed" />
                {/* SECOND MESSAGE */}
                <div className="flex items-center justify-center w-full p-4 bg-backgroundSecondary sm:text-lg rounded-2xl col-start-2 row-start-2">
                    {t("Messages.SecondMessage")}
                </div>
                {/* BORDER LINE */}
                <div className="ml-9 sm:ml-36 lg:ml-64 mt-8 col-start-1 row-start-2 border-[2px] border-b-0 border-r-0 rounded-tl-full border-dashed" />
                {/* THIRD MESSAGE */}
                <div className="flex items-center justify-center p-4 bg-backgroundSecondary sm:text-lg rounded-2xl col-start-1 row-start-3">
                    {t("Messages.ThirdMessage")}
                </div>
                {/* BORDER LINE */}
                <div className="w-[50%] mt-8 col-start-2 row-start-3 border-[2px] border-b-0 border-l-0 rounded-tr-full border-dashed" />
                {/* FOURTH MESSAGE */}
                <div className="flex items-center justify-center w-full p-4 bg-backgroundSecondary sm:text-lg rounded-2xl col-start-2 row-start-4">
                    {t("Messages.FourthMessage")}
                </div>
                {/* BORDER LINE */}
                <div className="ml-9 sm:ml-36 lg:ml-64 mt-8 col-start-1 row-start-4 border-[2px] border-b-0 border-r-0 rounded-tl-full border-dashed flex justify-start items-end">
                    <ChevronDownIcon className="-translate-x-3 translate-y-2 size-6 text-bold" />
                </div>
            </div>
            {/* OTHER COMPONENTS */}
            <Team dark />
            <GetStarted />
        </section>
    );
};