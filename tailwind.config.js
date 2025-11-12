/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5c6ac4",
          light: "#b3bcf5",
          dark: "#202e78",
        },
        secondary: {
          DEFAULT: "#ecc94b",
          light: "#fff9db",
          dark: "#b39500",
        },
        accent: "#e53e3e", // example extra color
      },
    },
  },
  plugins: [],
}


