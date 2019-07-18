/*jshint esversion: 6 */
import list from '../search/searchResults.js';

if (!localStorage.cardId) {
  localStorage.cardId = 1;
}
let content = document.getElementById('cos');
let some = document.getElementById('card-list');
console.log(some);
//content.appendChild(lister);
console.log(document.getElementById('card-list'),"here");
