import ClickSpark from "../../components/ClickSpark";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";

export default function Blogs() {
    return(
        <>
        <Navbar />
        <ClickSpark>
            <div className="py-25">
                <p className="text-5xl font-display font-black text-center text-gray-700">Blogs</p>
            </div>
        </ClickSpark>
        <Footer />
        </>
    )
}