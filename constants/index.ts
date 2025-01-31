import { useTranslations } from "next-intl";

// Navbar
export const navbarItems = () => {
    const t = useTranslations("Navbar");

    const items = [
        {
            title: t("About"),
            href: "/about",
        },
        {
            title: t("Products"),
            href: "/products",
        },
        {
            title: t("Partners"),
            href: "/partners"
        },
        {
            title: t("Contacts"),
            href: "/contacts",
        },
    ];

    return items;
};