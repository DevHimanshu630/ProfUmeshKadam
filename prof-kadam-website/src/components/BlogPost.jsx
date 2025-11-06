import { useEffect, useState } from 'react'
import { getApiUrl } from '../config/api'

const BlogPost = ({ slug, navigate }) => {
  const [post, setPost] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true
    setError('')
    setPost(null)
    fetch(getApiUrl(`api/posts/${slug}`))
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (mounted) setPost(data)
      })
      .catch(() => {
        if (mounted) setError('Post not found')
      })
    return () => {
      mounted = false
    }
  }, [slug])

  return (
    <section className="pt-18 sm:pt-28 lg:mt-16 lg:pt-32 pb-16 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl rounded-2xl border border-primary-100 bg-white shadow-md p-6 sm:p-8">
          <button onClick={() => navigate && navigate('/blog')} className="text-sm text-primary-700 hover:text-primary-800 font-semibold">← Back to Blog</button>
          {error ? (
            <h2 className="mt-4 text-xl font-bold text-primary-700">{error}</h2>
          ) : !post ? (
            <p className="mt-4 text-secondary-600">Loading…</p>
          ) : (
            <>
              <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-primary-700">{post.title}</h1>
              <div className="mt-1 text-xs sm:text-sm text-secondary-500">
                <time>{new Date(post.date).toLocaleDateString()}</time>
                {post.tags?.length ? <span className="ml-2">· {post.tags.join(', ')}</span> : null}
              </div>
              <div className="prose max-w-none mt-4 text-secondary-800 whitespace-pre-wrap">
                {post.content}
              </div>
            </>
          )}
        </article>
      </div>
    </section>
  )
}

export default BlogPost


