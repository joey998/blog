const Metalsmith = require('metalsmith');
let layouts = require('@metalsmith/layouts');

Metalsmith(__dirname)
  .metadata({
    site: {
      title: 'My Website',
    },
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(layouts({
    pattern: '**/*.html'
  }))
  .build(function (err) {
    if (err) throw err;
  });