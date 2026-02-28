'use client'

import { useState } from 'react'
import PostCard from '../../components/blog/PostCard'
import type { PostMeta } from '../../lib/blog'

const ALL_FILTER = 'All'
const filters = [ALL_FILTER, 'EU Programmes', 'Development Finance', 'PMO & Governance', 'Field Notes']

const placeholderPosts: PostMeta[] = [
  {
    slug: 'why-dfi-experience-matters-for-eu-programmes',
    title: 'What Managing DFI-Funded Infrastructure Teaches You About EU Programme Delivery',
    date: '2026-02-28',
    excerpt:
      'Five years securing and governing development finance investments in Africa taught me things about programme governance that no EU funding handbook ever mentions. Here is what transfers — and what doesn\'t.',
    tags: ['Development Finance', 'EU Programmes'],
    readingTime: '6 min read',
  },
]

interface Props {
  posts: PostMeta[]
}

export default function BlogIndexClient({ posts }: Props) {
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER)

  const displayPosts = posts.length > 0 ? posts : placeholderPosts

  const filtered =
    activeFilter === ALL_FILTER
      ? displayPosts
      : displayPosts.filter((p) => p.tags.includes(activeFilter))

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="font-serif text-white text-4xl lg:text-5xl font-bold mb-4">
            Thinking Out Loud
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            Writing on EU programme management, development finance delivery, governance
            frameworks, and the view from where African infrastructure experience meets European
            implementation.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-ivory border-b border-light-grey sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex gap-3 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs uppercase tracking-wider font-medium px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeFilter === filter
                  ? 'bg-navy text-white'
                  : 'text-mid-grey hover:text-navy border border-light-grey bg-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-serif text-navy text-xl mb-2">No posts in this category yet</p>
              <p className="text-mid-grey text-sm">Check back soon — more is on the way.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
