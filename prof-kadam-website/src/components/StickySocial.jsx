const links = [
  {
    name: 'Jawaharlal Nehru University',
    href: 'https://jnu.ac.in/content/uakadam',
    bg: 'bg-[#1f2937]',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 3l7.5 4.5v8.5a2 2 0 01-1 1.73L12 21l-6.5-3.27A2 2 0 014.5 16V7.5L12 3z" />
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 12l7.5-4.5" />
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 12L4.5 7.5" />
      </svg>
    )
  },
  {
    name: 'Academia.edu',
    href: 'https://umeshkadam.academia.edu/',
    bg: 'bg-[#111827]',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M4 20l8-16 8 16" />
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M7.5 14h9" />
      </svg>
    )
  },
  {
    name: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Umesh-Kadam-3',
    bg: 'bg-[#00CCBB]',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M4 4h8a5 5 0 110 10H9v6H4V4z" />
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M9 9h3" />
      </svg>
    )
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/@umeshkadam280',
    bg: 'bg-[#1DA1F2]',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.633 7.997c.013.178.013.356.013.534 0 5.448-4.148 11.735-11.735 11.735-2.334 0-4.5-.684-6.323-1.86.33.038.647.051.99.051a8.29 8.29 0 005.138-1.77 4.145 4.145 0 01-3.868-2.87c.254.038.508.064.775.064.368 0 .736-.051 1.079-.14a4.137 4.137 0 01-3.317-4.06v-.051c.546.305 1.177.49 1.847.515A4.129 4.129 0 012.86 6.9c0-.763.203-1.457.559-2.067a11.76 11.76 0 008.53 4.332 4.667 4.667 0 01-.102-.949 4.138 4.138 0 017.152-2.83 8.177 8.177 0 002.625-1.003 4.145 4.145 0 01-1.818 2.285 8.315 8.315 0 002.376-.64 8.888 8.888 0 01-2.11 2.2z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/umesh-ashok-kadam-8162a245',
    bg: 'bg-[#0A66C2]',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.5 8h4V23h-4V8zm7.5 0h3.837v2.043h.054c.534-1.012 1.84-2.08 3.79-2.08 4.053 0 4.8 2.667 4.8 6.137V23h-4v-6.6c0-1.574-.027-3.6-2.193-3.6-2.196 0-2.53 1.716-2.53 3.49V23h-3.83V8z" />
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@umeshkadam5761',
    bg: 'bg-[#FF0000]',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.499 6.203a3.004 3.004 0 00-2.115-2.129C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.384.574A3.004 3.004 0 00.501 6.203 31.81 31.81 0 000 12a31.81 31.81 0 00.501 5.797 3.004 3.004 0 002.115 2.129C4.5 20.5 12 20.5 12 20.5s7.5 0 9.384-.574a3.004 3.004 0 002.115-2.129A31.81 31.81 0 0024 12a31.81 31.81 0 00-.501-5.797zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
      </svg>
    )
  }
]

const StickySocial = () => {
  return (
    <div className="fixed left-3 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 lg:z-50">
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className={`group ${link.bg} text-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200`}
          >
            <span className="sr-only">{link.name}</span>
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center">
              {link.svg}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default StickySocial


