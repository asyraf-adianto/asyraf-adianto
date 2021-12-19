module.exports = {
    mode: 'jit',
    purge: [
        './components/**/*.vue',
        './layouts/**/*.vue',
        './pages/**/*.vue'
    ],
    theme: {
      extend: {
        zIndex: {
         '-50': '-50',
        }
      }
    }
  }