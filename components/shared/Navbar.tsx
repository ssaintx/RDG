
import Link from "next/link";
import Image from "next/image";

import { Menu } from "./Menu";
import { navbarItems } from "@/constants";
import { LanguageSwitcher } from "../functions/LanguageSwitcher";

// NAVBAR COMPONENT
export const Navbar = () => {
    return (
        <nav className="navbar">
            {/* LOGO */}
            <Image src="/images/logo.svg" alt="logo" width={72} height={72} priority className="ml-6 select-none" />

            {/* LINKS */}
            <ul className="hidden flex-row items-center justify-center gap-12 md:flex">
                {navbarItems().map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} className="text-[15px] hover">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* MOBILE RESPONSIVE MENU */}
            <div className="flex items-center justify-center gap-4">
                <LanguageSwitcher />
                <div className="flex md:hidden">
                    <Menu />
                </div>
            </div>
        </nav>
    );
};