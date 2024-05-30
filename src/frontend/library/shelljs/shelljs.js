var shell = require('shelljs');
// var path = require('path');
// console.log('dddd')
// shell.echo('hahah')
// let res = shell.cat(`${__dirname}/shelljs.js`);
// console.log(res.stdout)

let a = shell.cd("../");
let b = shell.ls();
console.log(a, b)
