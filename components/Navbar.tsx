"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
    AiOutlineArrowRight,
    AiOutlineClose,
    AiOutlineMenu,
} from "react-icons/ai";
import {Bars3Icon} from "@heroicons/react/24/outline";

const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Features",
        href: "/features",
    },
    {
        name: "About Us",
        href: "/about",
    },
    {
        name: "Products",
        href: "/products",
    },
    {
        name: "Contact Us",
        href: "/contact",
    },
    {
        name: "Demo",
        href: "/demo",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
];

export function Navbar() {
    const [nav, setNav] = useState(false);
    const toggleNav = () => setNav(!nav);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    return (
        <nav className="flex items-center justify-between p-6 lg:px-8 z-50" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <Image
                        src="/images/logo.png"
                        alt="ProximaAI Logo"
                        width={150}
                        height={50}
                    />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {links.map((item) => (
                    <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <button className="border border-primary rounded-lg py-2 px-4 flex items-center justify-center space-x-3 hover:bg-primary hover:text-white">
                    <Link href="https://app.proximaai.co/">Get Started</Link>
                    <AiOutlineArrowRight className="w-4 h-4 text-primary hover:text-white ml-2" />
                </button>
            </div>
        </nav>
    );
}
