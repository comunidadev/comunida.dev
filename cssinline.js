let critical = require('critical');

// relative build output folder
critical.generate({
  base: 'dist',
  src: 'index.html',
  target: 'index.html',
  inline: true,
  extract: false,
});
