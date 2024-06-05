/**
 * @module PersonModule
 */

/** 
 * @constructor
 */
function Person() {
  /**
   * @desc: say
   * @returns {string}
   */
  this.say = function () {
    return "I'm an instance.";
  }

  /**
   * @desc: 内部say
   * @returns {string}
   */
  function say() {
    return "I'm inner.";
  }

  /**
  * @desc: say1
  * @returns {string}
  */
  this.say1 = function () {
    return "I'm an instance.";
  }
  /**
  * @desc: say2
  * @returns {string}
  */
  this.say2 = function () {
    return "I'm an instance.";
  }
  /**
  * @desc: say3
  * @returns {string}
  */
  this.say3 = function () {
    return "I'm an instance.";
  }
  /**
  * @desc: say4
  * @returns {string}
  */
  this.say4 = function () {
    return "I'm an instance.";
  }
  /**
  * @desc: say5
  * @returns {string}
  */
  this.say5 = function () {
    return "I'm an instance.";
  }
  /**
  * @desc: say6
  * @returns {string}
  */
  this.say6 = function () {
    return "I'm an instance.";
  }

}
/**
 * @desc: 静态say
 * @returns {string}
 */
Person.say = function () {
  return "I'm static.";
}

/** 
 * @constructor 
 * */
function Person2() {
  console.log(12)
}

module.exports = {
  Person,
  Person2
}