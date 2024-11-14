/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        header: '#cacaca',
        body: '#8a8a8a',
        grey: '#ABB28F',
        orange: '#dd7729',
        blue: '#519ABA',
        red: '#BF6C65',
        yellow: '#D8C059',
        purple: '#BB78DD',
        green: '#98C364',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        'dm-mono': ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
