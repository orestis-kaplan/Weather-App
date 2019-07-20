/*jshint esversion: 6 */

function celcius(temp){
  if(temp.match(/^\d+$/)){
    return String(Math.round(temp - 273)) + ' ' + String(String.fromCharCode(176)) + 'C';
  }
  else if (temp.match(/[A-Z]/)[0] === 'C'){
    return temp ;
  }
  else if(temp.match(/[A-Z]/)[0] === 'K'){
    temp = temp.match(/^\d+/)[0];
    return String(Math.round(temp - 273)) + ' ' + String(String.fromCharCode(176)) + 'C';
  }
  else {
    temp = fahrenheitToCelcius(temp);
    return temp + ' ' + String(String.fromCharCode(176)) + 'C';
  }
}
function celciusToKelvin(temp){
  return Math.round((parseInt(temp) + 273));
}
function celciusToFahreinheit(temp){
  return Math.round((parseInt(temp) * 9/5) + 32);
}
function kelvin(temp){
  if(temp.match(/^\d+$/)){
    return temp + ' ' + String(String.fromCharCode(176)) + 'K';
  }
  else if (temp.match(/[A-Z]/)[0] === 'C'){
    temp = temp.match(/^\d+/)[0];
    temp = celciusToKelvin(temp);
    return temp + ' ' + String(String.fromCharCode(176)) + 'K';
  }
  else if(temp.match(/[A-Z]/)[0] === 'K')
    return temp + ' ' + String(String.fromCharCode(176)) + 'K';
  else if (temp.match(/[A-Z]/)[0] === 'F') {
    temp = fahrenheitTokelvin(temp);
    return temp + ' ' + String(String.fromCharCode(176)) + 'K';
  }
  else {
    return temp + ' ' + String(String.fromCharCode(176)) + 'K';
  }
}
function fahreinheit(temp){
  if(temp.match(/^\d+$/)){
    return String(Math.round(temp*9/5 - 459)) + ' ' + String(String.fromCharCode(176)) + 'F';
  }
  else if (temp.match(/[A-Z]/)[0] === 'C'){
    temp = celciusToFahreinheit(temp);
    return temp + ' ' + String(String.fromCharCode(176)) + 'F';
  }
  else if(temp.match(/[A-Z]/)[0] === 'K'){
    temp = temp.match(/^\d+/)[0];
    return String(Math.round(temp*9/5 - 459)) + ' ' + String(String.fromCharCode(176)) + 'F';
  }
  else {
    return temp ;
  }
}
function fahrenheitTokelvin(temp){
  return Math.round((parseInt(temp) + 459) * 5/9);
}
function fahrenheitToCelcius(temp){
  return Math.round((parseInt(temp) - 32) * 5/9);
}

export default {celcius,kelvin,fahreinheit};
