/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-neon': '#A3FF00',
        'bg-obsidian': '#050505',
        'bg-card': '#121212',
        'text-muted': '#8A8A8A',
      },
    },
  },
  plugins: [],
}
