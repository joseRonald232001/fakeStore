/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-blue':'#D6EDF2',
        'custom-gray':'#7F7F7F',
        'dark-green':'#174D4D',
        'dark-red':'#CB3636'
      }
    },
  },
  plugins: [],
}

