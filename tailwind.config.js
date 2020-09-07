module.exports = {
  purge: {
    content: ['./src/**/*.js', './src/**/*.html'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
