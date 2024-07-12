/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient1': 'linear-gradient(180deg, #111132, #0c0c1d)',
        'gradient2': 'linear-gradient(180deg, #111132, #505064)',
      },
    },
  },
  plugins: [],
};
