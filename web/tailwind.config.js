module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          100: '#FDF8F6',
          200: '#FAEAE5',
          300: '#F3C7BA',
          400: '#EBA48E',
          500: '#E38163',
          600: '#DC5E38',
          700: '#BF4722',
          800: '#682712',
          900: '#341309',
        },
      },
      fontFamily: {
        sans: [
          'Open Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['Fira Code', 'Fira Mono', 'Menlo', 'Monoco', 'monospace'],
      },
      padding: {
        wrap: '5.62vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
