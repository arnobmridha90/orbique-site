module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}","./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        navy: '#002D72',
        emerald: '#2ECC71',
        lightgray: '#F2F2F2',
        warmgold: '#F4B400'
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, rgba(0,45,114,0.95) 0%, rgba(46,204,113,0.85) 100%)'
      }
    }
  },
  plugins: [],
}
