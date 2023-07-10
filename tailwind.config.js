/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*css"
  ],
  theme: {
    extend: {
      colors:{
      'dark-blue':'hsl(223, 47%, 23%)',
      'primary':'hsl(245, 75%, 52%)',
      'light-blue':' hsl(224, 23%, 55%)',
      'hover':'#766cf1',
      'pale-blue':'hsl(225, 100%, 98%) ',
      'background':'hsl(225, 100%, 94%)'
      },
      backgroundImage: {
        'background-img': "url('/images/pattern-background-desktop.svg')",
      }
    },
    fontFamily:{
      'body':['"Red Hat Display", sans-serif']
    }


  },
  plugins: [],
}

