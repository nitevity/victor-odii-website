import type { Metadata } from 'next'
import { getAllPosts } from '../../lib/blog'
import BlogIndexClient from './BlogIndexClient'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function BlogPage() {
  const posts = getAllPosts()
  return <BlogIndexClient posts={posts} />
}
