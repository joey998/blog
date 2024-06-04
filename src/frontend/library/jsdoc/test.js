let Person = require('./index2');

/**
 * @desc: valuefn
 * @param {Person#say5} a 去往实例方法
 * @param {Person.say} b 去往静态方法
 * @param {Person~say} c 去往内部方法
 * @returns {*}
 */
function value(a, b, c) {
  console.log(a, b, c)
}