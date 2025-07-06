"use client"
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname();
    return (
        <ul className="flex gap-10 text-white orbitronBold fs-20">
            <li className={`${pathname === '/' ? 'color-eff1c5' : 'hover:text-[#EFF1C5]'} cursor-pointer`}>
                <Link href="/">Home</Link>
            </li>
            <li className={`${pathname === '/projects' ? 'color-eff1c5' : 'hover:text-[#EFF1C5]'} cursor-pointer`}>
                <Link href="/projects">Projects</Link>
            </li>
            <li className={`${pathname === '/about' ? 'color-eff1c5' : 'hover:text-[#EFF1C5]'} cursor-pointer`}>
                <Link href="/about">About</Link>
            </li>
            <li className={`${pathname === '/contact' ? 'color-eff1c5' : 'hover:text-[#EFF1C5]'} cursor-pointer`}>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default Navigation;
