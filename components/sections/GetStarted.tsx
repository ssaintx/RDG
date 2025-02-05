import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const GetStarted = () => {
    const t = useTranslations("GetStarted");

    return (
        <section className="get-started">
            {/* CONTAINER */}
            <div className="flex flex-col items-center w-full container-padding my-8">
                {/* CARD */}
                <div className="flex flex-col gap-8 items-center card w-full !rounded-[36px]">
                    <h1 className="text-3xl font-bold mt-8">{t("Title")}</h1>
                    <h2 className="text-center text-textSecondary text-lg">{t("Subtitle")}</h2>
                    {/* BUTTONS CONTAINER */}
                    <div className="flex flex-row gap-6 mt-4">
                        <Button className="btn-blue">
                            {t("OrderBot")}
                            <ArrowRightIcon className="size-6" />
                        </Button>
                        <Button className="btn-transparent text-textTertiary">
                            {t("About")}
                            <ArrowRightIcon className="-rotate-45 size-8" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};