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
      },
      colors: {
        'orange-400': '#F68B0C',
      },
      spacing: {
        'container': '940px',
      }
    },
  },
  plugins: [],
}
