module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    gradientColorStops: {
      gradient_primary:
        'linear-gradient(156.07deg, rgba(36, 152, 243, 0.86) -10.81%, #123D68 84.63%)'
    },
    fontFamily: {
      custom: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#123D68',
        error: '#EB3C4BB2'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
