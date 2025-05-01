// components/HeroSection.tsx
import { BadgeCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="text-center px-4 py-16 bg-gradient-to-b from-gray-300 to-gray-50">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
        <BadgeCheck className="w-4 h-4" />
        AI Developer
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-800 leading-tight max-w-3xl mx-auto">
        Insights for Building a <br /> Sustainable Future
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-neutral-600 max-w-xl mx-auto text-sm sm:text-base">
        Introducing the Agrisuit Due Diligence system.<br />
        Your partner for compliance with EU Deforestation Regulation.
      </p>

      {/* Tags / Group Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {Array(6).fill(0).map((_, i) => (
          <div
            key={i}
            className="px-4 py-2 bg-neutral-50 border border-gray-200 rounded-md text-sm text-neutral-700 shadow-sm"
          >
            Team Group
          </div>
        ))}
      </div>
    </section>
  );
}
