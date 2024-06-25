import { fluidCorePlugins, fluidExtractor, defaultThemeFontSizeInRems, defaultThemeScreensInRems } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: {

    files: ["./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"],
    extract: fluidExtractor()

  },
  darkMode: 'class',
  theme: {
    fontSize: defaultThemeFontSizeInRems,
    screens: defaultThemeScreensInRems,
    extend: {

      backgroundImage: {
        'hero-section': "url('/src/Assets/hero.svg')"
      },

      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-400px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        slideOut: {
          '0%': { transform: 'translateY(0px)' },
          '100': { transform: 'translateY(-400px)' }
        }

      },
      fontFamily: {
        Lexend: ['Lexend', 'sans-serif'],
      },
      colors: {
        primary: {
          '100': '#FDD835',
          '200': '#dcba00',
          '300': '#907900',
        },
        accent: {
          '100': '#FFEB3B',
          '200': '#938a00',

        },
        text: {
          '100': '#FFFFFF',
          '200': '#e0e0e0'

        },
        bg: {
          '100': '#000000',
          '200': '#161616',
          '300': '#2c2c2c'
        }
      }
    },
  },
  plugins: [
    fluidCorePlugins
  ],
}

