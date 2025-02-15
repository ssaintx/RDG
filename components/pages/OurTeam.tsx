import { Button } from "../ui/button";
import { Team } from "../sections/Team";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const OurTeam = () => {
    const t = useTranslations("OurTeam");

    return (
        <section className="our-team">
            <div className="mt-16 lg:mt-0">
                <Team dark />
            </div>
            <div className="flex flex-col items-center container-padding mt-8 pb-16">
                <div className="w-full">
                    {/* Question Bubble */}
                    <div className="flex justify-end mb-4">
                        <div className="bg-[#E7FECA] text-black px-4 py-2 rounded-l-3xl rounded-tr-3xl rounded-br-md max-w-sm">
                            {t("FirstMessage")}
                        </div>
                    </div>

                    {/* Answer Bubble */}
                    <div className="flex justify-start mb-4">
                        <div className="bg-backgroundSecondary text-white px-4 py-3 rounded-r-3xl rounded-tl-3xl rounded-bl-md max-w-screen-md mr-4">
                            {t("ReplyFirstMessage")}
                        </div>
                    </div>

                    {/* Second Question Bubble */}
                    <div className="flex justify-end mb-4">
                        <div className="bg-[#E7FECA] text-black px-4 py-2 rounded-l-3xl rounded-tr-3xl rounded-br-md" dangerouslySetInnerHTML={{ __html: t("SecondMessage") }} />
                    </div>

                    {/* Second Answer Bubble */}
                    <div className="flex flex-col gap-2 items-start mb-4 max-w-screen-md mr-4">
                        <div className="bg-backgroundSecondary text-white px-4 py-3 rounded-r-3xl rounded-tl-3xl rounded-bl-md ">
                            {t("ReplySecondMessage")}
                        </div>
                        <Button className="bg-main text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition w-full">
                            {t("Button")}
                            <ArrowRightIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};