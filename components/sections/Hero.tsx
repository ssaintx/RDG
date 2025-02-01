import { useTranslations } from "next-intl";
import Image from "next/image";

// HERO COMPONENT
export const Hero = () => {
    const t = useTranslations("Hero");
    return (
        <section className="hero" id="home">
            {/* HERO CONTAINER  */}
            <div className="flex flex-col items-start justify-center container-padding w-full h-full">
                {/* HERO HEADER */}
                <h1 className="text-[2.5rem] md:text-[4rem] font-bold mb-12">
                    {t("Header.Automation")}&nbsp;
                    <span className="text-[#BBD6FE]">{t("Header.Using")}</span>&nbsp;<br />
                    <span className="text-[#2E9FE3]">{t("Header.Telegram")}</span>
                </h1>
                {/* HERO TEXT */}
                <p className="text-textSecondary w-[300px]">
                    {t("Text")}
                </p>
            </div>
        </section>
    );
};