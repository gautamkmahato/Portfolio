"use client";

import Image from "next/image";
import vit from '../../../public/vit.png';


const experiences = [
  {
    company: "VIT University Vellore",
    role: "B.Tech (Electronics and communication)",
    logo: "/atomic-finance-logo.png", // Put the logo inside your public/ folder
    date: "2017 - 2021",
  }
];

export default function Education() { 
  return (
    <>
      <div className="">
        <section className="max-w-3xl mx-auto lg:px-6 md:px-12 px-6 pt-12">
          <h2 className="text-xl font-bold mb-4 text-neutral-800">Education</h2>
          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={vit}
                    alt={exp.company}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-neutral-700">{exp.company}</h3>
                    <p className="text-sm text-neutral-600">{exp.role}</p>
                  </div>
                </div>
                <div className="lg:text-sm text-xs  font-medium text-neutral-400 whitespace-nowrap">
                  {exp.date}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
