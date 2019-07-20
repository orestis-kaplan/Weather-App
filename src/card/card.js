/*jshint esversion: 6 */
import './card.css';

class Card {
  constructor(cityId,name,country,image,temp,wind,humidity,weather) {
    this.cityId = cityId;
    this.id = parseInt(localStorage.cardId);
    this.name = name;
    this.country = country;
    this.image = image;
    this.temp = temp;
    this.wind = wind;
    this.humidity = humidity;
    this.weather = weather;
    localStorage.cardId++;
  }
}

Card.prototype.render = function(){
  return `
     <li class="card" id="${this.cityId}">
       <h4 class="text-center">${this.name}
        <span class="card-country">,&nbsp${this.country}</span>
       </h4>
       <p class="text-center">
        <span class="card-description-${this.cityId}">${this.weather[0].main}</span>
       </p>
       <div class="card-contents">
         <p>
           <span class="card-temp">${Math.ceil(this.temp)}&deg; K</span>
           <span class="card-wind">${this.wind.speed}mph</span>
         </p>
       </div>
       <p class="text-center">
          <span class="card-humidity">Humidity: ${this.humidity}gr/m³</sapn>
       </p>
       <button id="delete-btn-${this.id}">Delete</button>
      </li>
    `;
};

Card.prototype.remove = function(){
  let deleteButton = document.getElementById('delete-btn-'+this.id);
  let list = document.getElementById('card-list');
  let listToBeRemoved = document.getElementById(this.cityId);
  deleteButton.addEventListener('click',function(){
    list.removeChild(listToBeRemoved);
  });
};

Card.prototype.background = function(){
  let description = document.getElementsByClassName('card-description-'+this.cityId);
  let card = document.getElementById(this.cityId);
    switch (description[0].innerText) {
      case ('Clouds'):
        card.style.backgroundImage = "url('../src/img/fewclouds.jpg')";
        card.style.backgroundSize = 'cover';
        card.style.color = 'black';
        break;
      case ('Rain'):
        card.style.backgroundImage = "url('../src/img/rain.jpg')";
        card.style.backgroundSize = 'cover';
        card.style.color = 'beige';
        break;
      case ('Snow'):
        card.style.backgroundImage = "url('../src/img/snow.jpg')";
        card.style.backgroundSize = 'cover';
        card.style.color = 'black';
        break;
      case ('Clear'):
        card.style.backgroundImage = "url('../src/img/clear.jpg')";
        card.style.backgroundSize = 'cover';
        card.style.color = 'black';
        break;
      case ('Thunderstorm'):
        card.style.backgroundImage = "url('../src/img/thunder.jpg')";
        card.style.backgroundSize = 'cover';
        card.style.color = 'beige';
        break;
      case ('Drizzle'):
        card.style.backgroundImage = "url('../src/img/drizzle.jpg')";
        card.style.backgroundSize = 'cover';
        card.style.color = 'black';
        break;
      default:

    }
};
export {Card as default};
