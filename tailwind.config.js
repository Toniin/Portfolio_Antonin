import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[theme="dark"]'],
  theme: {
    // BREAKPOINTS
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // colors: {
    //   "primary-color": "#161616",
    //   "secondary-color": "#fff",
    //   "bg-dark-color": "#161616",
    //   "bg-light-color": "#fff",
    // },
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
  },
  plugins: [tailwindcssAspectRatio],
};
