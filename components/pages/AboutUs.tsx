import Image from "next/image";

import { Team } from "../sections/Team";
import { GetStarted } from "../sections/GetStarted";
import { useTranslations } from "next-intl";
import { aboutUsItems, aboutUsMessages } from "@/constants";

export const AboutUs = () => {
    const t = useTranslations("AboutUs");
    return (
        <section className="about-us">

            {/* BG IMAGE */}
            <div className="about-us-hero-bg" />

            {/* HERO TEXT CONTAINER */}
            <div className="flex flex-col items-start justify-center container-padding container-padding-2 my-20 gap-4 w-full">
                <h1 className="text-white font-bold text-5xl lg:text-7xl"><span className="text-[#AEB3D3] pr-1">#</span>{t("Title")}</h1>
                <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl">{t("Subtitle")}</p>
            </div>

            {/* CARD CONTAINER */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container-padding">
                {aboutUsItems().map((item) => (
                    <div className="card !bg-white gap-4" key={item.id}>
                        <Image src={item.icon} alt={item.title} width={40} height={40} />
                        <h1 className="text-black font-bold text-lg">{item.title}</h1>
                        <p className="text-textTertiary">{item.description}</p>
                        <p className="mt-6 text-textTertiary" dangerouslySetInnerHTML={{ __html: item.features }} />
                    </div>
                ))}
            </div>

            {/* MESSAGES CONTAINER */}
            <div className="grid grid-cols-2 gap-4 w-full container-padding mt-12">
                <div className="p-4 bg-backgroundSecondary text-sm sm:text-lg rounded-2xl col-start-1 row-start-1">
                    {t("Messages.FirstMessage")}
                </div>
                <div className="w-[50%] mt-8 col-start-2 row-start-1 border-[2px] border-b-0 border-l-0 rounded-tr-full border-dashed" />
                <div className="flex items-center justify-end w-full p-4 bg-backgroundSecondary text-sm sm:text-lg rounded-2xl col-start-2 row-start-2">
                    {t("Messages.SecondMessage")}
                </div>
                <div className="ml-9 sm:ml-18 lg:ml-36 mt-8 col-start-1 row-start-2 border-[2px] border-b-0 border-r-0 rounded-tl-full border-dashed" />
                <div className="p-4 bg-backgroundSecondary text-sm sm:text-lg rounded-2xl col-start-1 row-start-3">
                    {t("Messages.ThirdMessage")}
                </div>
                <div className="w-[50%] mt-8 col-start-2 row-start-3 border-[2px] border-b-0 border-l-0 rounded-tr-full border-dashed" />
                <div className="flex items-center justify-end w-full p-4 bg-backgroundSecondary text-sm sm:text-lg rounded-2xl col-start-2 row-start-4">
                    {t("Messages.FourthMessage")}
                </div>
                <div className="ml-9 sm:ml-18 lg:ml-36 mt-8 col-start-1 row-start-4 border-[2px] border-b-0 border-r-0 rounded-tl-full border-dashed" />
            </div>
            {/* OTHER COMPONENTS */}
            <Team dark />
            <GetStarted />
        </section>
    );
};