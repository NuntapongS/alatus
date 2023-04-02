/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Text: {
          title: "#E53A68",
        },
        button: {
          primary: "#E53A68",
          boarder: "#F39F02",
        },
      },
    },
    plugins: [],
  },
};
