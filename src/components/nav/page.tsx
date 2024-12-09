'use client';

import { Link } from '@/i18n/routing';
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
                        // Remove o prefixo de idioma da URL
                        const pathWithoutLang = pathname.replace(/^\/(en|pt-br)/, '') || '/';
                        // Verifica se o caminho extraído corresponde ao href do link
                        const isActive = pathWithoutLang === link.href || pathWithoutLang.startsWith(link.href + '/');

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
