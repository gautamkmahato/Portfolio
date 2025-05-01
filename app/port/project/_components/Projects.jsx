"use client";

import { Globe, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/app/data/projects";

export default function Projects() {
    return (
        <>
            <section className="max-w-3xl mx-auto lg:px-6 md:px-12 px-6">

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
            </section>
        </>
    );
}
