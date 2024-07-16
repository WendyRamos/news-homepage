/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'soft-orange': '#E8AA53',
        'soft-red': '#F05D50',
        'off-white': '#FFFCF9',
        'grayish-blue': '#C5C6CD',
        'dark-grayish-blue': '#5D5F79',
        'very-dark-blue': '#000019'
      },
      fontFamily: {
        'Inter': 'Inter',
      }
    },
  },
  plugins: [],
}

