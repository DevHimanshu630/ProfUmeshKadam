import { useEffect, useMemo, useState } from 'react'

const Blog = ({ id = 'blog', navigate }) => {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('All')

  const [postsFromApi, setPostsFromApi] = useState([])
  useEffect(() => {
    let mounted = true
    fetch('/api/posts')
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(data => { if (mounted) setPostsFromApi(Array.isArray(data) ? data : []) })
      .catch(() => { if (mounted) setPostsFromApi([]) })
    return () => { mounted = false }
  }, [])

  const allTags = useMemo(() => {
    const set = new Set()
    postsFromApi.forEach(p => (p.tags || []).forEach(t => set.add(t)))
    return ['All', ...Array.from(set).sort()]
  }, [postsFromApi])

  const posts = useMemo(() => {
    const sorted = [...postsFromApi].sort((a,b)=> new Date(b.date) - new Date(a.date))
    return sorted.filter(p => {
      const matchesTag = activeTag === 'All' || (p.tags || []).includes(activeTag)
      const q = query.trim().toLowerCase()
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      return matchesTag && matchesQuery
    })
  }, [activeTag, query, postsFromApi])

  const [featured, ...rest] = posts

  return (
    <section id={id} className="py-16 lg:mt-24 sm:py-20 lg:py-24 bg-gray-50 mt-3">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <div className="mx-auto max-w-4xl text-center rounded-2xl border border-primary-100 bg-white shadow-md px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-700">Blog</h2>
            <p className="mt-3 text-sm sm:text-base text-secondary-600">Latest insights and updates.</p>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-secondary-600">No posts found.</div>
        ) : (
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-4 xl:col-span-3 order-2 lg:order-1">
              <div className="rounded-2xl border border-primary-100 bg-white shadow-sm p-5 sm:p-6">
                <h4 className="text-sm font-semibold text-primary-700">Search</h4>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search posts..."
                  className="mt-2 w-full rounded-lg border border-primary-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
                <h4 className="mt-5 text-sm font-semibold text-primary-700">Tags</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className={`text-xs px-2 py-1 rounded-full border ${
                        activeTag === tag
                          ? 'bg-primary-600 text-white border-primary-600'
                          : 'bg-primary-50 text-primary-700 border-primary-100'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
              {/* Featured post */}
              {featured && (
                <article className="rounded-2xl border border-primary-100 bg-white shadow-md overflow-hidden mb-6 sm:mb-8">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <time className="text-xs sm:text-sm text-secondary-500">
                        {new Date(featured.date).toLocaleDateString()}
                      </time>
                      {featured.tags?.length ? (
                        <div className="flex flex-wrap gap-2">
                          {featured.tags.map((tag) => (
                            <span key={tag} className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-100">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-primary-700">{featured.title}</h3>
                    <p className="mt-2 text-sm sm:text-base text-secondary-700 max-w-3xl">{featured.excerpt}</p>
                    <div className="mt-4">
                      <button onClick={() => navigate && navigate(`/blog/${featured.id}`)} className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800">
                        Read more
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                      </button>
                    </div>
                  </div>
                </article>
              )}

              {/* Grid of remaining posts */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {rest.map((post) => (
                    <article key={post.id} className="rounded-xl border border-primary-100 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="p-5 sm:p-6">
                        <time className="text-xs sm:text-sm text-secondary-500">{new Date(post.date).toLocaleDateString()}</time>
                        <h4 className="mt-2 text-lg font-semibold text-primary-700 line-clamp-2">{post.title}</h4>
                        <p className="mt-2 text-sm text-secondary-700 line-clamp-3">{post.excerpt}</p>
                        {post.tags?.length ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-100">#{tag}</span>
                            ))}
                          </div>
                        ) : null}
                        <div className="mt-3">
                          <button onClick={() => navigate && navigate(`/blog/${post.id}`)} className="inline-flex items-center gap-2 text-xs font-semibold text-primary-700 hover:text-primary-800">
                            Read more
                            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog


