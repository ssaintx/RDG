"use client"

import Image from "next/image";

import { Search } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

import { useState } from "react";
import { gptsItems } from "@/constants/";
import { useTranslations } from "next-intl";

export const GPTs = () => {
    const t = useTranslations("Gpts");
    // SEARCHING ALGORITHM
    const allGpts = gptsItems();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredItems, setFilteredItems] = useState(allGpts);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);

        const filtered = allGpts.filter((item) => {
            const itemName = item.title.toLowerCase();
            const searchTermLower = newSearchTerm.toLowerCase();

            return itemName.includes(searchTermLower);
        });

        if (newSearchTerm === "") {
            setFilteredItems(allGpts)
        } else {
            setFilteredItems(filtered);
        }
        if (filtered.length === 0) {
            setFilteredItems([])
        }

        setFilteredItems(filtered);
    };

    // TABS
    const tabs = [
        t("Tabs.FirstTab"),
        t("Tabs.SecondTab"),
        t("Tabs.ThirdTab"),
        t("Tabs.FourthTab"),
        t("Tabs.FifthTab"),
        t("Tabs.SixthTab"),
        t("Tabs.SeventhTab"),
    ];

    // CATEGORIES
    const categories = [...new Set(allGpts.map((item) => item.category))];

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
                            onChange={handleSearchChange}
                            className="bg-backgroundSecondary text-white w-full sm:w-64 px-4 py-2 rounded-full pl-10 focus:outline-none"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    </div>
                </div>

                {/* ALL ELEMENTS */}
                {searchTerm === "" ? (
                    <Tabs defaultValue={tabs[0]}>
                        {/* Navigation Bar */}
                        <ScrollArea>
                            <div className="w-full relative h-10 mt-8 overflow-hidden">
                                <TabsList className="absolute flex justify-start lg:justify-center items-center h-10 w-full border-b-[2px] border-backgroundSecondary pb-1.5">
                                    {tabs.map((tab, i) => (
                                        <TabsTrigger value={tab} key={i}>{tab}</TabsTrigger>
                                    ))}
                                </TabsList>
                            </div>
                            <ScrollBar orientation="horizontal" className="bg-transparent" />
                        </ScrollArea>

                        {/* ALL CATEGORY */}
                        <TabsContent value={tabs[0]}>

                            {/* FEATURED */}
                            <div className="flex flex-row w-full justify-start items-center mt-8">
                                <h1 className="font-bold text-2xl md:text-3xl">{t("Titles.FirstTitle")}</h1>
                            </div>

                            {/* CARDS CONTAINER */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                                {filteredItems.map((item, i) => (
                                    <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                                        {/* CARDS IMAGE */}
                                        <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-2xl" />
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

                            <Button className="btn-full w-full mt-6">
                                {t("SeeMore")}
                            </Button>

                            {/* FROM PUZZLE AI */}
                            <div className="flex flex-row w-full justify-start items-center mt-16">
                                <h1 className="font-bold text-2xl md:text-3xl">{t("Titles.SecondTitle")}</h1>
                            </div>

                            {/* CARDS CONTAINER */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                                {filteredItems.map((item, i) => (
                                    <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                                        {/* CARDS IMAGE */}
                                        <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-2xl" />
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

                            <Button className="btn-full w-full mt-6">
                                {t("SeeMore")}
                            </Button>

                            {/* IMAGES */}
                            <div className="flex flex-row w-full justify-start items-center mt-16">
                                <h1 className="font-bold text-2xl md:text-3xl">{t("Titles.ThirdTitle")}</h1>
                            </div>

                            {/* CARDS CONTAINER */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                                {filteredItems.map((item, i) => (
                                    <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                                        {/* CARDS IMAGE */}
                                        <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-2xl" />
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

                            <Button className="btn-full w-full mt-6">
                                {t("SeeMore")}
                            </Button>

                            {/* COMPILATION BY TEXT */}
                            <div className="flex flex-row w-full justify-start items-center mt-16">
                                <h1 className="font-bold text-2xl md:text-3xl">{t("Titles.FourthTitle")}</h1>
                            </div>
                            {/* CARDS CONTAINER */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                                {filteredItems.map((item, i) => (
                                    <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                                        {/* CARDS IMAGE */}
                                        <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-2xl" />
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

                            <Button className="btn-full w-full mt-6">
                                {t("SeeMore")}
                            </Button>
                        </TabsContent>

                        {/* IMAGE CATEGORY */}
                        <TabsContent value={tabs[1]}>
                            {categories.slice(0, 1).map((category, i) => (
                                <div key={i}>
                                    <h1 className="font-bold text-2xl md:text-3xl mt-8">{tabs[1]}</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                                        {filteredItems.filter((item) => item.category === category).map((item, i) => (
                                            <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                                                {/* CARDS IMAGE */}
                                                <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-2xl" />
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
                                </div>
                            ))}
                        </TabsContent>

                        {/* COMPILATION BY TEXT CATEGORY */}
                        <TabsContent value={tabs[2]}>
                            {categories.slice(1, 2).map((category, i) => (
                                <div key={i}>
                                    <h1 className="font-bold text-2xl md:text-3xl mt-8">{tabs[2]}</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                                        {filteredItems.filter((item) => item.category === category).map((item, i) => (
                                            <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                                                {/* CARDS IMAGE */}
                                                <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-2xl" />
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
                                </div>
                            ))}
                        </TabsContent>

                        {/* PERFORMANCE CATEGORY */}
                        <TabsContent value={tabs[3]}>
                            {categories.slice(2, 3).map((category, i) => (
                                <div key={i}>
                                    <h1 className="font-bold text-2xl md:text-3xl mt-8">{tabs[3]}</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                                        {filteredItems.filter((item) => item.category === category).map((item, i) => (
                                            <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                                                {/* CARDS IMAGE */}
                                                <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-2xl" />
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
                                </div>
                            ))}
                        </TabsContent>

                        {/* RESEARCH AND ANALYSIS CATEGORY */}
                        <TabsContent value={tabs[4]}>
                            {categories.slice(3, 4).map((category, i) => (
                                <div key={i}>
                                    <h1 className="font-bold text-2xl md:text-3xl mt-8">{tabs[4]}</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                                        {filteredItems.filter((item) => item.category === category).map((item, i) => (
                                            <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                                                {/* CARDS IMAGE */}
                                                <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-2xl" />
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
                                </div>
                            ))}
                        </TabsContent>

                        {/* EDUCATION CATEGORY */}
                        <TabsContent value={tabs[5]}>
                            {categories.slice(4, 5).map((category, i) => (
                                <div key={i}>
                                    <h1 className="font-bold text-2xl md:text-3xl mt-8">{tabs[5]}</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                                        {filteredItems.filter((item) => item.category === category).map((item, i) => (
                                            <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                                                {/* CARDS IMAGE */}
                                                <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-2xl" />
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
                                </div>
                            ))}
                        </TabsContent>

                        {/* LIFESTYLE CATEGORY */}
                        <TabsContent value={tabs[6]}>
                            {categories.slice(5, 6).map((category, i) => (
                                <div key={i}>
                                    <h1 className="font-bold text-2xl md:text-3xl mt-8">{tabs[6]}</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                                        {filteredItems.filter((item) => item.category === category).map((item, i) => (
                                            <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                                                {/* CARDS IMAGE */}
                                                <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-2xl" />
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
                                </div>
                            ))}
                        </TabsContent>
                    </Tabs>
                ) : (
                    <>
                        {/* FOUND ITEMS */}
                        {filteredItems.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
                                {filteredItems.map((item, i) => (
                                    <div className="card flex flex-row gap-4 justify-center" key={item.id}>
                                        {/* CARDS IMAGE */}
                                        <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-2xl" />
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
                        ) : (
                            <div className="flex flex-col items-start w-full mt-8">
                                <h1 className="font-bold text-2xl md:text-3xl">{t("NotFound")}</h1>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};
