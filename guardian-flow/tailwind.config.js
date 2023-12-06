/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {},
  },
  content: ["./node_modules/preline/preline.js"],
  plugins: [require("preline/plugin")],
};
