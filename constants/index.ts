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
            link: '',
        },
        {
            id: 2,
            icon: '/images/about-products/second-card.svg',
            title: t('SecondCard.Title'),
            description: t('SecondCard.Description'),
            url: t('SecondCard.Url'),
            link: '',
        },
        {
            id: 3,
            icon: '/images/about-products/third-card.svg',
            title: t('ThirdCard.Title'),
            description: t('ThirdCard.Description'),
            url: '',
            link: '',
        },
        {
            id: 4,
            icon: '/images/about-products/fourth-card.svg',
            title: t('FourthCard.Title'),
            description: t('FourthCard.Description'),
            url: '',
            link: '',
        },
        {
            id: 5,
            icon: '/images/about-products/fifth-card.svg',
            title: t('FifthCard.Title'),
            description: t('FifthCard.Description'),
            url: '',
            link: '',
        },
    ];

    return items;
}

// Info Panel
export const infoPanelItems = () => {
    const t = useTranslations("InfoPanel");

    const items = [
        {
            id: 1,
            icon: '/images/info-panel/first-card.svg',
            title: t('FirstCard.Title'),
            description: t('FirstCard.Description'),
            url: t('FirstCard.Url'),
            link: '',
        },
        {
            id: 2,
            icon: '/images/info-panel/second-card.svg',
            title: t('SecondCard.Title'),
            description: t('SecondCard.Description'),
            url: '',
            link: '',
        },
        {
            id: 3,
            icon: '/images/info-panel/third-card.svg',
            title: t('ThirdCard.Title'),
            description: t('ThirdCard.Description'),
            url: '',
            link: '',
        },
        {
            id: 4,
            icon: '/images/info-panel/fourth-card.svg',
            title: t('FourthCard.Title'),
            description: t('FourthCard.Description'),
            url: '',
            link: '',
        },
    ];

    return items;
}