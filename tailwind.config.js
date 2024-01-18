/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#29AD00',
      primary_hover: '#11B3B3', //ИЗМЕНИТЬ
      secondary: '#191F23',
      secondary_hover: '#343D42',
      border: '#4A5563',
      background: '#0D1013',
      icon: '#A5B6BD',
      success: '#29AD00',
      danger: '#FF532F',
      white: '#fff',
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
