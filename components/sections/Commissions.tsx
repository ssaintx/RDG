import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const Commissions = () => {
    const t = useTranslations("Commissions");

    return (
        <section className="commissions">
            {/* CONTAINER */}
            <div className="flex flex-col gap-6 w-full container-padding container-padding-2">
                {/* TEXT CONTAINER */}
                <div className="flex flex-col gap-6 min-w-[300px] w-full max-w-[600px]">
                    <h1 className="text-black title-text">{t("Title")}</h1>
                    <h2 className="text-textTertiary text-sm sm:text-md">{t("Subtitle")}</h2>
                </div>
                {/* BUTTON CONTAINER */}
                <div className="flex flex-col md:flex-row max-w-[300px] gap-16">
                        <Button className="btn-blue">
                        {t("InviteClient")}
                        <ArrowRightIcon />
                    </Button>
                    <Button className="btn-transparent">
                        {t("LearnMore")}
                        <ArrowRightIcon className="-rotate-45 size-6" />
                    </Button>
                </div>
            </div>
        </section>
    );
};