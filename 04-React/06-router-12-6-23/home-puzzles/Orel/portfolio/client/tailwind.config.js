/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "main-color":"#4e008e",
      "background-color":"#f5f5f5",
      "black":"#000000"

    },
    
    extend: {
      minHeight: {
        'home': '80vh',
      }
    },
  },
  plugins: [],
}

