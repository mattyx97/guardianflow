/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {},
  },
  content: ["node_modules/preline/dist/*.js"],
  plugins: [require("preline/plugin")],
};
