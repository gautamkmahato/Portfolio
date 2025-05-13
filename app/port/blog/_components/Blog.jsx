import Image from "next/image";
import { Bookmark } from "lucide-react";
import avatar from "../../../../public/gkm.jpg";
import blogs from '../../../data/blogs'
import Link from "next/link";



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

      <Link href={url} target="_blank">
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


export default function Blog() {
  return (
    <>
      <section id="articles">
        <div className="w-full max-w-3xl mx-auto justify-center items-center py-12 px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {blogs.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
