import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import { formatDate } from "@/lib/utils"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert font-serif prose-lg max-w-none">
      <header className="not-prose font-sans mb-10">
        <time
          dateTime={post.date}
          className="text-sm text-slate-500 dark:text-slate-400"
        >
          {formatDate(post.date)}
        </time>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">{post.title}</h1>
        {post.description && (
          <p className="mt-3 font-serif text-xl text-slate-600 dark:text-slate-400">
            {post.description}
          </p>
        )}
      </header>
      <Mdx code={post.body.code} />
    </article>
  )
}
