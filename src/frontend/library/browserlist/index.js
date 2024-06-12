const browserslist = require('browserslist');

let res = browserslist("> 1%, not dead");
console.log('res', res);