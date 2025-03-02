 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        bounceSlow: 'bounce 10s infinite', 
      },
      animation: {
        bounceSlow: 'bounce 10s ease-in-out infinite',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],  
      },
    },
  },
  plugins: [],
}