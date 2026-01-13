import animate from "tailwindcss-animate";

const tailwindConfig = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [animate],
};

export default tailwindConfig;
