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

// About Product
export const aboutProductItems = () => {
    const t = useTranslations("AboutProduct");

    const items = [
        {
            id: 1,
            icon: '/images/about-products/first-card.svg',
            title: t('FirstCard.Title'),
            description: t('FirstCard.Description'),
            url: t('FirstCard.Url'),
        },
        {
            id: 2,
            icon: '/images/about-products/second-card.svg',
            title: t('SecondCard.Title'),
            description: t('SecondCard.Description'),
            url: t('SecondCard.Url'),
        },
        {
            id: 3,
            icon: '/images/about-products/third-card.svg',
            title: t('ThirdCard.Title'),
            description: t('ThirdCard.Description'),
            url: '',
        },
        {
            id: 4,
            icon: '/images/about-products/fourth-card.svg',
            title: t('FourthCard.Title'),
            description: t('FourthCard.Description'),
            url: '',
        },
        {
            id: 5,
            icon: '/images/about-products/fifth-card.svg',
            title: t('FifthCard.Title'),
            description: t('FifthCard.Description'),
            url: '',
        },
    ];

    return items;
}