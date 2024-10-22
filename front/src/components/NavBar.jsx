import React from "react";
import Image from "next/image"
import Logo from "../public/Logo.png"
import MenuDesplegable from "./MenuDesplagable";
import Link from "next/link"


export const NavBar = () => {
    return(
        <div className="flex justify-between items-center bg-blue-900">
            <div>
            <Link href=""><Image src={Logo} alt='Logo del club' className="w-12 h-13 ml-4 mt-2 mb-2"></Image></Link>
            </div>
            <div className="text-4xl">
                <h1>Club Náutico Pergamino</h1>
                </div>
            <div className="mr-4">
                <MenuDesplegable />
            </div>
        </div>
    )
}