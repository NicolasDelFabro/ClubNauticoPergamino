import Link from "next/link";

const Footer = () => {
    return(
        <>
            <div className="flex justify-between items-center px-5 w-screen h-[7rem] bg-[#133E87]">
                <div className="flex flex-row">
                    <span className="text-xl pr-2">Intagram: </span> 
                    <Link href="">
                        <span className="text-lg hover:text-blue-600"> @clubnauticopergamino</span>
                    </Link>
                </div>
                <div className="flex flex-row">
                    <span className="text-xl pr-2">Gmail: </span>
                    <Link href="">
                        <span className="text-lg hover:text-blue-600"> clubnauticopergamino@gmail.com</span>
                    </Link>
                </div>
                <div className="flex flex-row">
                    <span className="text-xl pr-2">Whatsapp: </span>
                    <Link href="">
                        <span className="text-lg hover:text-blue-600"> 2477557832</span>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Footer;