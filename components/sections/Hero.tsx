import { useTranslations } from "next-intl";

import { Button } from "../ui/button";
import {
    ArrowDownIcon,
    ArrowRightIcon
} from "@radix-ui/react-icons";

// HERO COMPONENT
export const Hero = () => {
    const t = useTranslations("Hero");
    return (
        <section className="hero" id="home">
            {/* HERO CONTAINER  */}
            <div className="flex flex-col items-start justify-center container-padding w-full h-full">
                {/* HERO HEADER */}
                <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold md:mt-36 mt-24 sm:mb-4 mb-2 leading-tight">
                    {t("Header.Automation")}&nbsp;
                    <span className="text-[#BBD6FE]">{t("Header.Using")}</span>&nbsp;<br />
                    <span className="text-[#52BEFF]">{t("Header.Telegram")}</span>
                </h1>

                {/* HERO TEXT */}
                <p className="text-textSecondary w-full max-w-[500px] my-8">
                    {t("Text")}
                </p>

                {/* HERO CONTAINER */}
                <div className="flex flex-col md:flex-row h-full items-center gap-36 sm:gap-16">
                    {/* HERO BUTTONS */}
                    <Button className="btn-blur">
                        {t("Buttons.Order")}
                        <ArrowRightIcon />
                    </Button>
                    <Button className="btn-transparent justify-self-end">
                        {t("Buttons.Learn")}
                        <ArrowDownIcon />
                    </Button>
                </div>
            </div>
        </section>
    );
};