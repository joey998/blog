const { execSync } = require('child_process');
let fs = require('fs');
let path = require('path')

fs.watch(__dirname, { recursive: true }, (type, filename) => {
  if (filename.startsWith('out')) {
    return;
  }
  execSync(`rm -rf ${path.resolve(__dirname, 'out')} && npx jsdoc ${path.resolve(__dirname)}/`)
})