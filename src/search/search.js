/*jshint esversion: 6 */
import 'bootstrap/dist/css/bootstrap.min.css';

function createSearchForm(){
  let body = document.querySelector('body');
  let content = document.createElement('div');
  content.className = "container";
  content.id = "cos";

  let searchDiv = document.createElement('div');
  searchDiv.className ="md-form active-purple-2 mb-3";
  searchDiv.id = 'search-input';

  let searchInputAttr = { 'id':'search','class': 'form-control search-input','type':'text',
  'placeholder':'Search a city','aria-label':'Search'};

  let searchInput = document.createElement('input');
  setAttributes(searchInput,searchInputAttr);

  searchDiv.appendChild(searchInput);
  content.appendChild(searchDiv);
  body.appendChild(content);
}

function setAttributes(el,attr){
  for(let key in attr){
    el.setAttribute(key,attr[key]);
  }
}
export default {createSearchForm};
