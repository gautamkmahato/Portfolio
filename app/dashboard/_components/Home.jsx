

import { RocketIcon, YoutubeIcon, LinkedinIcon, GithubIcon, SunIcon, ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import chai from '../../../public/chai.png'
import chai_img from '../../../public/chai-2.png'
import Widget from "./Widget";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-orange-50 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <Image src={chai} alt="ChaiDocs Logo" width={32} height={32} />
          <span className="text-2xl font-bold text-black">ChaiDocs</span>
        </div>
        
        <div className="flex items-center space-x-6 text-gray-600 mr-[40px]">
        <Widget />
          <Link href="#"><YoutubeIcon className="w-6 h-6 hover:text-black" /></Link>
          <Link href="#"><LinkedinIcon className="w-6 h-6 hover:text-black" /></Link>
          <Link href="#"><GithubIcon className="w-6 h-6 hover:text-black" /></Link>
          <Link href="#"><SunIcon className="w-6 h-6 hover:text-black" /></Link>
          
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col md:flex-row items-center justify-between px-8 md:px-36 py-12">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
            Docs You’ll <br /> Actually Read
          </h1>
          <p className="text-gray-600 text-lg">
            Next-gen docs that builds reading habits into your workflow.
          </p>
          <div className="flex items-center space-x-6">
            <button className="flex items-center bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
              Start Learning
              <RocketIcon className="w-5 h-5 ml-2" />
            </button>
            <Link href="#" className="text-gray-800 font-medium hover:underline flex items-center">
              Watch Tutorials
              <span className="ml-1"><ArrowBigRightDash /></span>
            </Link>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="mt-12 md:mt-0">
          <Image src={chai_img} alt="Glass of Chai" width={500} height={500} />
        </div>
      </section>
    </main>
  );
}
