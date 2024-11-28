/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "kaushan-script": ['"Kaushan Script"', "sans-sherif"],
        "sawarabi-gothic": ['"Sawarabi Gothic"', "sans-sherif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
