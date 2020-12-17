import "./main.scss";

// Бургер
var burger = document.querySelector('.burger-menu');
var menu = document.querySelector('.menu__box');
var burgerOff = false;
function burgerHandler () {
  if(burgerOff == false) {
    menu.classList.add('open');
    burgerOff = true;
  } else {
    menu.classList.remove('open');
    burgerOff = false;
  }
}

burger.onclick = burgerHandler;
