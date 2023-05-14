/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f2ff',
          100: '#ece7ff',
          200: '#dbd2ff',
          300: '#c1aeff',
          400: '#a280ff',
          500: '#874dff',
          600: '#711aff',
          700: '#6b16eb',
          800: '#5a12c5',
          900: '#4b11a1',
          950: '#2c076e',
        },
        black: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
          950: '#000000',
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    fontFamily: {
      serif: ['Bitter', 'serif'],
      sans: [
        'SF Pro Text',
        'Inter',
        'system-ui',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Ubuntu',
      ],
      monospace: [`SF Mono`, `ui-monospace`, `Monaco`, 'Monospace'],
    },
  },
  plugins: [],
}
