// components/HeroSection.tsx
import { BadgeCheck } from "lucide-react";

export default function HeroSection() {
  const tags = ["Javascript", "Node Js", "Express Js", "React Js", "Next Js", "TypeScript", "Python", "Langchain", "AI", "Java", "Spring boot", "microservices"]
  return (
    <section className="text-center px-4 py-16 bg-gradient-to-b from-gray-300 to-gray-50">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-neutral-800 text-neutral-50 text-xs font-medium">
        <BadgeCheck className="w-4 h-4" />
        PROJECTS
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-800 leading-tight max-w-3xl mx-auto">
      Check out my latest work
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-neutral-600 max-w-xl mx-auto text-sm sm:text-base">
      I've worked on a variety of projects, from simple websites to complex
      web applications. Here are a few of my favorites.
      </p>

      {/* Tags / Group Buttons */}
<div className="flex flex-wrap max-w-3xl justify-center gap-2 mt-8 mx-auto">
  {tags.map((tag, i) => (
    <div
      key={i}
      className="px-4 py-2 bg-neutral-50 border border-gray-200 rounded-md text-sm text-neutral-700 shadow-sm"
    >
      {tag}
    </div>
  ))}
</div>

    </section>
  );
}
