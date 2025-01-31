
import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { DownloadIcon } from "@radix-ui/react-icons";

export const Hero = () => {
    const t = useTranslations("Hero");

    const links = {
        github: "https://github.com/ssaintx",
        linkedin: "https://linkedin.com/in/ssaintx",
        leetcode: "https://leetcode.com/u/ssaintx/"
    }

    return (
        <section
            className="flex flex-col h-screen"
            id="home"
        >
                <Image src="/images/hero-bg.png" alt="hero background" draggable="false" layout="fill" objectFit="cover" className='absolute w-full h-full object-cover -z-50' />
        </section>
    );
};