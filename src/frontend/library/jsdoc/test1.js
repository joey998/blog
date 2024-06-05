/**
 * @module testModule
 */

/**
 * @desc: valuefn
 * @see module:PersonModule
 * @requires module:PersonModule
 * @param { module:PersonModule~Person#say } a 去往实例方法
 * @param { module:PersonModule~Person.say } b 去往静态方法
 * @param {Person2} c 去往内部方法
 * @returns {string}
 */
function getValue(a, b, c) {
  console.log(a, b, c);
}

module.exports = {
  getValue
}