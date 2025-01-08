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
        '3xl': '1400px',
        'max-3xl': {'max': '1400px'},
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
        secondary: '#333333',
        white: '#FFFFFF',
        white10: 'rgba(255, 255, 255, .1)',
        black: 'rgb(4, 4, 1)',
        borderPrimary: '#333333',
      },
      colors: {
        transparent: 'transparent',
        primary: 'rgb(255, 54, 0)',
        secondary: '#333333',
        white: '#FFFFFF',
        black: 'rgb(4, 4, 1)',
        paragraphcolor: '#999999',
        borderPrimary: '#333333',
      },
      borderColor: {
        transparent: 'transparent',
        primary: 'rgb(255, 54, 0)',
        secondary: '#333333',
        white: '#FFFFFF',
        black: 'rgb(4, 4, 1)',
        borderPrimary: '#333333',
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
      backgroundImage: {
        'hero-gradient': "linear-gradient(rgba(0, 0, 0, 0.5) 13.62%, rgba(0, 0, 0, 0.5) 68.99%), url('./images/hero-bg.webp')",
        'footer-bg': "url('./images/footer-bg.svg')",
        'video-bg': "url('./images/video-bg.jpg')",
        'testimonial-bg': "url('./images/testimonial-bg.png')",
        'cta-box-bg': "url('./images/cta-box-bg.svg')",
        'choose-us-bg': "url('./images/why-choose-us-bg.svg')",
        'custom-gradient': 'linear-gradient(220deg, rgba(249, 192, 119, 0) 0.73%, rgba(4, 4, 1, 0.49) 90.71%)',
        'custom-gradient2': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 2.8%, #000000 99.93%)',
        'header-bg': "url('./images/page-header-bg.jpg')"
      },
    },
  },
  plugins: [
    require('babel-plugin-macros'),
    function ({ addBase }) {
      addBase({
        body: {
          padding: "0",
          margin: "0",
          fontFamily: 'ID Grotesk',
        },
        html: {
          padding: "0",
          margin: "0",
          backgroundColor: "rgb(4, 4, 1)",
          colors: "#FFFFFF"
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
        '.container-fluid': {
          width: 'calc(100% - 100px)',
          margin: 'auto',
          "@media (max-width: 1400px)": {
            width: '100%',
            padding: '0 16px',
          },
        },
      });
    },
  ],
}