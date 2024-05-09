import plugin from 'flowbite/plugin';
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin, // Use the imported plugin directly
  ],
};





// module.exports = {

//   plugins: [
//       require('flowbite/plugin')
//   ]

// }
