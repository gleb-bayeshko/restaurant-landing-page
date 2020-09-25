import { BurgerMenu } from './js/BurgerMenu';

const burgerButton = document.querySelector('.burger-menu');
const navList = document.querySelector('.navbar__list');
const overlay = document.querySelector('.overlay');
const burgerButtonClassActive = 'burger-menu_active';
const navListClassActive = 'navbar__list_active';
const overlayClassActive = 'overlay_active';

let burgerMenu = new BurgerMenu(burgerButton, burgerButtonClassActive, navList, navListClassActive, overlay, overlayClassActive);
burgerMenu.addBurgerButtonListener();