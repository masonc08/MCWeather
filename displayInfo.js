var forecastsTextBox, forecastsTextBoxButton;
/** Displays the information to the user in the UI.
 */

function displayInfo() {
  background(255);
  strokeWeight(0);
  text('Search for temperatures', 325, 175);
  rangeTextBox.show();
  rangeTextBox.position(460, 160);
  rangeTextBox.size(50, 15);
  text('degrees Celsius', 520, 175);
  text('from', 325, 195);
  mainTextBox.value('');
  searchTextBox.show();
  searchTextBox.position(355, 180);
  searchTextBox.size(50, 15);
  searchTextBox.input(function() {
    searchTextBoxHasInput = true;
  });
  text('degrees Celsius', 420, 195);
  searchTextBoxButton.show();
  searchTextBoxButton.position(545, 185);
  searchTextBoxButton.mousePressed(displaySearchedData);
  textSize(30);
  textAlign(CENTER);
  text('Weather Reporter', width / 2, 30);
  textAlign(LEFT);
  textSize(12);
  text('Location: ', 20, 55);
  var meter = new TemperatureMeter();
  meter.meterColor(360, 79, 65);
  meter.dotColor(246, 100, 60);
  meter.display(275, 50, 400, 50);
  for (var i = 0; i < weatherInfo.length - 1; i++) {
    text(weatherInfo[i], 50, 250 + i * 15);
  }
  if (temp < 20) {
    noSymbol.display(100, 100);
  } else if (temp >= 20) {
    yesSymbol.display(100, 100);
  }
}