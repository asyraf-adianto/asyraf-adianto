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
        },
        height: theme => ({
          "content": "calc(100vh - 6rem)",
        }),
      }
    }
  }