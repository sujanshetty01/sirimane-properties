/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          900: '#1a1a1a',
          800: '#2a2a2a',
          700: '#3a3a3a',
        },
        'accent': {
          gold: '#D4AF37',
          light: '#F3E5AB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
