'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdHomeFilled, MdWork } from "react-icons/md";
import { IoJournal } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

import "./nav.scss";

interface NavLinks {
    id: string;
    icon: React.ReactNode;
    href: string;
}

const navLinks: NavLinks[] = [
    { id: "home", icon: <MdHomeFilled />, href: "/" },
    { id: "works", icon: <MdWork />, href: "/works" },
    { id: "blogs", icon: <IoJournal />, href: "/blog" },
    { id: "contact", icon: <FaEnvelope />, href: "/contact" }
];

export default function Nav() {
    const pathname = usePathname();

    return (
        <header>
            <nav>
                <ul>
                    {navLinks.map((link, index) => {
                        // Verifica se o pathname corresponde exatamente ao href ou se começa com o href
                        const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                        return (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className={isActive ? "active" : ""}
                                >
                                    {link.icon}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
