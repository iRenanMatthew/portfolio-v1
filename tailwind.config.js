/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0C0C0C",
        "custom-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
