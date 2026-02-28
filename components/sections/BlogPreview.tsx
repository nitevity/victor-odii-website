import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllPosts } from '../../lib/blog'
import PostCard from '../blog/PostCard'

const placeholderPosts = [
  {
    slug: 'coming-soon-1',
    title: 'What Managing DFI-Funded Infrastructure Teaches You About EU Programme Delivery',
    date: '2026-02-28',
    excerpt:
      'Five years securing and governing development finance investments in Africa taught me things about programme governance that no EU funding handbook ever mentions.',
    tags: ['EU Programmes', 'Development Finance'],
    readingTime: '6 min read',
    coverImage: undefined,
    isPlaceholder: true,
  },
  {
    slug: 'coming-soon-2',
    title: 'PMO Frameworks That Actually Work in Multi-Stakeholder Environments',
    date: '2026-03-10',
    excerpt:
      'Governance frameworks built in theory rarely survive contact with real stakeholder dynamics. Here is what actually holds together across 15+ concurrent workstreams.',
    tags: ['PMO & Governance'],
    readingTime: '5 min read',
    coverImage: undefined,
    isPlaceholder: true,
  },
  {
    slug: 'coming-soon-3',
    title: 'The EU Programme Management Landscape: An Outsider\u2019s Systematic Entry',
    date: '2026-03-20',
    excerpt:
      'Moving from African DFI consulting to EU programme implementing organisations is not just a geography change. Here is how I am approaching the transition methodically.',
    tags: ['Field Notes'],
    readingTime: '4 min read',
    coverImage: undefined,
    isPlaceholder: true,
  },
]

export default function BlogPreview() {
  const allPosts = getAllPosts()
  const posts = allPosts.slice(0, 3)
  const showPlaceholders = posts.length === 0

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-serif text-navy text-3xl lg:text-4xl font-bold">
              Thinking Out Loud
            </h2>
            <p className="text-mid-grey mt-2 text-sm">
              Writing on programme management, development finance, and governance
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all"
          >
            See All Posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showPlaceholders
            ? placeholderPosts.map((post) => (
                <PostCard key={post.slug} post={post} isPreviewPlaceholder />
              ))
            : posts.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>
      </div>
    </section>
  )
}
