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

// Connect GPTs
export const connectGPTItems = () => {
    const t = useTranslations("ConnectGPT.Cards");

    const items = [
        {
            id: 1,
            image: '/images/connect-gpt/first-card.png',
            title: t('FirstCard.Title'),
            description: t('FirstCard.Description'),
            button: t('FirstCard.ConnectButton'),
            link: '',
        },
        {
            id: 2,
            image: '/images/connect-gpt/second-card.png',
            title: t('SecondCard.Title'),
            description: t('SecondCard.Description'),
            button: t('SecondCard.ConnectButton'),
            link: '',
        },
        {
            id: 3,
            image: '/images/connect-gpt/third-card.png',
            title: t('ThirdCard.Title'),
            description: t('ThirdCard.Description'),
            button: t('ThirdCard.ConnectButton'),
            link: '',
        },
    ];

    return items;
}

// Features
export const featuresItems = () => {
    const t = useTranslations("Features.Cards");

    const items = [
        {
            id: 1,
            icon: '/images/features/first-card.svg',
            title: t('FirstCard.Title'),
            description: t('FirstCard.Description'),
        },
        {
            id: 2,
            icon: '/images/features/second-card.svg',
            title: t('SecondCard.Title'),
            description: t('SecondCard.Description'),
        },
        {
            id: 3,
            icon: '/images/features/third-card.svg',
            title: t('ThirdCard.Title'),
            description: t('ThirdCard.Description'),
        },
        {
            id: 4,
            icon: '/images/features/fourth-card.svg',
            title: t('FourthCard.Title'),
            description: t('FourthCard.Description'),
        },
        {
            id: 5,
            icon: '/images/features/fifth-card.svg',
            title: t('FifthCard.Title'),
            description: t('FifthCard.Description'),
        },
    ];

    return items;
};

// Team
export const teamItems = () => {
    const t = useTranslations("Team.Cards");

    const items = [
        {
            id: 1,
            image: '/images/team/first-card.jpg',
            name: t('FirstCard.Name'),
            role: t('FirstCard.Role'),
            about: t('FirstCard.About'),
            portfolio: t('FirstCard.Portfolio'),
            url: '',
        },
        {
            id: 2,
            image: '/images/team/second-card.jpg',
            name: t('SecondCard.Name'),
            role: t('SecondCard.Role'),
            about: t('SecondCard.About'),
            portfolio: t('FirstCard.Portfolio'),
            url: '',
        },
        {
            id: 3,
            image: '/images/team/third-card.jpg',
            name: t('ThirdCard.Name'),
            role: t('ThirdCard.Role'),
            about: t('ThirdCard.About'),
            portfolio: t('ThirdCard.Portfolio'),
            url: '',
        },
        {
            id: 4,
            image: '/images/team/fourth-card.jpg',
            name: t('FourthCard.Name'),
            role: t('FourthCard.Role'),
            about: t('FourthCard.About'),
            portfolio: t('FourthCard.Portfolio'),
            url: '',
        },
        {
            id: 5,
            image: '/images/team/fifth-card.jpg',
            name: t('FifthCard.Name'),
            role: t('FifthCard.Role'),
            about: t('FifthCard.About'),
            portfolio: t('FifthCard.Portfolio'),
            url: '',
        },
        {
            id: 6,
            image: '/images/team/sixth-card.jpg',
            name: t('SixthCard.Name'),
            role: t('SixthCard.Role'),
            about: t('SixthCard.About'),
            portfolio: t('SixthCard.Portfolio'),
            url: '',
        },
        {
            id: 7,
            image: '/images/team/seventh-card.jpg',
            name: t('SeventhCard.Name'),
            role: t('SeventhCard.Role'),
            about: t('SeventhCard.About'),
            portfolio: t('SeventhCard.Portfolio'),
            url: '',
        },
    ];

    return items;
};

// Cases
export const casesItems = () => {
    const t = useTranslations("Cases.Cards");

    const items = [
        {
            id: 1,
            image: '/images/cases/first-card.jpg',
            title: t('FirstCard.Title'),
            description: t('FirstCard.Description'),
            url: t('FirstCard.Url'),
            link: '',
        },
        {
            id: 2,
            image: '/images/cases/second-card.jpg',
            title: t('SecondCard.Title'),
            description: t('SecondCard.Description'),
            url: t('SecondCard.Url'),
            link: '',
        },
        {
            id: 3,
            image: '/images/cases/third-card.jpg',
            title: t('ThirdCard.Title'),
            description: t('ThirdCard.Description'),
            url: t('ThirdCard.Url'),
            link: '',
        },
        {
            id: 4,
            image: '/images/cases/fourth-card.jpg',
            title: t('FourthCard.Title'),
            description: t('FourthCard.Description'),
            url: t('FourthCard.Url'),
            link: '',
        },
        {
            id: 5,
            image: '/images/cases/fifth-card.jpg',
            title: t('FifthCard.Title'),
            description: t('FifthCard.Description'),
            url: t('FifthCard.Url'),
            link: '',
        },
        {
            id: 6,
            image: '/images/cases/sixth-card.jpg',
            title: t('SixthCard.Title'),
            description: t('SixthCard.Description'),
            url: t('SixthCard.Url'),
            link: '',
        },
    ];

    return items;
};