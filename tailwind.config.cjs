/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        title: ['Lato', 'Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bg: {
          light: '#fffeff',
        },
        text: {
          main: '#1d1d1d',
          light: '#eee',
        },
        primary: {
          contrast: '#e3a83b',
          transparent: '#e3a83b00',
        },
        secondary: {
          dark: '#212331',
          light: '#3e4254',
        },
      },
      backgroundImage: (theme) => ({
        'home-gradient': `
          linear-gradient(110deg, 
          ${theme('colors.secondary.dark')} 20%, 
          ${theme('colors.primary.contrast')} 150%)
          `,
      }),
      gridTemplateColumns: {
        'project-header': '0.1fr 1fr',
      }
    },
  },
  plugins: [],
};
