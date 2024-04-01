/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       logo: "#FFD11A",
       gray5: "#7E7E81",
       lightDark: "#1A1A1A",
       dark:"#141414",
       lineColor:"#262626",
       h2head:"#666666"
      },
    },
  },
  plugins: [require("daisyui")],
};
