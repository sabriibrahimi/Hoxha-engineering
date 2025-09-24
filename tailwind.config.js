/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5a171d',  // Cherry red
          light: '#e94e5c',   // Adjusted lighter variant
          dark: '#a61b29'     // Adjusted darker variant
        },
        secondary: {
          DEFAULT: '#1f1f1f',  // Soft black
          light: '#2f2f2f',
          dark: '#0f0f0f'
        },
        accent: '#f5f5f5',
        dark: '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}