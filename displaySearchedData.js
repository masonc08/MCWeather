/**
 * Processes the searched data and displays it onto the screen at a predefined location.
 */
function displaySearchedData() {
  displayInfo();
  if (isNaN(searchTextBox.value())) {
    alert('Invalid parameters, please specify a temperature in degrees Celsius.')
  } else {
    var searchedData = linearSearch(searchTextBox.value(), forecastTemps, true, rangeTextBox.value());
    if (searchedData.length == 0) {
      text('There are no temperatures close to the value given.', 380, 230);
    } else {
      var searchedTemp = [];
      var searchedDate = [];
      var tempDifference = [];
      var cache = [];
      text('Temperature', 380, 230);
      text('Range', 480, 230);
      text('Date and Time', 550, 230);
      sortButton.show();
      sortButton.position(355, 200);
      sortButton.mousePressed(displaySortedSearchedData);
      for (var i = 0; i < searchedData.length - 1; i++) {
        cache = searchedData[i].split(' ');
        text(forecastTemps[cache[0]], 380, 250 + i * 20);
        searchedTemp[i] = forecastTemps[cache[0]];
        text(cache[1], 480, 250 + i * 20);
        tempDifference[i] = cache[1];
        text(forecastTimes[cache[0]], 550, 250 + i * 20)
        searchedDate = forecastTimes[cache[0]];
      }
    }
  }
/**
 * Sorts the information in order of range from least to greatest, currently in progress.
 */
  function displaySortedSearchedData() {
    displayInfo();
    bubbleSort(tempDifference);
    var sortedTempDifference = tempDifference;
    for (var i = 0; i < sortedTempDifference.length - 1; i++) {
      text(sortedTempDifference[i], 480, 250 + i * 20);
    }
  }
}
