"use client"

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

import { useTranslations } from "next-intl";
import {
    useState,
    useEffect,
    useRef
} from "react";
import {
    aboutItems,
    productsItems,
    partnersItems
} from "@/constants";

import Image from "next/image";
import gsap from "gsap";


export const Menu = () => {
    const t = useTranslations("Navbar");
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const menuDiv = menuRef.current;

        if (isOpen && menuDiv) {
            gsap.to(menuDiv, {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: "easeIn",
            });
            document.body.style.overflow = 'hidden';
        } else if (!isOpen && menuDiv) {
            gsap.to(menuDiv, {
                x: "100%",
                opacity: 1,
                duration: 0.4,
                ease: "easeOut",
                onComplete: () => {
                    document.body.style.overflow = 'auto';
                }
            });
        }
    }, [isOpen]);

    return (
        // Mobile menu done by scratch
        <div className="relative">
            {/* open trigger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="p-2 focus:outline-none z-50"
            >
                <HamburgerMenuIcon className="size-4" />
            </button>
            {/* GSAP animated menu */}
            <div
                ref={menuRef}
                className="fixed top-0 right-0 w-full h-screen bg-[#282828] backdrop-blur-3xl text-white z-40 flex flex-col p-6 overflow-y-auto" // right-0 for right side positioning
                style={{
                    transform: "translateX(100%)", // Initial x position to the right
                    opacity: 0,
                    pointerEvents: isOpen ? 'auto' : 'none'
                }}
            >
                {/* close trigger button when opened */}
                <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="self-end text-xl focus:outline-none mb-4 z-50"
                >
                    <Cross2Icon />
                </button>
                {/* content of the menu */}
                <Accordion type="single" collapsible className="w-full">
                    {/* ABOUT LINKS */}
                    <AccordionItem value="about">
                        <AccordionTrigger className="text-[#E3E3E3]">{t("About.Title")}</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-2 text-white text-sm font-[200]">
                                {aboutItems().map((item, index) => (
                                    <li key={index}><a href={item.href} className="hover">{item.title}</a></li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    {/* PRODUCT LINKS */}
                    <AccordionItem value="products">
                        <AccordionTrigger className="text-[#E3E3E3]">{t("Products.Title")}</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-2 text-white text-sm font-[200]">
                                {/* SEPARATOR TEXT */}
                                <li className="text-textTertiary my-1 font-light">{t("Products.Title")}</li>
                                {productsItems().slice(0, 3).map((item, index) => ( // First 3 items under "Products.Title"
                                    <li key={index}><a href={item.href} className="hover">{item.title}</a></li>
                                ))}
                                {/* SEPARATOR TEXT */}
                                <li className="text-textTertiary my-1 font-light">{t("Products.Solutions")}</li>
                                {productsItems().slice(3, 5).map((item, index) => ( // Next 2 items under "Products.Solutions"
                                    <li key={index}><a href={item.href} className="hover">{item.title}</a></li>
                                ))}
                                {/* SEPARATOR TEXT */}
                                <li className="text-textTertiary my-1 font-light">{t("Products.AI2")}</li>
                                {productsItems().slice(5).map((item, index) => ( // Remaining items under "Products.AI2"
                                    <li key={index}><a href={item.href} className="hover">{item.title}</a></li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    {/* PARTNERS LINKS */}
                    <AccordionItem value="partners">
                        <AccordionTrigger className="text-[#E3E3E3]">{t("Partners.Title")}</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-2 text-white text-sm">
                                {partnersItems().map((item) => (
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="card gap-2 !p-2 !w-max !rounded-xl" key={item.id}>
                                        <Image src={item.image} alt={item.title} width={200} height={200} className="rounded-lg" />
                                        <h1 className="text-white">{item.title}</h1>
                                        <p className="text-sm text-textTertiary w-[200px]">{item.description}</p>
                                    </a>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    {/* CONTACT LINKS */}
                    <AccordionItem value="contacts">
                        <AccordionTrigger className="text-[#E3E3E3]">{t("Contacts.Title")}</AccordionTrigger>
                        <AccordionContent>
                            <ul className="flex flex-col space-y-2 text-white text-sm">
                                <div className="flex flex-col gap-2 mt-2 font-[200]">
                                    <a href='' target="_blank" rel="noopener noreferrer">{t("Contacts.Order")}</a>
                                    <a href='https://t.me/puzzledevs' target="_blank" rel="noopener noreferrer">{t("Contacts.Support")}</a>
                                </div>
                                <a href='' target="_blank" rel="noopener noreferrer" className="card gap-2 !p-2 !w-max !rounded-xl">
                                    <Image src='/images/contacts/first-card.png' alt="news" width={200} height={100} className="rounded-lg" />
                                    <h1 className="text-white">{t("Contacts.NewsChannel.Title")}</h1>
                                    <p className="text-sm text-textTertiary w-[200px]">{t("Contacts.NewsChannel.Description")}</p>
                                </a>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};