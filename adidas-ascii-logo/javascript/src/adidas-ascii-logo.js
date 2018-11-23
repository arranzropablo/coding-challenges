/**
 * Returns the adidas three stripes logo using `@` characters.
 * @param {number} width - Width of a stripe.
 * @returns {string} adidas logo.
 */
module.exports = function(width) {
  if (width < 2) {
    throw 'Error, minimun width is 2';
  }
  let baseSize = Math.round(Math.sqrt(width));
  let result = "";
  for (let i = 0; i < baseSize; i++) {
    result += " ".repeat((width * 2) + i) + printAts(width) + "\n";
  }
  for (let i = 0; i < baseSize; i++) { 
    result += " ".repeat(width + i) + printAts(width) + " ".repeat(baseSize) + printAts(width) + "\n";
  }
  for (let i = 0; i < baseSize; i++) { 
    result += " ".repeat(i) + printAts(width) + " ".repeat(baseSize) + printAts(width) + " ".repeat(baseSize) + printAts(width) + "\n";
  }
  return result.substr(0, result.length - 1);
};

function printAts(width) {
  return "@".repeat(width);
}