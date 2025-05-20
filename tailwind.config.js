/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // importante: apunta a todos los archivos
  theme: {
    extend: {
      colors: {
        coppelBlue: '#0033A0',
        coppelYellow: '#FFCC00',
        coppelGray: '#F5F5F5',
      },
    },
  },
  plugins: [],
};
