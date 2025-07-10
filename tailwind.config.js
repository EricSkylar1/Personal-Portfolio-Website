// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "flip-words": {
          "0%": { transform: "translateY(0%)" },
          "16.66%": { transform: "translateY(-100%)" },
          "33.33%": { transform: "translateY(-200%)" },
          "50%": { transform: "translateY(-300%)" },
          "66.66%": { transform: "translateY(-400%)" },
          "83.33%": { transform: "translateY(-500%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        "flip-words": "flip-words 8s infinite",
      },
      fontFamily: {
        quantify: ["'Quantify'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
