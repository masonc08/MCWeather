/**
 * The roundNumber function uses the Math.round function to round a number to a given decimal place.
 * @param {number} number - The number to be rounded.
 * @param {number} decimalPlaces - The amount of decimal places to be rounded.
 * @return {number} - The rounded number, to the provided decimal place.
 */
function roundNumber(number, decimalPlaces) {
  var divisor = Math.pow(10, decimalPlaces);
  return Math.round(number * divisor) / divisor;
}