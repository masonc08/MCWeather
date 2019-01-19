/**
 *  Uses linear searching to look for values in an array using a for loop.
 *  If detectMultipleValues is true, then the function will continue searching the entire array to find all values.
 *  @param {Number} objective - Number that is to be searched for in the array.
 *  @param {Number[]} array - Array that is searched through.
 *  @param {boolean} detectMultipleValues - Whether the function should search for multiple values.
 *  @param {number} range - The maximum difference between the objective and the number required to be detected.
 *  @return {Number | String} - Returns the slot where the searched for value exists and the value away from the objective, if applicable.
 */

function linearSearch(objective, array, detectMultipleValues, range) {
  var absRange = abs(range);
  var result = []; //temporary array to store results
  if (detectMultipleValues == true) {
    for (var i = 0; i < array.length - 1; i++) {
      if (abs(array[i] - objective) <= absRange) { //if number is same as the one being looked for, add to temporary array.
        result.push(i);
        if (absRange != 0) {
          result[result.length - 1] += (' ' + abs(roundNumber((array[i] - objective), 2)));
        }
      }
    }
    return result;
  } else if (detectMultipleValues == false) {
    for (var i = 0; i < array.length - 1; i++) {
      if (abs(array[i] - objective) <= absRange) {
        result.push(i);
        if (absRange != 0) {
          result[result.length - 1] += (' ' + abs(roundNumber((array[i] - objective), 2)));
        }
        break;
      }
    }
  }
}