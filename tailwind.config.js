/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        onest: ["Onest"],
        pixel: ["Pixelify Sans"]
      },
    },
  },
  plugins: [],
};
