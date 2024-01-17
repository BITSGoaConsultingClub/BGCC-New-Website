import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-image": "url('https://imgur.com/LiBzwRq.png')",
        hero: "url('https://i.imgur.com/BYu3zAD.png')",
        "clients-image": "url('https://imgur.com/4wO9cQv.png')",
        "client-01": "url('https://imgur.com/rRFilsZ')",
        "bgcc-logo": "url('https://i.imgur.com/I4dsioZ.png')",
        "services-image": "url('https://imgur.com/PpWOGK4.png')",
        "testimonials-image": "url('https://imgur.com/EhxwNPe.png')",
        "events-image": "url('https://imgur.com/G3kjEWa.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animate")],
};
export default config;
