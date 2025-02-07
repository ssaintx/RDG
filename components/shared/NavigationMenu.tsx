"use client"

import * as React from "react";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { useTranslations } from "next-intl";
import {
    aboutItems,
    partnersItems,
    productsItems
} from "@/constants";
import Image from "next/image";



export const NavMenu = () => {
    const t = useTranslations("Navbar");

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* ABOUT ITEM */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("About.Title")}</NavigationMenuTrigger>
                    <NavigationMenuContent className="nav-menu">
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {aboutItems().map((item) => (
                                <ListItem
                                    key={item.title}
                                    title={item.title}
                                    href={item.href}
                                />
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* PRODUCTS ITEM */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("Products.Title")}</NavigationMenuTrigger>
                    <NavigationMenuContent className="nav-menu">
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {productsItems().map((item) => (
                                <ListItem
                                    key={item.title}
                                    title={item.title}
                                    href={item.href}
                                />
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* PARTNERS ITEM */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("Partners.Title")}</NavigationMenuTrigger>
                    <NavigationMenuContent className="nav-menu">
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {partnersItems().map((item) => (
                                <div className="card gap-2 " key={item.id}>
                                    <Image src={item.image} alt={item.title} width={300} height={200} className="rounded-lg" />
                                    <h1 className="text-lg">{item.title}</h1>
                                    <p className="text-sm text-textLight">{item.description}</p>
                                </div>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* CONTACTS ITEM */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("Contacts.Title")}</NavigationMenuTrigger>
                    <NavigationMenuContent className="nav-menu">
                        <ul className="flex items-start justify-between w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            <div className="flex flex-col gap-2 mt-4">
                                <p>{t("Contacts.Order")}</p>
                                <p>{t("Contacts.Support")}</p>
                            </div>
                            <div className="card gap-2 ">
                                <Image src='/images/contacts/first-card.png' alt="news" width={200} height={200} className="rounded-lg" />
                                <h1 className="text-lg">{t("Contacts.NewsChannel.Title")}</h1>
                                <p className="text-sm text-textLight">{t("Contacts.NewsChannel.Description")}</p>
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors duration-200 ease-in-out hover:text-main",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
