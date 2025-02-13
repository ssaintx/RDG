"use client";

import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

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
            </div>
        </section>
    );
};
