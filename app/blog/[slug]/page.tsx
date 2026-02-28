import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '../../../lib/blog'
import { formatDate } from '../../../lib/utils'
import Tag from '../../../components/ui/Tag'
import AuthorBlock from '../../../components/blog/AuthorBlock'
import PostCard from '../../../components/blog/PostCard'
import { Calendar, Clock } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      {/* Post hero */}
      <section className="bg-navy pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.meta.tags.map((tag) => (
              <Tag key={tag} variant="gold">{tag}</Tag>
            ))}
          </div>
          <h1 className="font-serif text-white text-3xl lg:text-4xl font-bold leading-tight mb-6">
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {formatDate(post.meta.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {post.meta.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* Post content */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose">
            <MDXRemote source={post.content} />
          </div>

          {/* Author block */}
          <div className="mt-12">
            <AuthorBlock />
          </div>
        </div>
      </section>

      {/* More posts */}
      {related.length > 0 && (
        <section className="bg-ivory py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-serif text-navy text-2xl font-bold mb-8">More Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
