import Image from "next/image"
import foto1 from "../../public/assets/foto1.jpg";
import foto2 from "../../public/assets/foto2.jpg";

const Landing = () => {
    return(
        <div className="w-screen h-screen">
            <div className="flex justify-center">
                <div>
                    <Image/>
                </div>
            </div>
        </div>
    )
}


export default Landing;