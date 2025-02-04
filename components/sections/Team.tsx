import Image from "next/image";

import { teamItems } from "@/constants";
import { useTranslations } from "next-intl";

export const Team = () => {
    const t = useTranslations("Team");

    return (
        <section className="team">
            {/* CONTAINER */}
            <div className="flex flex-col items-center w-full container-padding container-padding-2">
                {/* TEXT CONTAINER */}
                <div className="flex flex-col justify-center gap-4 items-center w-full container-padding">
                    <h1 className="text-black title-text">{t("Title")}</h1>
                    <h2 className="text-center text-md sm:text-lg text-textTertiary">{t("Subtitle")}</h2>
                </div>
                {/* TEAM CONTAINER */}
                <div className="card-container w-full h-full mt-8">
                    {teamItems().map((item) => (
                        <div
                            key={item.id}
                            className={`relative flex flex-col justify-end bg-cover bg-center h-[540px] rounded-3xl p-6 z-[2]`}
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-3xl z-[1]" />
                            
                            {/* NAME AND ROLE CONTAINER */}
                            <div className="z-[3]">
                                <h1>{item.name}</h1>
                                <h2 className="text-[#D9D9D9]">{item.role}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};