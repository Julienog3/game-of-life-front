/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        primarydark: "#191919",
        graylight: "#404040",
        bgGray: "#FBFBFB",
        borderGray: "#F5F5F5",
        red: "#FF8181"
      }
    },
  },
  plugins: [],
}