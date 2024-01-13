/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors: {
        theme_color: "#2A2A2A",
        primar:'#5F9EA0',
        
      },
      fontFamily: {
        mont: ['Montserrat', 'sms-serif']
      },
    },
    screens: {
      '3xl': { 'max': '1835px' },
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    }
  },
  plugins: [],
}

