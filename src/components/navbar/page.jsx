import React, {useState, useEffect} from "react";
import {X, TextAlignJustify} from 'lucide-react';

export default function Navbar() {

    const [menu, setmenu] = useState(false);
    const [showLinks, setLinks] = useState('hidden');

    const showMenu = () => {
        setmenu(!menu);
    };

    useEffect(() => {
        setLinks(menu ? 'flex' : 'hidden');
    }, [menu]);

  return (
    <div className="fixed flex flex-col w-screen max-h-screen top-0 bg-[#ffffff] z-9999">
      <div className="flex items-center justify-between mt-1 mx-2 p-2 border-b-3 border-b-gray-400">
        <div className="text-2xl font-display font-semibold">WALFER LAB.</div>
        <div onClick={showMenu} className="cursor-pointer transition-all transition-discrete ease-in-out">
          {menu ? <X /> : <TextAlignJustify />}
        </div>
      </div>
      <div className={`flex flex-col items-center transition-all transition-discrete ease-in-out ${showLinks} mx-2 h-full`}>
        
        <a className="w-full text-center text-gray-900 text-xl sm:text-2xl font-display font-medium cursor-pointer border-b-2 p-4 border-gray-300 hover:underline" href="/">Dashboard</a>
        <a className="w-full text-center text-gray-900 text-xl sm:text-2xl font-display font-medium cursor-pointer border-b-2 p-4 border-gray-300 hover:underline" href="/projects">Projects</a>
        <a className="w-full text-center text-gray-900 text-xl sm:text-2xl font-display font-medium cursor-pointer border-b-2 p-4 border-gray-300 hover:underline" href="/services">Services</a>
        <a className="w-full text-center text-gray-900 text-xl sm:text-2xl font-display font-medium cursor-pointer border-b-2 p-4 border-gray-300 hover:underline" href="/blogs">Blogs</a>
        <a className="w-full text-center text-gray-900 text-xl sm:text-2xl font-display font-medium cursor-pointer border-b-2 p-4 border-gray-300 hover:underline" href="/about-us">About Us</a>
        <a className="w-full text-center text-gray-900 text-xl sm:text-2xl font-display font-medium cursor-pointer border-b-2 p-4 border-gray-300 hover:underline" href="/contact-us">Contact Us</a>
        
      </div>
    </div>
  );
}
