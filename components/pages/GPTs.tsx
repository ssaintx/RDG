"use client";

import Image from "next/image";

import { useState } from "react";
import { Search } from "lucide-react";
import { gptsItems } from "@/constants/";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export const GPTs = () => {
    const t = useTranslations("Gpts");
    const [activeTab, setActiveTab] = useState("All");

    const tabs = [
        t("Tabs.FirstTab"),
        t("Tabs.SecondTab"),
        t("Tabs.ThirdTab"),
        t("Tabs.FourthTab"),
        t("Tabs.FifthTab"),
        t("Tabs.SixthTab"),
        t("Tabs.SeventhTab"),
    ];

    return (
        <section className="gpts">
            {/* CONTAINER */}
            <div className="flex flex-col items-center w-full container-padding">
                {/* LOGO AND SEARCH CONTAINER */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full mt-20 gap-4">
                    {/* LOGO */}
                    <div className="flex flex-row items-start gap-4">
                        <Image src="/images/gpts/sparkles.png" alt="sparkles" width={48} height={48} />
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold gradient-text py-2">{t("Title")}</h1>
                    </div>
                    {/* SEARCH BAR */}
                    <div className="relative w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-backgroundSecondary text-white w-full sm:w-64 px-4 py-2 rounded-full pl-10 focus:outline-none"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    </div>
                </div>

                {/* Navigation Bar */}
                <div className="flex justify-center items-center mt-8 border-b-[2px] border-backgroundSecondary text-textTertiary overflow-x-auto w-full">
                    <nav className="flex space-x-4 sm:space-x-6 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 pb-2 whitespace-nowrap border-b-2 ${activeTab === tab ? "border-white text-white" : "border-transparent"
                                    } transition`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* FEATURED */}
                <div className="flex flex-row w-full justify-start items-center mt-8">
                    <h1 className="font-bold text-2xl md:text-3xl">{t("Titles.FirstTitle")}</h1>
                </div>

                {/* CARDS CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                    {gptsItems().map((item, i) => (
                    <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                        {/* CARDS IMAGE */}
                        <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-xl" />
                        {/* CARDS TITLE */}
                        <h1 className="text-xl font-bold">{item.title}</h1>
                        {/* CARDS PARAGRAPH */}
                        <p className="text-textLight">{item.description}</p>
                        {/* CARDS BUTTON */}
                        <div className="flex items-center justify-end">
                        <Button className="btn-dark">
                            <Image src="/icons/telegram.svg" alt="connect-icon" width={18} height={18} />
                            {item.button}
                        </Button>
                        </div>
                    </div>
                    ))}
                </div>
                
                {/* SEE MORE BUTTON */}
                <Button className="btn-full w-full mt-6">
                    {t("SeeMore")}
                </Button>

                {/* FROM PUZZLE AI */}
                <div className="flex flex-row w-full justify-start items-center mt-16">
                    <h1 className="font-bold text-2xl md:text-3xl">{t("Titles.SecondTitle")}</h1>
                </div>

                {/* CARDS CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                    {gptsItems().map((item, i) => (
                    <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                        {/* CARDS IMAGE */}
                        <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-xl" />
                        {/* CARDS TITLE */}
                        <h1 className="text-xl font-bold">{item.title}</h1>
                        {/* CARDS PARAGRAPH */}
                        <p className="text-textLight">{item.description}</p>
                        {/* CARDS BUTTON */}
                        <div className="flex items-center justify-end">
                        <Button className="btn-dark">
                            <Image src="/icons/telegram.svg" alt="connect-icon" width={18} height={18} />
                            {item.button}
                        </Button>
                        </div>
                    </div>
                    ))}
                </div>
                
                {/* SEE MORE BUTTON */}
                <Button className="btn-full w-full mt-6">
                    {t("SeeMore")}
                </Button>

                {/* IMAGES */}
                <div className="flex flex-row w-full justify-start items-center mt-16">
                    <h1 className="font-bold text-2xl md:text-3xl">{t("Titles.ThirdTitle")}</h1>
                </div>

                {/* CARDS CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                    {gptsItems().map((item, i) => (
                    <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                        {/* CARDS IMAGE */}
                        <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-xl" />
                        {/* CARDS TITLE */}
                        <h1 className="text-xl font-bold">{item.title}</h1>
                        {/* CARDS PARAGRAPH */}
                        <p className="text-textLight">{item.description}</p>
                        {/* CARDS BUTTON */}
                        <div className="flex items-center justify-end">
                        <Button className="btn-dark">
                            <Image src="/icons/telegram.svg" alt="connect-icon" width={18} height={18} />
                            {item.button}
                        </Button>
                        </div>
                    </div>
                    ))}
                </div>
                
                {/* SEE MORE BUTTON */}
                <Button className="btn-full w-full mt-6">
                    {t("SeeMore")}
                </Button>

                {/* COMPILATION BY TEXT */}
                <div className="flex flex-row w-full justify-start items-center mt-16">
                    <h1 className="font-bold text-2xl md:text-3xl">{t("Titles.FourthTitle")}</h1>
                </div>

                {/* CARDS CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                    {gptsItems().map((item, i) => (
                    <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                        {/* CARDS IMAGE */}
                        <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-xl" />
                        {/* CARDS TITLE */}
                        <h1 className="text-xl font-bold">{item.title}</h1>
                        {/* CARDS PARAGRAPH */}
                        <p className="text-textLight">{item.description}</p>
                        {/* CARDS BUTTON */}
                        <div className="flex items-center justify-end">
                        <Button className="btn-dark">
                            <Image src="/icons/telegram.svg" alt="connect-icon" width={18} height={18} />
                            {item.button}
                        </Button>
                        </div>
                    </div>
                    ))}
                </div>
                
                {/* SEE MORE BUTTON */}
                <Button className="btn-full w-full mt-6">
                    {t("SeeMore")}
                </Button>
            </div>
        </section>
    );
};
