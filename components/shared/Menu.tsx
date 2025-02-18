"use client"

import {
    motion,
    AnimatePresence
} from "framer-motion";

import {
    Cross2Icon,
    HamburgerMenuIcon,
} from "@radix-ui/react-icons";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Menu = () => {
    const t = useTranslations("Navbar")
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="p-2 focus:outline-none z-50"
            >
                <HamburgerMenuIcon className="size-4" />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: "10vh" }}
                        animate={{ height: "100vh" }}
                        exit={{ height: "10vh" }}
                        transition={{
                            duration: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="fixed top-0 left-0 w-full h-full bg-[#282828] backdrop-blur-3xl text-white z-40 flex flex-col p-6 overflow-y-auto">

                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                            className="self-end text-xl focus:outline-none mb-4">
                            <Cross2Icon />
                        </button>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="about">
                                <AccordionTrigger className="text-[#E3E3E3]">{t("About.Title")}</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-2 text-white text-sm font-[200]">
                                        <li><a href='/about-us' className="hover">{t("About.AboutUs")}</a></li>
                                        <li><a href='/our-team' className="hover">{t("About.OurTeam")}</a></li>
                                        <li><a href='https://t.me/rdglessons' target="_blank" rel="noopener noreferrer" className="hover">{t("About.DevelopmentLessons")}</a></li>
                                        <li><a href='' target="_blank" rel="noopener noreferrer" className="hover">{t("About.DataPolicy")}</a></li>
                                        <li><a href='' target="_blank" rel="noopener noreferrer" className="hover">{t("About.PrivacyPolicy")}</a></li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="products">
                                <AccordionTrigger className="text-[#E3E3E3]">{t("Products.Title")}</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-2 text-white text-sm font-[200]">
                                        <li className="text-textTertiary my-1 font-light">{t("Products.Title")}</li>
                                        <li><a href='' target="_blank" rel="noopener noreferrer" className="hover">{t("Products.TelegramBot")}</a></li>
                                        <li><a href='' target="_blank" rel="noopener noreferrer" className="hover">{t("Products.Website")}</a></li>
                                        <li><a href='' target="_blank" rel="noopener noreferrer" className="hover">{t("Products.AI")}</a></li>
                                        <li className="text-textTertiary my-1 font-light">{t("Products.Solutions")}</li>
                                        <li><a href='' target="_blank" rel="noopener noreferrer" className="hover">{t("Products.UsingAI")}</a></li>
                                        <li><a href='' target="_blank" rel="noopener noreferrer" className="hover">{t("Products.BotDevelopment")}</a></li>
                                        <li className="text-textTertiary my-1 font-light">{t("Products.AI2")}</li>
                                        <li><a href='' target="_blank" rel="noopener noreferrer" className="hover">{t("Products.ConnectionPlugin")}</a></li>
                                        <li><a href='/gpts' target="_blank" rel="noopener noreferrer" className="hover">{t("Products.GPTs")}</a></li>
                                        <li><a href='' target="_blank" rel="noopener noreferrer" className="hover">{t("Products.DevelopmentAI")}</a></li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="partners">
                                <AccordionTrigger className="text-[#E3E3E3]">{t("Partners.Title")}</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-2 text-white text-sm">
                                        <a href='' target="_blank" rel="noopener noreferrer" className="card gap-2 !p-2 !w-max !rounded-xl">
                                            <Image src='/images/partners/first-card.png' alt='partners' width={200} height={200} className="rounded-lg" />
                                            <h1 className="text-white">{t("Partners.FirstPartner.Title")}</h1>
                                            <p className="text-sm text-textTertiary">{t("Partners.FirstPartner.Description")}</p>
                                        </a>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="contacts">
                                <AccordionTrigger className="text-[#E3E3E3]">{t("Contacts.Title")}</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="flex flex-col space-y-2 text-white text-sm">
                                        <div className="flex flex-col gap-2 mt-4 font-[200]">
                                            <a href='' target="_blank" rel="noopener noreferrer">{t("Contacts.Order")}</a>
                                            <a href='https://t.me/puzzledevs' target="_blank" rel="noopener noreferrer">{t("Contacts.Support")}</a>
                                        </div>
                                        <a href='' target="_blank" rel="noopener noreferrer" className="card gap-2 !p-2 !w-max !rounded-xl">
                                            <Image src='/images/contacts/first-card.png' alt="news" width={200} height={100} className="rounded-lg" />
                                            <h1 className="text-white">{t("Contacts.NewsChannel.Title")}</h1>
                                            <p className="text-sm text-textTertiary">{t("Contacts.NewsChannel.Description")}</p>
                                        </a>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
