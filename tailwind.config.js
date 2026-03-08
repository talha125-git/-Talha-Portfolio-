/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      screens: {
        'lg-custom': '1200px',  // Custom breakpoint for 1200px
        'md-custom': '1050px',   // Custom breakpoint for 1050px
      },
    },
  },
  plugins: [],
}

