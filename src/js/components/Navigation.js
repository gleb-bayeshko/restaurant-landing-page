export class Navigation {
    constructor(navList, navLinkClass, arrowButton) {
        this.navList = navList;
        this.navLinkClass = navLinkClass;
        this.arrowButton = arrowButton;
    }

    addScrollOnNavClick() {
        this.navList.addEventListener('click', (event) => {
            if (!event.target.classList.contains(this.navLinkClass)) return;

            event.preventDefault();
            this._scrollOnNavClick(event.target);
        })

    }

    addScrollOnArrowButtonClick() {
        this.arrowButton.addEventListener('click', () => this._scrollOnArrowButtonClick());
    }

    _scrollOnNavClick(navLink) {
        let navLinkRefAttribute = navLink.getAttribute('href');
        let anchor = document.querySelector(navLinkRefAttribute);
        let anchorCoordinates = anchor.getBoundingClientRect();

        window.scrollTo({
            top: anchorCoordinates.top + pageYOffset,
            behavior: 'smooth'
        })
    }

    _scrollOnArrowButtonClick () {
        let anchor = document.querySelectorAll('section')[1];
        let anchorCoordinates = anchor.getBoundingClientRect();

        window.scrollTo({
            top: anchorCoordinates.top + pageYOffset,
            behavior: 'smooth'
        })
    }
}