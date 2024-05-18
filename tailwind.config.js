/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mustard': '#FFC634',
        'beige': '#F2EBE3',
        'baby-blue': '#CADAE4',
        'soft-gray': '#1B1B1B'
      }
    },
  },
  plugins: [],
}

