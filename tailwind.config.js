// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         customColor: '#9DB2BF',
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#27374D',
        customMedium: '#9DB2BF',
        customLight: '#DDE6ED',
        light: '#F3F8FB',
      },
    },
  },
  variants: {},
  plugins: [],
};
