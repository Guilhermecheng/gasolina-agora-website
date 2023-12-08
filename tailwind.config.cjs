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
        'gray-background': "url('/gray_background.png')",
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
          from: {
            height: 0,
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          }
        },
        'close-accordion': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: 0,
          }
        }
      },
      animation: {
        'open-accordion': 'open-accordion  0.15s ease-out',
        'close-accordion': 'close-accordion  0.15s ease-out',
      }
    },
  },
  plugins: [],
}
