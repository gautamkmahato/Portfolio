
import Link from "next/link";
import { BookText, Contact, Home, Sparkles } from "lucide-react";
import logo from "../../../public/assets/gautam-2.png";
import Image from "next/image";

export default function Navbar() {

    return (
        <>
            {/* Top Desktop Navbar */}
            <div className="hidden md:flex fixed top-1/2 left-4 -translate-y-1/2 z-50 font-[family-name:var(--font-geist-roboto)]">
                <nav className="flex flex-col gap-6 px-4 py-12 bg-neutral-900 text-white rounded-full shadow-md shadow-neutral-600">
                    <Link
                    href="/"
                    className="flex flex-col items-center gap-2 hover:text-gray-200 text-sm"
                    >
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                    </Link>

                    <Link
                    href="/port/project"
                    className="flex flex-col items-center gap-2 hover:text-gray-200 text-sm"
                    >
                    <Sparkles className="w-5 h-5" />
                    <span>Projects</span>
                    </Link>

                    <Link
                    href="/port//blog"
                    className="flex flex-col items-center gap-2 hover:text-gray-200 text-sm"
                    >
                    <BookText className="w-5 h-5" />
                    <span>Articles</span>
                    </Link>

                    <Link
                    href="/"
                    className="flex flex-col items-center gap-2 hover:text-gray-200 text-sm"
                    >
                    <Contact className="w-5 h-5" />
                    <span>Contact</span>
                    </Link>
                </nav>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden px-4 py-4">
                <Image src={logo} alt="gautam" className="w-full px-24 py-2" />
            </div>

            {/* Bottom Mobile Navbar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-neutral-300 z-50 px-4 py-2">
                <ul className="flex justify-between items-center">
                    <li>
                        <Link
                            href="/"
                            className="flex flex-col items-center text-xs text-neutral-700 hover:text-black"
                        >
                            <Home className="w-5 h-5" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/port/project"
                            className="flex flex-col items-center text-xs text-neutral-700 hover:text-black"
                        >
                            <Sparkles className="w-5 h-5" />
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/port/blog"
                            className="flex flex-col items-center text-xs text-neutral-700 hover:text-black"
                        >
                            <BookText className="w-5 h-5" />
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="flex flex-col items-center text-xs text-neutral-700 hover:text-black"
                        >
                            <Contact className="w-5 h-5" />
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
