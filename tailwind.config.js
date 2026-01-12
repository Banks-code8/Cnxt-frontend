/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/rizzui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato-sans)'],
      },
      colors: {
        mainWhite: '#FFFFFF',
        mainBlack: '#000000',
        mainGray: '#777777',
        primary: '#289BDE',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")], // ⚠️ Required @tailwindcss/forms plugin.
};
