/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        error: "hsl(0, 100%, 66%)",

        white: "hsl(0, 0%, 100%)",

        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
        "ligth-purple": "hsl(278, 94%, 30%)",
      },
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"', "serif"], // Adding the font family
      },
    },
  },
  plugins: [],
};
