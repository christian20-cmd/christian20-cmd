export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        primary: '#04212C',
        navy: '#054455', // #0A1931
        sky: '#B3CFE5', // #B3CFE5
        blue: '#0F8C8C', // #4A7FA7
        teal: '#63BDB5', // #1A3D63
        snow: '#D3E4E7', // #F6FAFD
        // Ajout pour gradients
        'gradient-start': '#0A1931',
        'gradient-mid': '#4A7FA7',
        'gradient-end': '#B3CFE5',
      },

      fontFamily : {
        MyFontFamily: ['Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
