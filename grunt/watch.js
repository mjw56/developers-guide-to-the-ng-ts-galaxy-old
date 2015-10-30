module.exports = {
  scripts: {
    files: ['app.ts'],
    tasks: ['browserify'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  html: {
    files: ['index.html'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  css: {
    files: ['assets/css/app.css'],
    options: {
      spawn: false,
      livereload: true
    }
  }
};
