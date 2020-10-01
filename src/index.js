import { BurgerMenu } from './js/components/BurgerMenu';
import { Navigation } from './js/components/Navigation';
import { MenuList } from './js/components/MenuList';
import { BootstrapCarousel } from './js/components/BootstrapCarousel';
import { menuData } from './js/menuConstants';
import { menuClasses } from './js/menuConstants';

const burgerButton = document.querySelector('.burger-menu');
const navList = document.querySelector('.navbar__list');
const overlay = document.querySelector('.overlay');
const burgerButtonClassActive = 'burger-menu_active';
const navListClassActive = 'navbar__list_active';
const overlayClassActive = 'overlay_active';
const arrowButton = document.querySelector('.arrow-button__container');

const burgerMenu = new BurgerMenu(burgerButton, burgerButtonClassActive, navList, navListClassActive, overlay, overlayClassActive);
burgerMenu.addBurgerButtonListener();

const navigation = new Navigation(navList, 'navbar__link', arrowButton);
navigation.addScrollOnNavClick();
navigation.addScrollOnArrowButtonClick();

const menuList = new MenuList(menuClasses);
menuList.addMenuNavListener(menuData);

const bootstrapCarousel = new BootstrapCarousel('carouselSpecialties');
bootstrapCarousel.addInitialActiveClassToSlide(0);
bootstrapCarousel.renderCarouselIndicators();
