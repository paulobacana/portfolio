/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {  
    extend: {
      fontFamily:{
        karla: ["Karla", "sans-serif"],
      },
      keyframes: {
          scroll:{
            '0%': {
              transform: 'translateX(0)',
            },
            '100%':{
              transform: 'translateX(calc(128 * 12))',
            },
          },
      },
      animation: {
        scroll: '40s linear infinite',
      },
    },
  },
  plugins: [],
};
