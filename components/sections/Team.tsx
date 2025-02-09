import Image from "next/image";

import { teamItems } from "@/constants";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const Team = ({ dark }: { dark?: boolean}) => {
    const t = useTranslations("Team");

    return (
        <section className={`team ${dark ? 'bg-backgroundPrimary' : ''}`}>
            {/* CONTAINER */}
            <div className="flex flex-col items-center w-full container-padding container-padding-2">
                {/* TEXT CONTAINER */}
                <div className="flex flex-col justify-center gap-4 items-center w-full container-padding">
                    <h1 className={`${dark ? 'text-white' : 'text-black'} title-text`}>{t("Title")}</h1>
                    <h2 className="subtitle-text text-textTertiary">{t("Subtitle")}</h2>
                </div>
                <div className="card-container w-full h-full mt-12">
                    {teamItems().map((item) => (
                        <div key={item.id} className="relative flex flex-col h-[540px] rounded-3xl overflow-hidden group">
                            {/* Background Image */}
                            <Image src={item.image} alt={item.name} fill className="object-cover group-hover:brightness-75 transition-all duration-300" />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-3xl pointer-events-none" />

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 flex flex-col">
                                {/* Static Text (Always Visible) */}
                                <div className="absolute bottom-0 transition-all duration-300 -translate-y-6 group-hover:-translate-y-48">
                                    <h1 className="text-white font-bold text-lg">{item.name}</h1>
                                    <h2 className="text-[#D9D9D9] text-sm">{item.role}</h2>
                                </div>

                                {/* Hover Effect: Additional Information */}
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <p className="text-[#D9D9D9] mt-2 text-sm">{item.about || ""}</p>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 text-[#D9D9D9] font-medium mt-2">
                                        {item.portfolio}
                                        <ArrowRightIcon className="-rotate-45 size-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};