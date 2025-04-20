/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    darkMode: 'class', // enables dark mode via class
    theme: {
      extend: {
        colors: {
          surface: '#1a1a1a',
          primary: '#d1d1d1',
          accent: '#4ade80', // a subtle green highlight
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        },
        backgroundImage: {
            parallax: "url('/public/images/parallax-bg.jpg')",

        },
      },
    },
    plugins: [],
  };
  