/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          title: "#E53A68",
          back: "#BE6FCE",
          next: "#CD4548",
        },
        button: {
          primary: "#E53A68",
        },
        border: {
          primary: "#E53A68",
          back: "#BE6FCE",
          next: "#CD4548",
        },
      },
    },
    plugins: [],
  },
};
