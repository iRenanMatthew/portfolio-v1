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
    screens: {
      'sm': {'min': '320px', 'max': '768px'},
      'md': {'min': '769px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1440px'},
      'xl': {'min': '1441px'},
    },
  },
  plugins: [],
};
