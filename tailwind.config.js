const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'source-san':['Source Sans Pro', 'sans-serif']
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
        '.bg-gradient-slider-right' : {
          background: `linear-gradient(270.37deg, #111827 15.03%, rgba(17, 24, 39, 0.985208) 21.58%, rgba(17, 24, 39, 0.968455) 28.94%, rgba(17, 24, 39, 0.946916) 34.57%, rgba(17, 24, 39, 0.914882) 40.09%, rgba(17, 24, 39, 0.873696) 45.15%, rgba(17, 24, 39, 0.80694) 52.39%, rgba(17, 24, 39, 0.742966) 56.88%, rgba(17, 24, 39, 0.696536) 60.19%, rgba(17, 24, 39, 0) 105.05%)`
        },
        '.bg-gradient-slider-left' : {
          background: `linear-gradient(90deg, #111827 13.13%, rgba(17, 24, 39, 0.985208) 18.98%, rgba(17, 24, 39, 0.968455) 25.54%, rgba(17, 24, 39, 0.946916) 30.57%, rgba(17, 24, 39, 0.914882) 35.49%, rgba(17, 24, 39, 0.873696) 40.01%, rgba(17, 24, 39, 0.80694) 46.47%, rgba(17, 24, 39, 0.742966) 50.47%, rgba(17, 24, 39, 0.696536) 53.43%, rgba(17, 24, 39, 0) 93.45%)`
        },
        '.bg-gradient-slider-top' : {
          background: `linear-gradient(180deg, #000000 21.99%, rgba(0, 0, 0, 0.941568) 31.75%, rgba(0, 0, 0, 0.857647) 46.04%, rgba(0, 0, 0, 0.783367) 55.8%, rgba(0, 0, 0, 0.669475) 63.12%, rgba(0, 0, 0, 0) 100%)`
        },
        '.bg-gradient-detail' : {
          background: `linear-gradient(to right top, #120336, #150333, #180330, #1a042d, #1b042a)`
        },
        '.bg-gradient-button-casts' : {
          background: `linear-gradient(269.52deg, #FFFFFF 17.77%, rgba(255, 255, 255, 0.806497) 42.77%, rgba(255, 255, 255, 0.314917) 67.75%, rgba(255, 255, 255, 0.210435) 74.36%, rgba(255, 255, 255, 0.0918587) 85.04%, rgba(255, 255, 255, 0) 99.61%)`
        },
        '.bg-gradient-button-casts-left' : {
          background: `linear-gradient(90deg, #FFFFFF 17.47%, rgba(255, 255, 255, 0.806497) 42.68%, rgba(255, 255, 255, 0.314917) 67.88%, rgba(255, 255, 255, 0.210435) 74.54%, rgba(255, 255, 255, 0.0918587) 85.31%, rgba(255, 255, 255, 0) 100%)`
        },
        '.bg-gradient-genre-red' : {
          background: `linear-gradient(97.81deg, #B6051A -4.68%, rgba(177, 51, 97, 0.817793) 51.71%, rgba(205, 16, 130, 0.72) 99.17%, rgba(215, 65, 164, 0) 111.73%)`
        },
        '.bg-gradient-genre-blue' : {
          background: `linear-gradient(99.67deg, #5305B6 17.85%, rgba(83, 5, 182, 0.842764) 54.38%, rgba(83, 5, 182, 0.529059) 94.96%, rgba(83, 5, 182, 0) 120.67%, rgba(83, 5, 182, 0.361176) 120.67%)`
        },
        '.bg-gradient-genre-blue' : {
          background: `linear-gradient(99.67deg, #5305B6 17.85%, rgba(83, 5, 182, 0.842764) 54.38%, rgba(83, 5, 182, 0.529059) 94.96%, rgba(83, 5, 182, 0) 120.67%, rgba(83, 5, 182, 0.361176) 120.67%)`
        },
        '.bg-gradient-genre-yelow' : {
          background: `linear-gradient(98.63deg, #E4B303 34.7%, rgba(218, 198, 21, 0.754598) 78.52%, rgba(255, 230, 1, 0.514648) 104.25%, rgba(255, 230, 1, 0) 116.27%)`
        },

        '.text-overflow' : {
          overflow : `hidden`,
          textOverflow : `ellipsis`,
          display : `-webkit-box`,
          lineClamp : `4`,
          boxOrient : `vertical`
        },
       
        '.grid-footer': {
          gridTemplateColumns: `repeat(auto-fit, minmax(340px, 1fr))`
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
    }),
    require('@tailwindcss/line-clamp')
  ],
}
