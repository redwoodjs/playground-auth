module.exports = {
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
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
      fontSize: {
        '2xs': '.625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
