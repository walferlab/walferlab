import ClickSpark from "../../components/ClickSpark";
import Footer from "../../components/footer/page";
import Navbar from "../../components/navbar/page";
import ContentImage1 from "../../../public/web_devlop.jpg";
import ContentImage2 from "../../../public/contentImagesaas.jpg"
import { useNavigate } from "react-router-dom";

export default function Services() {
    const navigate = useNavigate();

    return(
        <>
        <Navbar />
        <ClickSpark>
            <div className="py-25">
                <p className="text-5xl text-gray-700 font-display font-bold text-center">Services</p>
                <p className="text-lg text-gray-500 font-satoshi font-medium text-center mb-25">We Provide quality products with creativity and experience</p>

                <div className="flex flex-col items-center justify-center space-y-20 mx-10">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        <img src={ContentImage1} alt="Web Devlop" className="rounded-2xl aspect-square h-100 object-cover object-center" />
                        <div className="max-w-180 space-y-2">
                            <p className="text-3xl text-gray-700 font-satoshi font-black">Web Development</p>
                            <p className="text-lg text-gray-600 font-satoshi font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sequi libero eius dolorem ullam, doloremque praesentium autem accusantium, cum illo fugiat fuga dolores. Facere labore, expedita officiis impedit distinctio et.</p>
                            <button className="text-white bg-gray-900 px-3 py-2 rounded-lg" onClick={()=>(navigate('/contact-us'))}>Send Request</button>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                        <div className="max-w-180 space-y-2">
                            <p className="text-3xl text-gray-700 font-satoshi font-black">SaaS Devlopment</p>
                            <p className="text-lg text-gray-600 font-satoshi font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sequi libero eius dolorem ullam, doloremque praesentium autem accusantium, cum illo fugiat fuga dolores. Facere labore, expedita officiis impedit distinctio et.</p>
                            <button className="text-white bg-gray-900 px-3 py-2 rounded-lg" onClick={()=>(navigate('/contact-us'))}>Send Request</button>
                        </div>
                        <img src={ContentImage2} alt="Web Devlop" className="rounded-2xl aspect-square h-100 object-cover object-center" />
                    </div>
                </div>
            </div>
        </ClickSpark>
        <Footer />
        </>
    )
}