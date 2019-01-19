/**
 *  Depending on the text entered in the textbox,
 *  search the location for weather information in the API.
 *  After the information is fetched, run the function loadWeatherVariables();
 */
function fetchInfo() {
  loadJSON('http://api.apixu.com/v1/current.json?key=4f2d394d90b44eb69eb181526172510&q=' + mainTextBox.value(), loadLongLat, loadErrorMessage);
  console.log('http://api.apixu.com/v1/current.json?key=4f2d394d90b44eb69eb181526172510&q=' + mainTextBox.value());
}
var weatherInfo = [];

/**
 * Uses Apixu's autofill ability to guess a city's name given less formal naming.
 * Converts name of a city into longitude and latitude, then feeds this information to the openweathermap api.
 * @param {Object} api - Object loaded from the apixu weather API.
 */
function loadLongLat(api) {
  loadJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + api.location.lat + '&lon=' + api.location.lon + '&units=metric&APPID=d09c89e81c50c8648037145c2c3bf460', loadWeatherVariables, loadErrorMessage);
  console.log('http://api.openweathermap.org/data/2.5/weather?lat=' + api.location.lat + '&lon=' + api.location.lon + '&units=metric&APPID=d09c89e81c50c8648037145c2c3bf460');
  weatherInfo[0] = api.location.name + ', ' + api.location.country;
  loadJSON('http://api.openweathermap.org/data/2.5/forecast?lat=' + api.location.lat + '&lon=' + api.location.lon + '&units=metric&APPID=d09c89e81c50c8648037145c2c3bf460', loadForecastInfo, loadErrorMessage);
  console.log('http://api.openweathermap.org/data/2.5/forecast?lat=' + api.location.lat + '&lon=' + api.location.lon + '&units=metric&APPID=d09c89e81c50c8648037145c2c3bf460');
}
/**
 * Send a message displaying error number and message.
 * @param {Object} errorInfo - Object containign error inforatmion.
 */
function loadErrorMessage(errorInfo) {
  alert('Error: ' + errorInfo.status + ', ' + errorInfo.statusText);
}
var temp, minTemp, maxTemp;

/**
 *  Load the current weather information from the API into appropriate variables.
 *  Load displayInfo();
 */
function loadWeatherVariables(weatherValues) {
  weatherInfo[1] = weatherValues.main.temp + "°C";
  temp = weatherValues.main.temp;
  weatherInfo[2] = weatherValues.main.temp_min + "°C to " + weatherValues.main.temp_max + "°C";
  minTemp = weatherValues.main.temp_min;
  maxTemp = weatherValues.main.temp_max;
  weatherInfo[3] = weatherValues.weather.main;
  displayInfo();
}
var forecastTemps, forecastTimes;
/**
 *  Load forecasting temperatures and timestamps of every hour into two arrays.
 *  @param {Object} weatherValues - The object loaded from the JSON that contains forecasted weather information from the API for the next 10 days.
 *  @var {Array} forecastTemps - Array of 240 different temperatures within the next 10 days, one report per hour.
 *  @var {Array} forecastTimes - Array of the timestamps of the next 240 reported temperatures.
 */
function loadForecastInfo(weatherValues) {
  //clear array, resets if another search is made in program.
  forecastTemps = [];
  forecastTimes = [];
  //load info
  for (var i = 0; i < weatherValues.list.length; i++) {
    forecastTemps.push(weatherValues.list[i].main.temp);
    forecastTimes.push(weatherValues.list[i].dt_txt);
  }
  //console.log(forecastTemps); //remove later
  // var start = millis();
  //console.log(linearSearch(-9.6, forecastTemps)); //465ms, not found.  200ms, found
  // console.log(millis() - start);
  /* Using the millis() function, both default sorting algorithms were tested for preformance on the school computer.
   * Bubble sorting was completed in approximatley 91 milliseconds, while default sorting was completed in approximatley 175ms.
   * This makes sense as bubble sorting is an n^2 algorithm, whereas the P5.js built-in quick sort is logn.
   * The rate of change of a parabola linearly increases, meaning that the operation will be more intense the longer
   * the algorithm carries on for. Thus, the n^2 algorithm would be better for small sized arrays like the one I am using.
   * On the other hand, the rate of change of the logx function decreases as the x value increases. This means that the initial
   * start of the algorithm will be the most heavy (much more heavy than n^2), but will go faster as it carries on.
   * This would make logn algorithms better suited for large array sizes, which I am not using. Thus, I will be using bubble sorting
   * where my array size is small, and built-in sorting where my array size is large.
   */
  //var start = millis();
  //bubbleSort(forecastTemps); //91ms
  //console.log(millis() - start);
  // default sorting---------175ms-----------------------
  // forecastTemps.sort(function(a, b) {
  //   return a - b
  // });
  //var start = millis();
  //console.log(binarySearch(-9.69, forecastTemps)); //500ms not found. 250ms found
  //console.log(millis() - start);
  /* When comparing binary searching and linear searching, both searches roughly take the same amount of time
   * to complete the operation, whether the number is or is not found. The operations were timed using the
   * millis() function on my laptop. Binary searching took about 500ms to
   * search through the entire array, and 200ms to find a value in the array. The length the function runs for
   * depends on the slot searched number is in. As binary searching is a logn algorithm, it starts off with more
   * processes, and reduces as the function continues. Linear searching, an O(n) algorithm, remains the same
   * throughout the entire operation. However, the ideal situation is to find the searched number within the first
   * slot of the array, making it an O(1) operation. With this being said, if the number does not exist in the array,
   * the function must search through every value on the array, making it very inefficient. However, this isn't the case
   * with my dataset as my values in the array go up and down, as they represent the temperatures within a day. Thus,
   * I will be using linear searching for my program as not only does it work better with linear searching, but it also
   * is a smaller array size, making it much more friendly for an O(n) algorithm in comparison to an O(logn) algorithm.
   */
  console.log(forecastTemps);
}