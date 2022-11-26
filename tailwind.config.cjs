/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'purple-background': "url('/purple_background.png')",
        'orange-background': "url('/orange_background.png')",
        'footer-gradient': 'linear-gradient(180deg, #3D3070 0%, #3D3070 69.27%, #251D43 100%)',
      },
      colors: {
        'orange-400': '#F68B0C',
        'textmaincolor': '#3D3070',
      },
      spacing: {
        'container': '940px',
      },
      fontSize: {
        '2.5xl': '1.75rem',
        '3.5xl': '2rem',

        'title': '4rem',
      },
      transitionProperty: {
        height: 'height',
        opacity: 'opacity',
      },
      keyframes: {
        'open-accordion': {
          '0%': {
            height: 0,
          },
          '100%': {
            height: 'var(--radix-accordion-content-height)',
          }
        },
        'close-accordion': {
          '0%': {
            height: 'var(--radix-accordion-content-height)',
          },
          '100%': {
            height: 0,
          }
        }
      },
      animation: {
        'open-accordion': 'open-accordion .3s cubic-bezier(0.87, 0, 0.13, 1) forwards',
        'close-accordion': 'close-accordion .3s cubic-bezier(0.87, 0, 0.13, 1) forwards',
      }
    },
  },
  plugins: [],
}
