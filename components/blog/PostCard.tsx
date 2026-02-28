import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Tag from '../ui/Tag'
import type { PostMeta } from '../../lib/blog'
import { formatDate } from '../../lib/utils'

interface PostCardProps {
  post: PostMeta & { isPlaceholder?: boolean }
  isPreviewPlaceholder?: boolean
}

export default function PostCard({ post, isPreviewPlaceholder }: PostCardProps) {
  const isComingSoon = isPreviewPlaceholder

  return (
    <div className="bg-white rounded-xl border border-light-grey overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
      {/* Cover image or gold placeholder */}
      <div className="h-44 bg-navy relative overflow-hidden">
        {post.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="h-0.5 w-10 bg-gold/40 absolute" />
            <div className="h-10 w-0.5 bg-gold/40 absolute" />
            <span className="font-serif text-gold/30 text-5xl font-bold select-none">VO</span>
          </div>
        )}
        {isComingSoon && (
          <div className="absolute top-3 right-3 bg-gold/90 text-navy text-xs font-semibold px-3 py-1 rounded-full">
            Coming Soon
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <Tag key={tag} variant="gold">
              {tag}
            </Tag>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-serif text-navy font-bold text-base leading-snug mb-2 group-hover:text-navy/80 transition-colors flex-1">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-mid-grey text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-4 text-xs text-mid-grey">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readingTime}
            </span>
          </div>

          {!isComingSoon && (
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gold text-xs font-semibold hover:gap-2 transition-all"
            >
              Read <ArrowRight size={13} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
