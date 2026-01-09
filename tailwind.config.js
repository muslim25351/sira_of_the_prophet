/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
    "./store/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  // Pull in NativeWind's Tailwind preset so all the utility
  // classes (bg-*, text-*, flex, etc.) are generated.
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
