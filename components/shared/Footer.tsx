import Image from "next/image";

import { useTranslations } from "next-intl";

export const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="footer">
            {/* LOGO */}
            <Image src="/images/logo.svg" alt="logo" width={72} height={72} priority className="select-none" />
            {/* ITEMS */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm sm:text-[15px] text-textTertiary">
                <a>{t("DataPolicy")}</a>
                <a>{t("PrivacyPolicy")}</a>
            </div>
        </footer>

    );
};