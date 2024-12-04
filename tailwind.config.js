/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React components
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(35, 35, 35)", // Replace with your RGB value
      },
      fontFamily: {
        handjet: ["Handjet", "sans-serif"], // Add your custom font
        handjetLight: ["Handjet-Light", "sans-serif"],
        handjetBold: ["Handjet-Bold", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        outfitLight: ["Outfit-Light", "sans-serif"],
        consolas: ["Consolas", "monospace"],
        ariata: ["Ariata", "sans-serif"],
        ariataBold: ["Ariata-Bold", "sans-serif"],
      },
      keyframes: {
        fallIn: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fallAndFade: {
          "0%": {
            transform: "translateY(10px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        fallIn: "fallIn 0.6s ease-out forwards",
        fallAndFade: "fallAndFade 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
