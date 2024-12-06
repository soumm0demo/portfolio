/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 10px 15px rgba(0, 0, 0, 0.5)', // Custom shadow
      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)",
      },
      fontFamily: {
        chakra: ['"Chakra Petch"', 'sans-serif'],
        edu: ['"Edu AU VIC WA NT Hand"', 'cursive'],
        parkinsans: ['"Parkinsans"', 'sans-serif'],
      },
      zIndex: {
        1: '1',
        500: '500',
      },
    },
  },
  plugins: [],
}

