/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      spacing: {
        105: "25rem",
        120: "40rem",
      },
    },
  },
  plugins: [],
};
