/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js"
  ],
  theme: {
    extend: {
      boxShadow:{
        custom: "10px 10px 0px -1px rgba(0,0,0.1)"
      }
    },
  },
  plugins: [],
}

