/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          bg: '#f5f5dc',
          bgLight: '#ffffff',
          primary: '#ff6b35',
          secondary: '#004e89',
          accent: '#f77f00',
          text: '#1a1a1a',
          yellow: '#ffdd00',
        },
        orange: {
          50: '#fff4ed',
          100: '#ffe6d5',
          200: '#feccaa',
          300: '#fdac74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ff6b35',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace'],
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
