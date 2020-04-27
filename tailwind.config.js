module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
      maxWidth: '100vw'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['didot-headline', 'serif'],
      script: ['sheila', 'cursive'],
      serif: ['didot', 'serif'],
      sans: ['quasimoda', 'sans-serif'],
      body: ['quasimoda', 'sans-serif'],
    },
    borderWidth: {
      default: '0px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '2rem',
      'smd': '1.5rem',
      'tiny': '.875rem',
      'base': '1rem',
      'md': '3rem',
      'mdlg': '4rem',
      'lg': '5rem',
      'xl': '8rem',
      '2xl': '10rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        blush: '#F9C29E',
        clay: '#CB6620',
        grey: '#56565E',
        jardin: '#2C3329',
        peri: '#656AB4',
        rouge: '#F13C49',
        sky: '#B0C7FF',
        sky50 : 'rgba(176,199,255,0.5)',
        sky75 : 'rgba(176,199,255,0.75)',
        slate: '#131921',
        teal: '#273B3F',
        mailly: '#FFFAF0',
        mailly50: 'rgba(255,250,240,0.5)',
        mailly75: 'rgba(255,250,240,0.5)'
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
      maxWidth: {
        'q': '25%',
        'half': '50%',
        'three-q': '75%',
      },
      width: {
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%',
      },
      backgroundSize: {
        '25': '25%',
        '30': '30%',
        '35': '35%',
        '40': '40%',
        '50': '50%',
        '75': '75%',

      }

      
    }
  },
  variants: {
    variants: {
      inset: ['responsive', 'hover', 'focus']
    }
  },
  plugins: [],
}
