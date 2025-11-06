import { useState } from 'react'

const Admin = () => {
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    
    // Client-side validation
    const trimmedTitle = title.trim()
    const trimmedExcerpt = excerpt.trim()
    const trimmedContent = content.trim()
    
    if (trimmedTitle.length < 3) {
      setStatus('Error: Title must be at least 3 characters')
      return
    }
    if (trimmedExcerpt.length < 10) {
      setStatus('Error: Excerpt must be at least 10 characters')
      return
    }
    if (trimmedContent.length < 20) {
      setStatus('Error: Content must be at least 20 characters')
      return
    }
    
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: trimmedTitle,
          excerpt: trimmedExcerpt,
          content: trimmedContent,
          tags: tags.split(',').map(t => t.trim()).filter(Boolean)
        })
      })
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: 'Failed to publish post' }))
        console.error('Backend error response:', errorData)
        throw new Error(errorData.error || 'Failed to publish post')
      }
      
      setTitle(''); setExcerpt(''); setContent(''); setTags('')
      setStatus('Post published successfully!')
    } catch (e) {
      console.error('Error publishing post:', e)
      setStatus(`Error: ${e.message}`)
    }
  }

  return (
    <section className="pt-18 sm:pt-28 lg:pt-32 pb-16 bg-gray-50 lg:mt-24">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary-100 bg-white shadow-md p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-primary-700">Publish Blog Post</h2>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700">Title <span className="text-xs text-secondary-500">(min 3 characters)</span></label>
              <input value={title} onChange={(e)=>setTitle(e.target.value)} required minLength={3} className="mt-1 w-full rounded-lg border border-primary-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700">Excerpt <span className="text-xs text-secondary-500">(min 10 characters)</span></label>
              <textarea value={excerpt} onChange={(e)=>setExcerpt(e.target.value)} required minLength={10} rows={3} className="mt-1 w-full rounded-lg border border-primary-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700">Content <span className="text-xs text-secondary-500">(min 20 characters)</span></label>
              <textarea value={content} onChange={(e)=>setContent(e.target.value)} required minLength={20} rows={8} className="mt-1 w-full rounded-lg border border-primary-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700">Tags (comma separated)</label>
              <input value={tags} onChange={(e)=>setTags(e.target.value)} className="mt-1 w-full rounded-lg border border-primary-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200" />
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-primary-600 text-white px-4 py-2 text-sm font-semibold hover:bg-primary-700">Publish</button>
              {status && (
                <span className={`text-sm ${status.startsWith('Error') ? 'text-red-600' : status.startsWith('Post published') ? 'text-green-600' : 'text-secondary-600'}`}>
                  {status}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Admin


