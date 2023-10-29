/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    screens: {
      'doublesmall' : '270px',
      'extrasmall':'380px',
      'small' : '455px',
      'xs' : '490px',
      'sm': '694px',
      'md': '768px',
      'md2': '790px',
      'md1' : '850px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [require("rippleui")],
}