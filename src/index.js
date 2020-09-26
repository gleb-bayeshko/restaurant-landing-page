import { BurgerMenu } from './js/BurgerMenu';
import { Navigation } from './js/Navigation';
import css from './sass/main.css';

const burgerButton = document.querySelector('.burger-menu');
const navList = document.querySelector('.navbar__list');
const overlay = document.querySelector('.overlay');
const burgerButtonClassActive = 'burger-menu_active';
const navListClassActive = 'navbar__list_active';
const overlayClassActive = 'overlay_active';
const navLinks = document.querySelectorAll('.navbar__link');
const arrowButton = document.querySelector('.arrow-button__container');

const burgerMenu = new BurgerMenu(burgerButton, burgerButtonClassActive, navList, navListClassActive, overlay, overlayClassActive);
burgerMenu.addBurgerButtonListener();

const navigation = new Navigation(navLinks, arrowButton);
navigation.addScrollOnNavClick();
navigation.addScrollOnArrowButtonClick();

$('.carousel').carousel({
    interval: 2000,
    ride: 'carousel'
  })
