/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E5631',
          light: '#2A7344',
          dark: '#164624',
        },
        secondary: {
          DEFAULT: '#1A5F7A',
          light: '#2387B0',
          dark: '#14475A',
        },
        accent: {
          DEFAULT: '#D4AF37',
          light: '#E8C245',
          dark: '#C09B20',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [],
};