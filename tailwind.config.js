/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        '2xs': '450px',
        'm': '575px',
        'l': '768px',
        'xl': '992px',
        '2xl': '1200px',
        'max-2xl': {'max': '1200px'},
        'max-xl': {'max': '992px'},
        'max-l': {'max': '768px'},
        'max-m': {'max': '575px'},
        'max-2xs': {'max': '450px'},
        'max-xs': {'max': '300px'},
      },
      backgroundColor: {
        transparent: 'transparent',
        primary: 'rgb(255, 54, 0)',
        white: '#FFFFFF',
        black: 'rgb(4, 4, 1)',
      },
      colors: {
        transparent: 'transparent',
        primary: 'rgb(255, 54, 0)',
        white: '#FFFFFF',
        black: 'rgb(4, 4, 1)',
        paragraphcolor: 'rgb(97, 97, 97)',
      },
      borderColor: {
        transparent: 'transparent',
        primary: 'rgb(255, 54, 0)',
        white: '#FFFFFF',
        black: 'rgb(4, 4, 1)',
      },
      borderRadius: {
        12: '12px',
        16: '16px',
        24: '24px',
        50: '50px',
      },
      boxShadow: {
        'button': '0px 8px 50px rgba(29, 78, 216, 0.5)',
        'button2': '0px 12px 60px rgba(29, 78, 216, 0.8)',
        'custom-medium': '0 4px 6px rgba(0, 0, 0, 0.15)',
        'drop-shadow': '0px 0px 24px rgba(55, 71, 79, 0.15)',
        'box-shadow': 'inset 0px 0px 25px rgba(229, 231, 235, 0.1)',
        'box-shadow2': 'inset 0px 0px 50px rgba(229, 231, 235, 0.1)',
      },
      fontFamily: {
        DMSans: '"DMSans", sans-serif'
      }
    },
  },
  plugins: [
    {
      "plugins": ["babel-plugin-macros"]
    },
    function ({ addBase }) {
      addBase({
        body: {
          padding: "0",
          margin: "0",
          fontFamily: '"DMSans", sans-serif',
        },
        html: {
          padding: "0",
          margin: "0",
        },
        '*': {
          boxSizing: "border-box",
        },
        li: {
          listStyle: "none",
          margin: "0",
          padding: "0",
        },
        ul: {
          listStyle: "none",
          margin: "0",
          padding: "0",
        },
        a: {
          display: "inline",
          textDecoration: "none",
          transition: ".5s",
          '&:hover': {
            textDecoration: "none",
          },
        },
        p: {
          margin: "0",
          padding: "0",
        },
        h1: {
          margin: "0",
          padding: "0",
        },
        h2: {
          margin: "0",
          padding: "0",
        },
        h3: {
          margin: "0",
          padding: "0",
        },
        h4: {
          margin: "0",
          padding: "0",
        },
        h5: {
          margin: "0",
          padding: "0",
        },
        h6: {
          margin: "0",
          padding: "0",
        },
        '.container': {
          width: '100%',
          margin: '0 auto',
          "@media (max-width: 1200px)":{
            maxWidth: '100% !important',
            padding: '0 15px !important',
          },
        },
      });
    },
  ],
}