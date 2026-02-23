/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,jsx,tsx,mdx}',
    './app/**/*.{js,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFD700',
          soft: 'rgba(255, 215, 0, 0.15)',
          dim: 'rgba(255, 215, 0, 0.4)',
          min: 'rgba(255, 215, 0, 0.08)',
        },
        'black-deep': '#08080C',
        'black-soft': '#0E0E12',
        'black-card': '#121216',
        'black-light': '#1A1A20',
        'text-white': '#FFFFFF',
        'text-offwhite': '#F0F0F2',
        'text-gray': '#B8B8C0',
        'text-darkgray': '#90909A',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'border-gold-light': 'rgba(255, 215, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
