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
        }
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace'],
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
