import Image from "next/image";
import { ArrowBigRightDashIcon, Bookmark } from "lucide-react";
import Link from "next/link";
import avatar from "../../../public/gkm.jpg";
import auth from '../../../public/blogs/auth.jpg'
import dom from '../../../public/blogs/dom.jpg'
import cache from '../../../public/blogs/cache.jpg';
import rrf from '../../../public/blogs/rrf.jpg'
import step from '../../../public/blogs/step.png'
import cot from '../../../public/blogs/cot.jpg';



const cards = [
  {
    image: auth,
    tags: ["JavaScript", "Express", "Authentication", "API"],
    title: "User Authentication API with Express, JWT, Bcrypt, and MySQL",
    description: "Build secure login systems using JWT, Bcrypt, and MySQL in Express apps.",
    author: "Gautam Mahato",
    date: "Nov 4 2024",
    url: "",
},
  {
    image: dom,
    tags: ["JavaScript", "DOM"],
    title: "Understanding the DOM Tree: A Beginner's Guide to Understanding Web Page Structure",
    description: "Learn how the browser represents and interacts with your HTML document.",
    author: "Gautam Mahato",
    date: "Jan 27 2025",
    url: "",
},
{
  image: cache,
  tags: ["Performance", "Caching"],
  title: "Caching Techniques Explained: How to Speed Up Data Retrieval Efficiently",
  description: "Explore key caching strategies for faster and more efficient applications.",
  author: "Gautam Mahato",
  date: "Mar 6 2025",
  url: "",
},
{
    image: rrf,
    tags: ["LangChain", "Ranking", "Search"],
    title: "Reciprocal Rank Fusion (RRF)",
    description: "Improve ranking performance by combining multiple retrieval systems effectively.",
    author: "Gautam Mahato",
    date: "Apr 23 2025",
    url: "",
},
{
    image: step,
    tags: ["LangChain", "RAG", "Prompting"],
    title: "Step Back Prompting in RAG: How Thinking Bigger Leads to Smarter AI Answers",
    description: "Enhance LLM reasoning by using high-level abstraction prompts.",
    author: "Gautam Mahato",
    date: "Apr 24 2025",
    url: "",
},
{
    image: cot,
    tags: ["LangChain", "Prompt Engineering", "AI"],
    title: "Understanding Chain of Thought (CoT) Prompting: Teaching AI to Think Step-by-Step",
    description: "Leverage CoT prompting to improve logical reasoning in AI outputs.",
    author: "Gautam Mahato",
    date: "Apr 25 2025",
    url: "",
},

];


function Card({ image, tags, title, description, author, date, url }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-neutral-200 p-4 w-full transition hover:shadow-md">
      <div className="rounded-lg overflow-hidden w-full h-48 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-neutral-200 text-xs text-neutral-700 px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link href={url}>
        <h2 className="text-lg font-semibold mt-2">{title}</h2>
      </Link>
      <p className="text-sm text-neutral-500 mt-1 line-clamp-3">{description}</p>

      <div className="mt-4 flex items-center justify-between text-sm text-neutral-600">
        <div className="flex items-center gap-3">
          <Image
            src={avatar}
            alt={author}
            width={36}
            height={36}
            className="rounded-full object-cover w-9 h-9"
          />
          <div>
            <p className="text-black font-medium">{author}</p>
            <p className="text-xs">{date}</p>
          </div>
        </div>

        <Bookmark className="w-5 h-5 text-neutral-400 hover:text-black cursor-pointer" />
      </div>
    </div>
  );
} 


export default function BlogCard() {
  return (
    <>
      <section>
        <div className="w-full max-w-3xl mx-auto justify-center items-center py-12 lg:px-6 md:px-12 px-6">
          <div className="flex items-center justify-center my-8 text-center">
            <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-[#000000] to-transparent"></div>
            <div className="px-5 font-semibold whitespace-nowrap text-md text-neutral-100 bg-neutral-900 rounded-lg px-2 py-1">My Articles</div>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-[#000000] to-transparent"></div>
          </div>

          <h2 className="lg:text-4xl text-3xl font-bold text-center mb-4">
            Read My Latest Blog Posts
          </h2>
          <p className="text-center text-neutral-500 max-w-xl mx-auto mb-10">
            I regularly share insights, tutorials, and stories on web development, AI, UI/UX design, and tech trends. Explore some of my recent posts below.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Link
              href="/port/blog"
              className="mt-6 inline-flex items-center gap-2 border border-neutral-300 px-4 py-2 rounded-lg shadow-md shadow-neutral-200 hover:bg-neutral-800 hover:text-neutral-50 transition"
            >
              <span className="text-sm font-medium">Read All Articles</span>
              <ArrowBigRightDashIcon className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
