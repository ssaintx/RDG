import { casesItems } from "@/constants";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export const Cases = () => {
    const t = useTranslations("Cases");

    return (
        <section className="cases">
            {/* CONTAINER */}
            <div className="flex flex-col items-center w-full container-padding container-padding-2">
                {/* TEXT CONTAINER */}
                <div className="flex flex-col justify-center gap-4 items-center w-full container-padding">
                    <h1 className="title-text">{t("Title")}</h1>
                    <h2 className="subtitle-text text-textLight">{t("Subtitle")}</h2>
                </div>
                {/* CARD CONTAINER */}
                <div className="card-container w-full h-full my-12">
                    {casesItems().map((item) => (
                        <div
                            key={item.id}
                            className="relative flex flex-col justify-between h-[400px] w-full rounded-3xl p-12 overflow-hidden"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            {/* Pseudo-element for background brightness */}
                            <div
                                className="absolute inset-0 bg-cover bg-center brightness-[0.25]"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />

                            {/* TEXT CONTAINER */}
                            <div className="relative z-10 flex flex-col gap-4">
                                <h1 className="text-lg">{item.title}</h1>
                                <p className="text-[#E3E3E3] font-thin">{item.description}</p>
                            </div>
                            {/* LINK */}
                            <a target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 text-[#D9D9D9] font-medium mt-2 z-10 cursor-pointer hover">
                                {item.url}
                                <ArrowRightIcon className="-rotate-45 size-6" />
                            </a>
                        </div>
                    ))}
                </div>
                {/* LINKS CONTAINER */}
                <div className="flex flex-col items-center mt-8 gap-8 w-full container-padding">
                    <h2 className="flex flex-row items-center gap-2 text-[#4C4C4C] hover cursor-pointer">
                        {t("MoreCases")}
                        <ArrowRightIcon className="-rotate-45 size-6" />
                    </h2>
                    <Button className="btn-blue">
                        {t("OrderBot")}
                        <ArrowRightIcon className="size-6" />
                    </Button>
                </div>
            </div>
        </section>
    );
};