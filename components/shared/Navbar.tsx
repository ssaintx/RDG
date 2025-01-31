
import Link from "next/link";
import Image from "next/image";

import { Menu } from "./Menu";
import { navbarItems } from "@/constants";
import { LanguageSwitcher } from "../functions/LanguageSwitcher";

export const Navbar = () => {
    return (
        <nav className="navbar" aria-hidden="false">
            <Image src="/images/logo.svg" alt="logo" width={72} height={72} priority className="ml-6 select-none" />
            <ul className="hidden flex-row items-center justify-center gap-8 sm:flex">
                {navbarItems().map((item) => (
                    <li key={item.href}>
                        <Link href={item.href}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-center gap-2">
                <LanguageSwitcher />
                <div className="flex p-2 glassmorphism border border-neutral-800 rounded-md sm:hidden">
                    <Menu />
                </div>
            </div>
        </nav>
    );
};