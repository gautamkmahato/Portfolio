import Image from "next/image";
import Navbar from "./port/_components/Navbar";
import WorkExperience from "./port/_components/WorkExperience";
import Education from "./port/_components/Education";
import Skills from "./port/_components/Skills";
import LatestWork from "./port/_components/LatestWork";
import BlogCard from "./port/_components/BlogCard";
import Contact from "./port/_components/Contact";
import Portfolio from "./port/_components/Portfolio";

export default function Home() {
  return (
    <>
      <div className='font-[family-name:var(--font-geist-roboto)]'>
                      <Navbar />
                      <div>
                          <Portfolio />
                          <WorkExperience />
                          <Education />
                          <Skills />
                          <LatestWork />
                          <BlogCard />
                          <Contact />
                      </div>
                  </div>
    </>
  );
}
