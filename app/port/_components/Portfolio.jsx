import Image from "next/image";
import Link from "next/link";
import { MailIcon, Linkedin, Github, Twitter } from "lucide-react";
import gkm from "../../../public/gkm.jpg";

export default function Portfolio() {
  return (
    <>
      <section>
        <div className="md:pt-24">
          <div className="max-w-3xl mx-auto lg:px-6 md:px-12 px-6 flex flex-col lg:flex-row gap-6 items-center lg:items-start">
            
            {/* Image - first on mobile, last on desktop */}
            <div className="order-1 lg:order-2 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg shadow-neutral-400 shrink-0">
              <Image
                src={gkm}
                alt="gkm photo"
                className="object-cover w-full h-full shadow-xl shadow-amber-400"
              />
            </div>

            {/* Text - second on mobile, first on desktop */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="lg:text-5xl text-2xl font-bold text-neutral-800">Gautam Kumar Mahato</h1>
              <p className="text-sm max-w-xl text-neutral-500 mt-2">
                I’m a full stack developer focused on building SaaS products,
                crafting beautiful user experiences, and scaling ideas into
                impactful businesses.
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-2 mt-2">
                <MailIcon className="w-5 h-5" />
                <span className="underline break-all">gautamkumarmahato104@gmail.com</span>
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
                <Link
                  href="https://www.linkedin.com/in/gautam-kumar-mahato-1004g8991/"
                  target="_blank"
                  className="flex items-center gap-1 bg-neutral-800 text-white rounded-lg text-sm px-3 py-2 cursor-pointer shadow-md shadow-neutral-600 hover:bg-black transition"
                >
                  <Linkedin className="w-4 h-4" />
                  Linkedin
                </Link>
                <Link
                  href="https://github.com/gautamkmahato"
                  target="_blank"
                  className="flex items-center gap-1 bg-neutral-800 text-white rounded-lg text-sm px-3 py-2 cursor-pointer shadow-md shadow-neutral-600 hover:bg-black transition"
                >
                  <Github className="w-4 h-4" />
                  Github
                </Link>
                <Link
                  href="https://x.com/Gautamk104"
                  target="_blank"
                  className="flex items-center gap-1 bg-neutral-800 text-white rounded-lg text-sm px-3 py-2 cursor-pointer shadow-md shadow-neutral-600 hover:bg-black transition"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
