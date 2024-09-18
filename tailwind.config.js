/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brfirma: ['BRFirma-Bold', 'sans-serif'] // 'sans-serif' as fallback
      }
    }
  },
  plugins: [],
}

