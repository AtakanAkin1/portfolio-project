'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenu , HiX } from 'react-icons/hi';

const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

const Navigation = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ul className="hidden sm:flex gap-10 text-white orbitronBold fs-20">
                {menuItems.map((item) => (
                    <li
                        key={item.href}
                        className={`${
                            pathname === item.href ? 'text-[#EFF1C5]' : 'hover:text-[#EFF1C5]'
                        } cursor-pointer`}
                    >
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex items-center color-eff1c5">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={20} /> : <HiOutlineMenu size={20} />}
                </button>
            </div>

            {isOpen && (
                <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-[#3D3D3D] rounded-xl px-6 py-4 sm:hidden z-50">
                    <ul className="flex flex-col gap-3 items-center text-white orbitronBold fs-20">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`${
                                        pathname === item.href ? 'text-[#EFF1C5]' : 'hover:text-[#EFF1C5]'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navigation;
