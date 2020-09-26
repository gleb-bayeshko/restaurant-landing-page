import { BurgerMenu } from './js/BurgerMenu';
import { Navigation } from './js/Navigation';

const burgerButton = document.querySelector('.burger-menu');
const navList = document.querySelector('.navbar__list');
const overlay = document.querySelector('.overlay');
const burgerButtonClassActive = 'burger-menu_active';
const navListClassActive = 'navbar__list_active';
const overlayClassActive = 'overlay_active';
const navLinks = document.querySelectorAll('.navbar__link');
const carouselSlidesContainer = document.querySelector('.carousel-slides');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselControls = document.querySelectorAll('.carousel-controls-panel__control');

const burgerMenu = new BurgerMenu(burgerButton, burgerButtonClassActive, navList, navListClassActive, overlay, overlayClassActive);
burgerMenu.addBurgerButtonListener();

const navigation = new Navigation(navLinks);
navigation.addScrollOnNavClick();

$('.carousel').carousel({
    interval: 2000,
    ride: 'carousel'
  })
