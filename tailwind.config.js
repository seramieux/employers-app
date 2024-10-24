/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        main: "15px 15px 30px rgba(0,0,0,.15)",
      },
    },
  },
  plugins: [],
};
