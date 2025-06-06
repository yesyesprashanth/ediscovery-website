/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky': {
          500: '#0ea5e9', // Primary sky blue color
          600: '#0284c7',
          700: '#0369a1',
        },
        'maroon': {
          600: '#9f1239', // Maroon color for secondary elements
          700: '#881337',
        },
      },
    },
  },
  plugins: [],
}