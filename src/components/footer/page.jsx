export default function Footer() {
    const year = new Date().getFullYear();
    return(
        <div className="">
            <div className="bg-gray-900">
                <ul className="flex items-center justify-around p-4 gap-2 flex-col sm:flex-row">
                    <li><a className="text-sm text-gray-300 font-medium font-satoshi" href="/products">Products</a></li>
                    <li><a className="text-sm text-gray-300 font-medium font-satoshi" href="/services">Services</a></li>
                    <li><a className="text-sm text-gray-300 font-medium font-satoshi" href="/blogs">Blogs</a></li>
                    <li><a className="text-sm text-gray-300 font-medium font-satoshi" href="/projects">Projects</a></li>
                    <li><a className="text-sm text-gray-300 font-medium font-satoshi" href="/contact-us">Contact us</a></li>
                    <li><a className="text-sm text-gray-300 font-medium font-satoshi" href="/about-us">About us</a></li>
                </ul>
            <p className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gray-100 font-bold-sans font-black text-center mt-10">WALFER LAB.</p>
            </div>
            <div className="bg-gray-950">
                <p className="text-sm text-gray-500 font-medium font-satoshi text-center p-2">All Rights Reserved. &copy; Walfer Lab {year}</p>
            </div>
        </div>
    )
}