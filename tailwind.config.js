module.exports = {
  content: [
     "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}", // Adjust this line to include any file types that might contain Tailwind classes
     ],
     theme: {
       extend: {
        fontFamily: {
          'metal': ['Metal Mania', 'sans-serif'],
        },
      },
     },
  plugins: [],
}