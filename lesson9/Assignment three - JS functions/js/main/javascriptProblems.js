const NOT_A_NUMBER = "Given value is not a number!";

/**
  * Sums two variables together. 
  * @param {Number} a integer value.
  * @param {Number} b integer value.
  * @returns {Number} Sum of a and b
  */
var sumNumbers = function (a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log(NOT_A_NUMBER);
        return false;
    }
    return a + b;
}

/**
 * Sums up all members of array.
 * @param {Array} array with integer members.
 * @returns {Number} Sum of all integers from given array.
 */
var sumArray = function (array) {
    var total = 0;
    for (let integer of array) {
        total += integer;
    }
    return total;
};

/**
 * Returns the smallest number of the numbers that are provided.
 * @param {Number} args are integer values.
 * @returns {Number} Smallest number from given values.
 */
var findSmallest = function (...args) {
    return Math.min.apply(null, args);
};

/**
 * Returns given value converted to Celsius.
 * @param {Number} farenheit degrees.
 * @returns {Number} Farenheit converted to Celsius.
 */
var farenheitToCelsius = function (farenheit) {
    if (isNaN(farenheit)) {
        console.log(NOT_A_NUMBER);
        return false;
    }
    return (farenheit - 32) / 1.8;
}

/**
 * Takes given string and returns it reversed.
 * @param {String} string to reverse.
 * @returns {String} reversed string that was given.
 */
var reverse = function (string) {
    for (var i = string.length - 1, reversed = ''; i >= 0; reversed += string[i--]);
    return reversed;
}
