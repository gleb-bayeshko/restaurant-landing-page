export class Navigation {
    constructor(navLinks) {
        this.navLinks = navLinks;
    }

    addScrollOnNavClick() {
        this.navLinks.forEach(navLink => {
            navLink.addEventListener('click', (event) => this._scrollOnNavClick(event, navLink));
        })
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
}