import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";

import { Year } from "./Year";
import { navbarItems } from "@/constants";

export const Menu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <TextAlignJustifyIcon className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="menu">
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                </SheetHeader>

                <ul className="flex flex-col items-center justify-center gap-2 h-full pb-12">
                    {navbarItems().map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="text-neutral-400 hover">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <SheetFooter>
                    <span className="text-sm text-center text-neutral-400"><Year /> RDG Company.</span>
                </SheetFooter>
            </SheetContent>
        </Sheet >
    );
};