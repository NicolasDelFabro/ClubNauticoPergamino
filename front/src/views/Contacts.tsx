import Link from "next/link"
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


const Contacts = () => {
    return(
        <>
            <NavBar />
            <div className="h-screen bg-[#F3F3E0]">
            <h2>Si te intereso alguna de las actividades o necesitas consultar sobre algun tema no dudes en contactarte a:</h2>
                <div>
                    <ul>
                        <li>
                            <Link href="">
                                <p>Whatsapp: 24477-557832</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <p>Instagram: @clubnauticopergamino</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <p>Gmail: clubnauticopergamino@gmail.com</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Contacts;