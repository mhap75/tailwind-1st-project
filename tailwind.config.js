/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Yekan, sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
