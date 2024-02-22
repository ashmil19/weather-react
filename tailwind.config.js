/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainBg: "#2585D2"
      },
      width: {
        mainW: "30rem"
      }
    },
  },
  plugins: [],
}

