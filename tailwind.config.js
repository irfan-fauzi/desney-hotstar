const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'Manrope': ['Manrope', 'sans-serif']
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1080px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        '.bg-gradient': {
          background: `linear-gradient(90deg, #030B17 43.6%, rgba(17, 24, 39, 0) 93.35%)
          `
        },
        '.bg-gradient-mobile' : {
          background: `linear-gradient(0deg, #030B17 14.88%, rgba(5, 13, 26, 0.825377) 43.54%, rgba(7, 15, 28, 0.70314) 60%, rgba(17, 24, 39, 0) 154.56%)`
        },
        '.text-overflow' : {
          overflow : `hidden`,
          textOverflow : `ellipsis`,
          display : `-webkit-box`,
          lineClamp : `4`,
          boxOrient : `vertical`
        },
        '.grid-blog': {
          gridTemplateColumns: `repeat(auto-fit, minmax(360px, 1fr))`
        },
        '.grid-footer': {
          gridTemplateColumns: `repeat(auto-fit, minmax(340px, 1fr))`
        },
        '.grid-row-blog': {
          gridRow : `1/3`
        },
        '.container-image': {
          width: `100%`,
          'div' : {
            position: `unset !important`
          } 
        },
        '.inside-img' : {
          objectFit: `contain`,
          width: `100%`,
          position: `relative !important`,
          height: `unset !important`
        }
        
      }
      addUtilities(utilities)
    })
  ],
}
