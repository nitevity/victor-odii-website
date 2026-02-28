import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
  coverImage?: string
}

export interface Post {
  meta: PostMeta
  content: string
}

// Runs at build time via Next.js static generation — fs is available here.
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true })
  }

  const filenames = fs.readdirSync(contentDirectory)

  const posts = filenames
    .filter((name) => name.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace('.mdx', '')
      const filePath = path.join(contentDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title ?? 'Untitled',
        date: data.date ?? new Date().toISOString().slice(0, 10),
        excerpt: data.excerpt ?? '',
        tags: data.tags ?? [],
        readingTime: data.readingTime ?? '5 min read',
        coverImage: data.coverImage,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(contentDirectory, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    meta: {
      slug,
      title: data.title ?? 'Untitled',
      date: data.date ?? new Date().toISOString().slice(0, 10),
      excerpt: data.excerpt ?? '',
      tags: data.tags ?? [],
      readingTime: data.readingTime ?? '5 min read',
      coverImage: data.coverImage,
    },
    content,
  }
}

export { formatDate } from './utils'
