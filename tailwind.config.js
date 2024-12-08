/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0C0C0C",
        "custom-white": "#FFFFFF",
        "custom-gray": "#C5C5C5",
        "custom-blue": "#0d72d0",
      },
      colors: {
        "custom-white": "#FFFFFF",
        "custom-gray": "#C5C5C5",
        "custom-blue": "#0d72d0",
      },
    },
  },
  plugins: [],
};
