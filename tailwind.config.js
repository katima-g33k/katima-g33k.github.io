/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        beach: "url('/public/beach.jpg')",
        castle: "url('/public/castle.jpg')",
        sunset: "url('/public/sunset_boat.jpg')",
        train: "url('/public/train.jpg')",
        viewpoint: "url('/public/viewpoint.jpg')",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
