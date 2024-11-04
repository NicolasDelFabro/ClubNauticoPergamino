'use client'

import {useState} from "react";
import Link from "next/link";

const Menu = () => {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="relative inline-block text-left">
        <button
            className="bg-[#CBDCEB] text-black font-semibold py-2 px-4 rounded inline-flex items-center hover:text-gray-800"
            onClick={toggleMenu}
        >
            {isOpen ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            )}
        </button>

        {isOpen && (
            <div className="absolute right-0 mt-1 w-60 bg-[#CBDCEB] rounded-xl flex items-center justify-center">
                <ul className="text-center w-full">
                    <li>
                        <Link href="/actividades">
                            <p className="text-lg text-center hover:bg-[#608BC1] py-2 hover: rounded-t-xl">
                                Actividades
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contactos">
                            <p className="text-lg text-center hover:bg-[#608BC1] py-2">
                                Contactos
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/historia">
                            <p className="text-lg text-center hover:bg-[#608BC1] py-2">
                                Historia
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/eventos">
                            <p className="text-lg text-center hover:bg-[#608BC1] py-2 hover: rounded-b-xl">
                                Eventos
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        )}
    </div>
);
};

export default Menu;