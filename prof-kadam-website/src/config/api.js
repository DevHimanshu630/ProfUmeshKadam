// API base URL - uses environment variable in production, empty string in development (uses proxy)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

// Helper function to build API URLs
export const getApiUrl = (path) => {
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // If API_BASE_URL is set, use it; otherwise use relative path (for dev proxy)
  return API_BASE_URL ? `${API_BASE_URL}/${cleanPath}` : `/${cleanPath}`
}

