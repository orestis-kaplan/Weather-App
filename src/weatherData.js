/*jshint esversion: 6 */

export default function getWeather(cityName) {
  var key = '34dc0e2236e7280c669fad2b3b4ea561';
  return fetch('https://api.openweathermap.org/data/2.5/weather/?q=' + cityName + '&appid=' + key);
}
