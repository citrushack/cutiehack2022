/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: '', // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        pattern: 'var(--pattern)',
      },
      fontFamily: {
        baloo: ["BalooPaaji2"]
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: {
          DEFAULT: 'var(--accent)',
          secondary: 'var(--accent-secondary)',
        },
        card: 'var(--card)',
        overlay: 'var(--overlay)',
        highlight: {
          DEFAULT: 'var(--highlight)',
        },
      },
    },
  },
  plugins: [],
}
