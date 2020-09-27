export class MenuList {
    constructor(data, menuNavClass, tableClass, cellClass, cellLayoutClass, cellNameClass, cellTitleClass, cellSubtitleClass, cellPriceClass, navLinkActiveClass, ...restClasses) {
        this.data = data;
        this.menuNavClass = menuNavClass;
        this.tableClass = tableClass;
        this.cellClass = cellClass;
        this.cellLayoutClass = cellLayoutClass;
        this.cellNameClass = cellNameClass;
        this.cellTitleClass = cellTitleClass;
        this.cellSubtitleClass = cellSubtitleClass;
        this.cellPriceClass = cellPriceClass;
        this.navLinkActiveClass = navLinkActiveClass;
        this.rest = restClasses;
    }

    addMenuNavListener() {
        let menuNav = document.querySelector(`.${this.menuNavClass}`);
        menuNav.addEventListener('click', (e) => {
            this._selectActiveNavLink(e.target)
            this._renderCurrentMenu(e.target.textContent);
        })

        this._initStartMenu();
    }

    _initStartMenu() {
        let startActiveNavLink = document.querySelector(`.${ this.menuNavClass} .${this.navLinkActiveClass}`);
        this._renderCurrentMenu(startActiveNavLink.textContent);
    }

    _selectActiveNavLink(link) {
        document.querySelectorAll(`.${this.navLinkActiveClass}`).forEach(link => link.classList.remove(this.navLinkActiveClass));
        link.classList.add(this.navLinkActiveClass);
    }

    _renderCurrentMenu(currentMenuTitle) {
        let currentMenu = this.data[currentMenuTitle.toUpperCase()];
        let table = document.querySelector(`.${this.tableClass}`);
        this._setInnerHtmlOfElement(table, '');
        for (let i = 0; i < currentMenu.length; i++) {

            let cell = this. _createCell();
            let cellName = this._createCellName(currentMenu[i]);
            let cellPrice = this._createCellPrice(currentMenu[i]);

            this._appendElementsToParent(cell, cellName, cellPrice);
            this._appendElementsToParent(table, cell);
        }
    }

    _createCell() {
        let cell = this._createElementWithClasses('div', this.cellClass, this.cellLayoutClass);

        return cell;
    }

    _createCellName({title, subtitle}) {
        let cellName = this._createElementWithClasses('div', this.cellNameClass);

        let cellTitle = this._createCellTitle(title);
        let cellSubtitle = this._createCellSubtitle(subtitle);

        this._appendElementsToParent(cellName, cellTitle, cellSubtitle);

        return cellName;
    }

    _createCellTitle(title) {
        let cellTitle = this._createElementWithClasses('h5', this.cellTitleClass);
        this._setInnerHtmlOfElement(cellTitle, title);

        return cellTitle;
    }

    _createCellSubtitle(subtitle) {
        let cellSubitle = this._createElementWithClasses('p', this.cellSubtitleClass);
        this._setInnerHtmlOfElement(cellSubitle, subtitle);

        return cellSubitle;
    }

    _createCellPrice({price}) {
        let cellPrice = this._createElementWithClasses('div', this.cellPriceClass);
        this._setInnerHtmlOfElement(cellPrice, price);

        return cellPrice;
    }

    _createElementWithClasses(elementType, ...elementClasses) {
        let element = document.createElement(elementType);
        elementClasses.forEach(elementClass => element.classList.add(elementClass))

        return element;
    }

    _appendElementsToParent(parent, ...elements) {
        let elementParent = parent;
        elements.forEach(element => elementParent.append(element));
    }

    _setInnerHtmlOfElement(element, innerHTML) {
        element.innerHTML = innerHTML;
    }
}