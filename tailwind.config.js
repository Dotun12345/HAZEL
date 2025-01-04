/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md : "768px",
      lg : "1024px",
      xl : "1536px",
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      DancingScript: ["Dancing Script", "cursive"],
      Roboto: ["roboto"],
      Yuji: ["Yuji Mai"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "32px",
      }
    },
    extend: {
      backgroundImage: {
        pexel: "url('images/pexels-chris-f-38966-29448961.jpg')",
        foldHouse: "url('images/FOLDED ENTRANCE.jpeg')",
      }
    },
  },
  plugins: [],
}

