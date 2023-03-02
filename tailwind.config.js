/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primero: '#010305',
        segundo: '#0E1E2B',
        tercero: '#1C3D52',
        cuarto: '#2C5F78',
        quinto: '#3E849E',
        sexto: '#51ACC5',
        septimo: '#66D7EB',

      },
    },
  },
  plugins: [],
}