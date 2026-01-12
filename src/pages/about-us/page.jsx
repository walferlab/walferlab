import ClickSpark from "../../components/ClickSpark";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import Walfer from "../../../public/walfer.jpg";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <ClickSpark>
        <main className="relative py-24 px-4 sm:px-8">
          {/* Page Container */}
          <div className="mx-auto max-w-5xl">

            {/* Title */}
            <h1 className="text-center text-5xl sm:text-6xl font-display font-semibold text-gray-800 tracking-tight">
              About Us
            </h1>

            <div className="mt-12 space-y-16">

              {/* About Card */}
              <section className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md p-8 sm:p-12 shadow-sm hover:shadow-md transition">
                <p className="text-lg leading-relaxed text-gray-800 font-satoshi space-y-4">
                  <span className="block">
                    <strong>Walfer Lab</strong> is a technology-driven company
                    focused on building digital products that solve real problems.
                    We design, develop, and deliver high-quality solutions across
                    SaaS platforms, websites, mobile applications, and
                    programming-driven systems.
                  </span>

                  <span className="block">
                    Founded with a mindset of experimentation and continuous
                    learning, Walfer Lab believes that great products are built
                    through iteration, precision, and a deep understanding of
                    both technology and people.
                  </span>

                  <span className="block">
                    We work at the intersection of design, engineering, and
                    innovation—helping individuals, startups, and businesses
                    transform ideas into reliable digital experiences.
                  </span>

                  <span className="block italic font-semibold text-gray-900">
                    We don’t just build software — we build systems, tools, and
                    experiences that grow with you.
                  </span>
                </p>
              </section>

              {/* Divider */}
              <div className="h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent" />

              {/* Developer Section */}
              <section className="text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl font-black font-satoshi text-gray-700">
                  Developer
                </h2>

                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src={Walfer}
                      alt="Rafort Walfer"
                      className="w-48 h-48 rounded-full object-cover border-4 border-cyan-400 p-1 shadow-lg"
                    />
                    <span className="absolute inset-0 rounded-full ring-2 ring-cyan-300/40 animate-pulse" />
                  </div>
                </div>

                <p className="text-xl font-display font-semibold text-cyan-800">
                  Rafort Walfer
                </p>
              </section>

              {/* Founder Story */}
              <section className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md p-8 sm:p-12 shadow-sm">
                <p className="text-lg leading-relaxed text-gray-800 font-satoshi space-y-4">
                  <span className="block">
                    Walfer Lab was founded in a dorm room by{" "}
                    <strong>Rafort Walfer</strong> in December 2025.
                  </span>

                  <span className="block">
                    He began building companies at the age of 16. His first
                    venture, <strong>Seaup</strong>, failed — and it was only the
                    beginning.
                  </span>

                  <span className="block">
                    Each failure became a lesson, shaping his mindset and
                    strengthening his resolve. Passion and dedication kept
                    pushing him forward.
                  </span>

                  <span className="block font-semibold text-gray-900">
                    Those lessons ultimately led to the creation of Walfer Lab —
                    stronger, clearer, and built for the future.
                  </span>
                </p>
              </section>

            </div>
          </div>
        </main>
      </ClickSpark>

      <Footer />
    </>
  );
}