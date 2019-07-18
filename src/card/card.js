/*jshint esversion: 6 */
import './card.css';

class Card {
  constructor(cityId,name,country,image,temp,wind,humidity) {
    this.cityId = cityId;
    this.id = parseInt(localStorage.cardId);
    this.name = name;
    this.country = country;
    this.image = image;
    this.temp = temp;
    this.wind = wind;
    this.humidity = humidity;
    localStorage.cardId++;
  }
   celcius(temp){return temp - 273.15;}
   kelvin(temp){return temp;}
   fahreinheit(temp){return temp*9/5 - 459.67;}
}

Card.prototype.render = function(){
  return `
        <li class="card" id="${this.cityId}">
       <h4 class="text-center">${this.name}</h4>
       <div class="card-contents">
         <p class="card-info">
           <span>Temperature: &nbsp</span>
           <span><a>${Math.ceil(this.celcius(this.temp))}</a></span>
         </p>
         <p class="card-info">
           <span>Country: &nbsp${this.country}</span>
         </p>
       </div>
      </li>
    `;
};

export {Card as default};
