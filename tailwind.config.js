/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          title: "#E53A68",
          back: "#",
          next: "#7C2282",
        },
        button: {
          primary: "#E53A68",
        },
        boarder: {
          primary: "#E53A68",
          back: "",
          next: "#7C2282",
        },
      },
    },
    plugins: [],
  },
};
