/**
 * Polyfill for Array.prototype.map()
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @returns {array} a new array with the results of calling a provided function.
 */
if (!Array.prototype.map) {
  Array.prototype.map = function(f) {
    var result = [];
    for (var i = 0; i < this.length; ++i) {
      result[i] = f(this[i], i);
    }
    return result;
  };
}

/* Read string has hex values */
String.prototype.b16decode = function() {
  return this.match(/../g).map(function(x) {
    return String.fromCharCode(parseInt(x, 16));
  }).join('');
};