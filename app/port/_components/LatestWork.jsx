"use client";

import { Globe, Github, ArrowBigRightDashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Email Craft",
        period: "February 2025",
        description: "EmailCraft is an AI-powered email template generator and automation service for seamless email campaigns.",
        image: "/gifs/email.gif",
        tags: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Langchain",
            "TailwindCSS",
            "Stripe",
            "Clerk",
        ],
        links: [
            { label: "Website", icon: Globe, url: "https://email-vert-ten.vercel.app/" },
            { label: "Source", icon: Github, url: "/" },
        ],
        color: "bg-amber-600",
    },
    {
        title: "VanniWave AI",
        period: "January 2025",
        description: "VaaniWave converts text into natural speech with multiple voices, enhancing accessibility and content creation.",
        image: "/gifs/vaani.gif",
        tags: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Stripe",
            "Shadcn UI",
            "Magic UI",
        ],
        links: [
            { label: "Website", icon: Globe, url: "https://vaani-wave.vercel.app/" },
            { label: "Source", icon: Github, url: "/" },
        ],
        color: "bg-blue-700",
    },
    {
        title: "Weaver AI",
        period: "November 2024",
        description: "WeaverAI provides AI-powered APIs for businesses, streamlining operations and enhancing automation capabilities.",
        image: "/gifs/weaver.gif",
        tags: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Stripe",
            "Shadcn UI",
            "Magic UI",
        ],
        links: [
            { label: "Website", icon: Globe, url: "https://weaver-app.vercel.app/" },
            { label: "Source", icon: Github, url: "/" },
        ],
        color: "bg-orange-700",
    },
    {
        title: "Sahaj Nyay",
        period: "September 2024",
        description: "Professional law firm website design offering sleek, user-friendly, and responsive layouts",
        image: "/gifs/sahaj.gif",
        tags: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Stripe",
            "Shadcn UI",
            "Magic UI",
        ],
        links: [
            { label: "Website", icon: Globe, url: "https://www.sahajnyay.in/" },
            { label: "Source", icon: Github, url: "/" },
        ],
        color: "bg-gray-700",
    },
];

export default function LatestWork() {
    return (
        <>
            <section className="max-w-3xl mx-auto lg:px-6 md:px-12 px-6 py-16">
                <div className="flex items-center justify-center my-8 text-center">
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-[#000000] to-transparent"></div>
                    <div className="px-5 font-semibold whitespace-nowrap text-md text-neutral-100 bg-neutral-900 rounded-lg px-2 py-1">My Projects</div>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-[#000000] to-transparent"></div>
                </div>

                <h2 className="lg:text-4xl text-3xl font-bold text-center mb-4">
                    Check out my latest work
                </h2>
                <p className="text-center text-neutral-500 max-w-xl mx-auto mb-10">
                    I've worked on a variety of projects, from simple websites to complex
                    web applications. Here are a few of my favorites.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-md"
                        >
                            <div className={project.color}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    width={700}
                                    height={400}
                                    className="w-full object-cover p-4 rounded-t-xl"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-neutral-800">{project.title}</h3>
                                <p className="text-sm text-gray-600 font-medium mb-2 mt-2">{project.period}</p>
                                <p className="text-neutral-500 text-sm mb-4">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 border border-neutral-200 bg-neutral-100 text-neutral-700 font-semibold rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    {project.links.map((link, i) => (
                                        <Link
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            className="inline-flex items-center gap-1 bg-neutral-900 text-neutral-100 px-3 py-2 text-sm border rounded-md hover:bg-neutral-100 hover:text-black transition"
                                        >
                                            <link.icon className="w-4 h-4" />
                                            <span className="leading-none">{link.label}</span>
                                        </Link>

                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6">
  <Link
    href="/port/project"
    className="mt-6 inline-flex items-center gap-2 border border-neutral-300 px-4 py-2 rounded-lg shadow-md shadow-neutral-200 hover:bg-neutral-800 hover:text-neutral-50 transition"
  >
    <span className="text-sm font-medium">View All Projects</span>
    <ArrowBigRightDashIcon className="w-5 h-5" />
  </Link>
</div>

            </section>
        </>
    );
}
