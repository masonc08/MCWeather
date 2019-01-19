//declare variables for buttons and inputs
var mainTextBox, mainTextBoxButton, searchTextBox, searchTextBoxButton, rangeTextBox, sortButton;
//variables for pictures
var noSymbol, yesSymbol;

function setup() {
  createCanvas(750, 1000);
  colorMode(HSL, 360, 100, 100);
  noSymbol = new Picture(loadImage("noSymbol.png"), 100);
  yesSymbol = new Picture(loadImage("yesSymbol.png"), 100);
  mainTextBox = createInput();
  mainTextBoxButton = createButton('Submit');
  searchTextBox = createInput();
  searchTextBox.hide();
  searchTextBoxButton = createButton('Search');
  searchTextBoxButton.hide();
  rangeTextBox = createInput();
  rangeTextBox.hide();
  sortButton = createButton('Sort in order of range');
  sortButton.hide();
  homescreen();
}
var mainTextBoxHasInput, searchTextBoxHasInput;
/**
 * Creates the homescreen display.
 */
function homescreen() {
  background(255);
  textSize(30);
  textAlign(CENTER);
  text('Weather Reporter', width / 2, 30);
  textAlign(LEFT);
  textSize(12);
  text('Location: ', 20, 55);
  mainTextBox.position(20, 65);
  mainTextBox.size(170, 15);
  mainTextBox.input(function() {
    mainTextBoxHasInput = true;
  });
  mainTextBoxButton.position(190, 65);
  mainTextBoxButton.mousePressed(fetchInfo);
}

function keyPressed() {
  if (searchTextBoxHasInput == true && keyCode == ENTER) {
    mainTextBoxHasInput = false;
    displaySearchedData();
  }
  if (mainTextBoxHasInput == true && keyCode == ENTER) {
    searchTextBoxHasInput = false;
    fetchInfo();
  }
}