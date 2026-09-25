import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export default function Home() {
  const sortedPosts = allPosts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div>
      <section className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Neelemanet Blog</h1>
        <p className="font-serif text-xl text-slate-600 dark:text-slate-400">
          Notes on music, tech, and whatever I&apos;m building.
        </p>
      </section>
      <ul className="space-y-2">
        {sortedPosts.map((post) => (
          <li key={post._id}>
            <Link
              href={post.slug}
              className="group block -mx-4 px-4 py-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <time
                dateTime={post.date}
                className="text-sm text-slate-500 dark:text-slate-400"
              >
                {formatDate(post.date)}
              </time>
              <h2 className="text-lg font-semibold tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h2>
              {post.description && (
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  {post.description}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
