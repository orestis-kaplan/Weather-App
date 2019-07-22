/*jshint esversion: 6 */
import list from '../search/searchResults.js';
import tempTo from './cardTemperatures.js';
import './cardcontrol.css';


if (!localStorage.cardId || isNaN(localStorage.cardId)) {
  localStorage.cardId = 1;
}

function addElements(list){
  let lister = list.retrieveResults();
  let content = document.getElementById('cos');
  content.appendChild(lister);
}

function createSetUpButton() {
  let menuOptions = document.createElement('div');
  menuOptions.id = 'dropdown-menu';
  let settingButton = document.createElement('button');
  settingButton.setAttribute("type", "button");
  settingButton.className = "gear-button";
  settingButton.id = 'settings-button';
  menuOptions.appendChild(settingButton);
  let content = document.getElementById('search-input');
  content.appendChild(menuOptions);
}

function createDropdownOptions() {
  let ulOptions = document.createElement('ul');
  ulOptions.id = 'dropdown-options';
  let namesOfLi = ['celcius', 'kelvin', 'fahreinheit'];

  namesOfLi.forEach(name => {
    var li = document.createElement('li');
    li.className = 'menu-li';
    li.innerHTML = name;
    li.addEventListener('click', () => {
      changeTempOnClick(name);
    });
    ulOptions.appendChild(li);
  });

  let dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.appendChild(ulOptions);
}

function changeTempOnClick(convertFunc) {
  let tempOfCards = document.getElementsByClassName('card-temp');
  for (let value of tempOfCards) {
    switch (convertFunc) {
      case 'celcius':
        value.innerText = tempTo.celcius(value.innerText);
        break;
      case 'kelvin':
        value.innerText = tempTo.kelvin(value.innerText);
        break;
      case 'fahreinheit':
        value.innerText = tempTo.fahreinheit(value.innerText);
        break;
      default:
    }
  }
}

function showMenu() {
  let ul = document.getElementById('dropdown-options');
  let button = document.getElementById('settings-button');
  button.addEventListener('click', function() {
    if (ul.style.display === "block")
      ul.style.display = "none";
    else {
      ul.style.display = "block";
    }
  });
}

addElements(list);

export default {createSetUpButton,createDropdownOptions,showMenu};
