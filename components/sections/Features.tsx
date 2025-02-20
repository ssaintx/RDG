import Image from "next/image";

import { featuresItems } from "@/constants";
import { useTranslations } from "next-intl";

export const Features = () => {
    const t = useTranslations("Features");

    return (
        <section
            className="features"
            id="features"
        >
            {/* CONTAINER */}
            <div className="flex flex-col items-center w-full container-padding container-padding-2 lg:py-12">
                {/* TITLE */}
                <h1 className="text-black title-text">{t("Title")}</h1>
                {/* CARD CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-3 gap-4 mt-8">
                    {featuresItems().map((item, i) => (
                        // CARD
                        <div
                            key={item.id}
                            className={`card shadow-md !bg-[#FAFAFA]
                                ${i === 1 ? 'md:col-start-1 md:row-start-2' : ''} 
                                ${i === 2 ? 'md:col-start-1 md:row-start-3' : ''} 
                                ${i === 3 ? 'md:col-start-2 md:row-start-1' : ''} 
                                ${i === 4 ? 'md:row-span-2 md:col-start-2 md:row-start-2' : ''}`}
                        >
                            {/* ICON AND TITLE CONTAINER */}
                            <div className="flex flex-row items-center gap-4">
                                <Image src={item.icon} alt={item.title} width={40} height={40} />
                                <h1 className="text-black text-[20px] font-bold">{item.title}</h1>
                            </div>
                            {/* DESCRIPTION */}
                            <p className="text-[14px] text-textTertiary mt-4">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};