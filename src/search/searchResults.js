/*jshint esversion: 6 */
import getWeather from '../weatherData.js';
import Card from '../card/card.js';
import search from '../search/search.js';

search.createSearchForm();

function retrieveResults(){
  let searchInput = document.getElementById('search');
  let list = document.createElement('ul');
  list.id = "card-list";
  searchInput.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
      searchResults(searchInput.value,list);
    }
  });
  return list;
}

function searchResults(name,list){
  let dataOfCity = getWeather(name);
  dataOfCity.then(resp => resp.json())
  .then(data =>{
    let card = new Card(data.id,data.name,data.sys.country,null,data.main.temp,data.wind,data.main.humidity,data.weather);
    list.insertAdjacentHTML("afterbegin",card.render());
    card.remove();
    card.background();
  })
  .catch(function(error) {
        alert(error);
  });
}
export default {retrieveResults};
