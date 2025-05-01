

import Navbar from './_components/Navbar';
import WorkExperience from './_components/WorkExperience';
import Education from './_components/Education';
import Skills from './_components/Skills';
import LatestWork from './_components/LatestWork';
import BlogCard from './_components/BlogCard';
import Contact from './_components/Contact';
import Portfolio from './_components/Portfolio';


export default function page() {
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
    )
}
