/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          title: "#E53A68",
        },
        button: {
          primary: "#E53A68",
        },
        border: {
          primary: "#E53A68",
          back: "#B91E50",
          next: "#B91E50",
        },
      },
    },
    plugins: [],
  },
};
