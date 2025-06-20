/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        GHgreen: {
          50: '#E8F0ED',
          100: '#D1E0DB',
          200: '#A3C1B7',
          300: '#75A292',
          400: '#4B7E6D',
          500: '#2c5f4e', // This is your main color
          DEFAULT: '#2c5f4e', // This makes bg-GHgreen work
          600: '#1D3A32',
          700: '#172E29',
          800: '#11231F',
          900: '#0B1714',
        },
      },
    },
  },
  plugins: [],
}
