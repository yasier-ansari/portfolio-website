/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
        mainBlob: 'mainBlob 8s ease infinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        mainBlob: {
          "0%, 100%": { 'transform': "translate(0px, 0px) scale(1)" },
          "25%": { 'transform': "translate(5px, 15px) scale(1.01)" },
          "50%": { 'transform': "translate(-5px, 20px) scale(1)" },
          "75%": { 'transform': "translate(-5px, -5px) scale(0.98)" },

        }
      },
    },
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
      jak: ['Outfit', 'sans-serif'],
      pop: ['Poppins', 'sans-serif'],
      krona: ['Krona One', 'sans-serif'],
      space: ['Space Mono', 'monospace', 'sans-serif'],
      quick: ['Quicksand', 'sans-serif'],
      nun: ['Nunito', 'sans-serif']
    },
  },
  plugins: [],
}
