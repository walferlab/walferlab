import React from "react";
import ClickSpark from "../../components/ClickSpark";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import LogoLoopApp from "../../components/ui/logoloop";
import HeroImage from "../../../public/heroimage-3.jpg";
import Content1 from "../../../public/content-1.jpg";

export default function Dashboard() {

  return (
    <>
      <Navbar />
      <ClickSpark>
        <div className="relative flex flex-col overflow-hidden">

          <div className="flex h-screen w-screen items-center justify-center">
            {/* IMAGE */}
            <div className="h-full overflow-hidden">
              <img
                src={HeroImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="shrink-0 w-16 md:w-1/2 h-full flex items-center justify-center bg-transparent">
              <div className="flex flex-col space-y-2 mr-3">

                <p className="text-6xl md:text-7xl lg:text-8xl font-black font-bold-sans tracking-widest leading-[0.85] [writing-mode:vertical-rl] [text-orientation:upright] md:[writing-mode:horizontal-tb] md:[text-orientation:mixed]">
                  DESIGN
                </p>

                <p className="hidden md:block text-md font-satoshi font-normal">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maiores repellat nostrum nam exercitationem nisi harum.
                  Voluptatem eaque unde earum soluta modi quidem, ab dignissimos
                  minima corporis laudantium, labore tempore architecto.
                </p>
              </div>
            </div>
          </div>
          <LogoLoopApp />

          {/* WHY CHOOSE US */}
          <section className="mx-auto max-w-7xl px-6 py-24">
            <h2 className="text-center text-4xl sm:text-5xl font-bold text-gray-800 mb-16">
              Why Choose Us
            </h2>

            {/* BLOCK 1 */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-24">
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-5xl font-bold text-gray-800">
                  Dedication
                </h3>
                <p className="text-lg text-gray-600">
                  We stay committed from idea to launch, ensuring quality,
                  consistency, and long-term reliability.
                </p>
              </div>

              <div className="md:w-1/2 h-96 overflow-hidden rounded-xl">
                <img
                  src={Content1}
                  alt="Team dedication"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* BLOCK 2 */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 h-96 overflow-hidden rounded-xl">
                <img
                  src={Content1}
                  alt="Creative process"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-5xl font-bold text-gray-800">
                  Precision
                </h3>
                <p className="text-lg text-gray-600">
                  Every pixel, interaction, and animation is designed with
                  purpose and attention to detail.
                </p>
              </div>
            </div>
          </section>
          </div>
          <Footer />
      </ClickSpark>
    </>
  );
}
