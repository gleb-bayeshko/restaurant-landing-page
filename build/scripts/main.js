!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(t,n,r,i,o,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.burgerButton=t,this.navList=r,this.overlay=o,this.burgerButtonActiveClass=n,this.navListActiveClass=i,this.overlayActiveClass=s}var t,n,i;return t=e,(n=[{key:"addBurgerButtonListener",value:function(){var e=this;this.burgerButton.addEventListener("click",(function(){e.burgerButton.classList.toggle(e.burgerButtonActiveClass),e._toggleNavListActiveClass(),e._toggleOverlayActiveClass(),e.classesAreActive=!e.classesAreActive,e._addListenersToRemoveActiveClassesOnAnyClick()}))}},{key:"_toggleNavListActiveClass",value:function(){this.navList.classList.toggle(this.navListActiveClass)}},{key:"_toggleOverlayActiveClass",value:function(){this.overlay.classList.toggle(this.overlayActiveClass)}},{key:"_addListenersToRemoveActiveClassesOnAnyClick",value:function(){this.overlay.addEventListener("click",this._removeActiveClassesOnAnyClick.bind(this)),this.navList.addEventListener("click",this._removeActiveClassesOnAnyClick.bind(this))}},{key:"_removeActiveClassesOnAnyClick",value:function(){this.navList.classList.remove(this.navListActiveClass),this.overlay.classList.remove(this.overlayActiveClass),this.burgerButton.classList.remove(this.burgerButtonActiveClass)}}])&&r(t.prototype,n),i&&r(t,i),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.navLinks=t,this.arrowButton=n}var t,n,r;return t=e,(n=[{key:"addScrollOnNavClick",value:function(){var e=this;this.navLinks.forEach((function(t){t.addEventListener("click",(function(n){return e._scrollOnNavClick(n,t)}))}))}},{key:"addScrollOnArrowButtonClick",value:function(){var e=this;console.log(this.arrowButton),this.arrowButton.addEventListener("click",(function(){return e._scrollOnArrowButtonClick()}))}},{key:"_scrollOnNavClick",value:function(e,t){e.preventDefault();var n=t.getAttribute("href"),r=document.querySelector(n).getBoundingClientRect();window.scrollTo({top:r.top+pageYOffset,behavior:"smooth"})}},{key:"_scrollOnArrowButtonClick",value:function(){var e=document.querySelectorAll("section")[1].getBoundingClientRect();window.scrollTo({top:e.top+pageYOffset,behavior:"smooth"})}}])&&o(t.prototype,n),r&&o(t,r),e}(),l=(n(0),document.querySelector(".burger-menu")),a=document.querySelector(".navbar__list"),c=document.querySelector(".overlay"),u=document.querySelectorAll(".navbar__link"),v=document.querySelector(".arrow-button__container");new i(l,"burger-menu_active",a,"navbar__list_active",c,"overlay_active").addBurgerButtonListener();var f=new s(u,v);f.addScrollOnNavClick(),f.addScrollOnArrowButtonClick(),$(".carousel").carousel({interval:2e3,ride:"carousel"})}]);