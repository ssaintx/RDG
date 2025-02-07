
import Link from "next/link";
import Image from "next/image";

import { Menu } from "./Menu";
import { LanguageSwitcher } from "../functions/LanguageSwitcher";
import { NavMenu } from "./NavigationMenu";

// NAVBAR COMPONENT
export const Navbar = () => {
    return (
        <nav className="navbar">
            {/* LOGO */}
            <Image src="/images/logo.svg" alt="logo" width={72} height={72} priority className="select-none" />

            {/* LINKS */}
            <div className="hidden items-center justify-center md:flex">
                <NavMenu />
            </div>
            {/* MOBILE RESPONSIVE MENU */}
            <div className="flex items-center justify-center gap-4">
                <LanguageSwitcher />
                <div className="flex md:hidden">
                    {/* <Menu /> */}
                </div>
            </div>
        </nav>
    );
};