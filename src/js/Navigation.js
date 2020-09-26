export class Navigation {
    constructor(navLinks, arrowButton) {
        this.navLinks = navLinks;
        this.arrowButton = arrowButton;
    }

    addScrollOnNavClick() {
        this.navLinks.forEach(navLink => {
            navLink.addEventListener('click', (event) => this._scrollOnNavClick(event, navLink));
        })
    }

    addScrollOnArrowButtonClick() {
        console.log(this.arrowButton)
        this.arrowButton.addEventListener('click', () => this._scrollOnArrowButtonClick());
    }

    _scrollOnNavClick(event, navLink) {
        event.preventDefault();
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