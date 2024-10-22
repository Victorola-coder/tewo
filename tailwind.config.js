/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-effect": {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },

        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        loader: {
          "0%": {
            opacity: "0.2",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-effect 300ms linear",
        "slide-down": "slide-down 300ms linear forwards",
        "slide-up": "slide-up 300ms linear forwards",
        "rotate-clockwise": "rotate-clockwise 1s infinite linear",
        "loader-opacity": "loader 1s ease-in-out alternate infinite",
      },
      colors: {
        one: "0px 4px 4px -4px #0C0C0D0D",
        two: "0px 16px 16px -8px #0C0C0D1A",
      },

      dropShadow: {
        light: "0px 4px 4px -4px rgba(12, 12, 13, 0.05)",
        dark: "0px 16px 16px -8px rgba(12, 12, 13, 0.10)",
      },

      boxShadow: {
        one: "0px 4px 4px -4px rgba(12, 12, 13, 0.08)",
        two: "0px 16px 16px -8px rgba(12, 12, 13, 0.10)",
        three: "0px -4px 10px 0px #00000033 inset",
        four: "0px 4px 16px 0px rgba(0, 0, 0, 0.15), 0px 1px 15px 0px rgba(0, 0, 0, 0.20);",
      },
    },
  },
  plugins: [],
};
