module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      custom: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#123D68'
      }
    }
  },
  plugins: []
}
