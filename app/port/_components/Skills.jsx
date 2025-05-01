"use client";

import {
  Code,
  Terminal,
  Globe,
  Database,
  Layers,
  Boxes,
  Cog,
  Cloud,
  Rocket,
  Brain,
  Atom,
} from "lucide-react";

const skills = [
  { name: "React", icon: <Atom size={16} /> },
  { name: "Next.js", icon: <Globe size={16} /> },
  { name: "Typescript", icon: <Code size={16} /> },
  { name: "Node.js", icon: <Terminal size={16} /> },
  { name: "Python", icon: <Brain size={16} /> },
  { name: "Go", icon: <Rocket size={16} /> },
  { name: "Postgres", icon: <Database size={16} /> },
  { name: "Docker", icon: <Boxes size={16} /> },
  { name: "Kubernetes", icon: <Cloud size={16} /> },
  { name: "Java", icon: <Cog size={16} /> },
  { name: "C++", icon: <Layers size={16} /> },
];

export default function Skills() {
  return (
    <section className="max-w-3xl mx-auto lg:px-6 md:px-12 px-6 py-12">
      <h2 className="text-xl font-bold text-neutral-800 mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-2 bg-neutral-800 text-white px-4 py-2 rounded-md text-sm"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
