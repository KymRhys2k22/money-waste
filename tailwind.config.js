/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lexend: ['Lexend', 'sans-serif'],
      },
      colors:{
        primary:{
          '100':'#FDD835',
          '200':'#dcba00',
          '300':'#907900',
        },
        accent:{
          '100': '#FFEB3B',
          '200': '#938a00',
          
        },
        text:{
          '100':'#FFFFFF',
          '200':'#e0e0e0'

        },
        bg:{
          '100':'#000000',
          '200':'#161616',
          '300':'#2c2c2c'
        }
      }
    },
  },
  plugins: [],
}

