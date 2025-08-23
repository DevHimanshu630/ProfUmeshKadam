/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ebe0d1',
          300: '#d5c2a2',
          400: '#cb9323',
          500: '#b87d1a',
          600: '#926d33',
          700: '#7a5a2a',
          800: '#5d4520',
          900: '#3f2f16',
        },
        secondary: {
          50: '#f7f8f8',
          100: '#eef0f0',
          200: '#d9e0e0',
          300: '#b8c4c4',
          400: '#8fa3a3',
          500: '#3f5756',
          600: '#2f4241',
          700: '#253534',
          800: '#1e2a29',
          900: '#172639',
        },
        accent: {
          50: '#fefcf8',
          100: '#fdf8ed',
          200: '#f9ecd4',
          300: '#f4d9a8',
          400: '#edc272',
          500: '#e6a94a',
          600: '#d78f2e',
          700: '#b37225',
          800: '#8f5a22',
          900: '#744a1f',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      backgroundImage: {
        'medieval-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23d5c2a2\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}
