/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ground': '#d5e1ef',
        'paragraph': 'hsl(220, 15%, 55%)',
        'heading': 'hsl(218, 44%, 22%)'
      }
    },
  },
  plugins: [],
}

