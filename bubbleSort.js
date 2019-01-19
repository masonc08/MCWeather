/** 
 * Sorts the given array using bubble sorting, an n^2 sorting algorithm.
 * @param {number[]} array - Expected array to be sorted.
 */
function bubbleSort(array) {
  var swapped, cache;
  do {
    swapped = false;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        cache = array[i];
        array[i] = array[i + 1];
        array[i + 1] = cache;
        swapped = true;
      }
    }
  } while (swapped);
}