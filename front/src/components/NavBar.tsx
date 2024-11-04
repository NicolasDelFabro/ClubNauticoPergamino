import Menu from "@/components/Menu";
import Image from "next/image";
import logo from "../../public/assets/logo.png"


const NavBar = () => {
    return(
        <div className="flex justify-between items-center px-8 w-screen h-[7rem] bg-[#133E87]">
            <div>
                <Image src={logo} alt=""
                className="w-[120px] h-[150px]"/>
            </div>
            <div>
                <h1 className="text-3xl">
                    Club Náutico Pergamino
                </h1>
            </div>
            <div>
                <Menu />
            </div>
        </div>
    )
}

export default NavBar;