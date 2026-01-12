import React from "react";
import {Instagram, Mail, Send} from 'lucide-react';
import ClickSpark from "../../components/ClickSpark";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";

export default function ContactUs() {
  return (
    <>
      <Navbar />

      <ClickSpark>
        <div className="py-25">
          <p className="text-5xl text-gray-800 font-bold font-display text-center">Contact Us</p>
          <p className="text-lg text-gray-600 font-medium font-display text-center">Don't Worry! We will reach you as soon as possible</p>
          <div className="flex flex-col md:flex-row items-start justify-center gap-5 mt-10 mx-4">

            <div className="rounded-2xl p-8 bg-gray-900 w-full md:w-xl">
              <form action="">
                <p className="text-2xl text-gray-300 font-display font-medium text-center mb-5">Enter Your Details</p>

                <p className="text-sm text-gray-400 font-satoshi font-bold m-1">Your Full Name</p>
                <input type="text" placeholder="Eg. John Doe" className="border border-gray-400 font-satoshi font-medium bg-gray-400 outline-none rounded-lg p-2 w-full mb-4 text-black " required/>

                <p className="text-sm text-gray-400 font-satoshi font-bold m-1">Your E-mail</p>
                <input type="text" placeholder="Eg. johndoe@yahoo.com" className="border border-gray-400 font-satoshi font-medium bg-gray-400 outline-none rounded-lg p-2 w-full mb-4 text-black " required/>

                <p className="text-sm text-gray-400 font-satoshi font-bold m-1">Message</p>
                <textarea type="text" placeholder="Start Writing your message here..." className="border border-gray-400 font-satoshi font-medium bg-gray-400 outline-none rounded-lg p-2 w-full mb-4 text-black h-2xl overflow-y-scroll no-scrollbar" required />

                <button type="submit" className="rounded-md bg-amber-600 text-amber-50 p-2 font-bold font-satoshi w-full flex flex-row items-center justify-center gap-2 cursor-pointer"><Send />Send Message</button>

              </form>
            </div>

            <div className="rounded-xl space-y-4 p-6 bg-gray-900 w-full md:w-max">
              <p className="text-lg font-display font-medium text-gray-400">Other ways to reach us</p>
              <div className="rounded-md flex flex-col space-y-4">
                <a className="flex flex-row items-center gap-2 text-lg font-satoshi font-medium text-gray-300 cursor-pointer" href='https://instagram.com/walfer.lab/'>
                  <Instagram /> Instagram <span className="italic">"@walfer.lab"</span>
                </a>
                <a className="flex flex-row items-center gap-2 text-lg font-satoshi font-medium text-gray-300 cursor-pointer" href='mailto:walferlab@gmail.com'>
                  <Mail /> Email <span className="italic">"walferlab@gmail.com"</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ClickSpark>

      <Footer />
    </>
  );
}
