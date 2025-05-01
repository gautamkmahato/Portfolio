// components/HeroSection.tsx
import { BadgeCheck } from "lucide-react";

export default function HeroSection() {
  const tags = [
    "JavaScript",
    "TypeScript",
    "LangChain",
    "AI",
    "React",
    "Next.js",
    "Python",
    "OpenAI",
    "Express js",
    "Node.js",
    "APIs",
    "Prompt Engineering",
    "Chatbots",
    "LLMs",
    "Frontend",
    "Backend",
    "Coding Tips",
    "SaaS",
  ];

  return (
    <section className="text-center px-4 py-16 bg-gradient-to-b from-gray-300 to-gray-50">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-neutral-800 text-neutral-50 text-xs font-medium">
        <BadgeCheck className="w-4 h-4" />
        ARTICLES
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-800 leading-tight max-w-3xl mx-auto">
      Explore My Latest Insights
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-neutral-600 max-w-xl mx-auto text-sm sm:text-base">
      I regularly share insights, tutorials, and stories on web development, AI, UI/UX design, and tech trends. Explore some of my recent posts below.

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
