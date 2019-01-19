/**
 *  Uses binary searching to find the slot of the temperature being looked for. Currently only finds one array slot
 *  the temperature exists at.
 *  @param {Number} objective - Number that is to be searched for in the array.
 *  @param {Number[]} array - THe array that is to be searched through.
 *  @return {Array} - Returns either an of time where the temperature is forecasted.
 */
function binarySearch(objective, array) {
  var max = array.length;
  var min = 0;
  var mid;
  while (min < max) {
    mid = Math.floor((min + max) / 2)
    if (array[mid] < objective) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }
  if (min == max && array[min] == objective) {
    return min;
  } else {
    return [];
  }
}
