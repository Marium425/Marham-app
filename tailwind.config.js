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
      'seventhsmall':'259px',
      'sixthsmall':'283px',
      'fifthsmall':'300px',
      'fourthsmall':'336px',
      'triplesmall':'390px',
      'doublesmall' : '410px',
      'extrasmall':'422px',
       'small' : '444px',
      'xs' : '490px',
      'smmm':'560px',
      'smm':'661px',
      'sm': '694px',
      'md': '768px',
      'md2': '790px',
      'md1' : '850px',
      'md3':'931px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [require("rippleui")],
}