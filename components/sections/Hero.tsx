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
            <div className="flex flex-col items-start justify-center container-padding w-full h-full gap-8 md:gap-16">
                {/* HERO HEADER TEXT CONTAINER */}
                <div className="flex items-center justify-center">
                    <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold leading-tight">
                        {t("Header.Automation")}&nbsp;
                        <span className="text-[#BBD6FE]">{t("Header.Using")}</span>&nbsp;<br />
                        <span className="text-[#52BEFF]">{t("Header.Telegram")}</span>
                    </h1>
                </div>

                {/* HERO TEXT CONTAINER */}
                <div className="flex items-center justify-center">
                    <p className="text-textSecondary w-full max-w-[512px]">
                        {t("Text")}
                    </p>
                </div>

                {/* HERO BUTTON CONTAINER */}
                <div className="flex flex-col md:flex-row items-center gap-36 md:gap-16">
                    {/* HERO BUTTONS */}
                    <Button className="btn-blur">
                        {t("Buttons.Order")}
                        <ArrowRightIcon />
                    </Button>
                    <Button className="btn-transparent justify-self-end -translate-x-8 md:-translate-x-0 translate-y-20 md:translate-y-0">
                        {t("Buttons.Learn")}
                        <ArrowDownIcon />
                    </Button>
                </div>
            </div>
        </section>
    );
};