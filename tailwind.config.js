module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    },
    fontFamily: {
      'display': ["Red Hat Display"],
      'body': ["Open Sans"],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
