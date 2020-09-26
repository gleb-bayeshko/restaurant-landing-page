export class BurgerMenu {
    constructor (burgerButton, burgerButtonActiveClass, navList, navListActiveClass, overlay, overlayActiveClass) {
        this.burgerButton = burgerButton;
        this.navList = navList;
        this.overlay = overlay;
        this.burgerButtonActiveClass = burgerButtonActiveClass;
        this.navListActiveClass = navListActiveClass;
        this.overlayActiveClass = overlayActiveClass;
    }

    addBurgerButtonListener() {
        this.burgerButton.addEventListener('click', () => {
            this.burgerButton.classList.toggle(this.burgerButtonActiveClass);

            this._toggleNavListActiveClass();
            this._toggleOverlayActiveClass();
            
            this.classesAreActive = !this.classesAreActive;
            this._addListenersToRemoveActiveClassesOnAnyClick();
        })
    }

    _toggleNavListActiveClass() {
        this.navList.classList.toggle(this.navListActiveClass);
    }

    _toggleOverlayActiveClass() {
        this.overlay.classList.toggle(this.overlayActiveClass);
    }

    _addListenersToRemoveActiveClassesOnAnyClick() {
        this.overlay.addEventListener('click', this._removeActiveClassesOnAnyClick.bind(this));
        this.navList.addEventListener('click', this._removeActiveClassesOnAnyClick.bind(this));
    }

    _removeActiveClassesOnAnyClick() {
        this.navList.classList.remove(this.navListActiveClass);
        this.overlay.classList.remove(this.overlayActiveClass);
        this.burgerButton.classList.remove(this.burgerButtonActiveClass);
    }
}