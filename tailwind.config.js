/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind applies to all your component files
  ],
  theme: {
    extend: {
      fontFamily: {
        coiny: ["Coiny", "cursive"], // Ensure your custom font is defined
      },
    },
  },
  plugins: [],
};

