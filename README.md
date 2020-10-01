# Restaurant landing page #
![Restaurant landing page](public/preview.png)

[![Demo-button](public/demo-button.png)](https://gleb-bayeshko.github.io/restaurant-landing-page/)

## Technology stack ##
* **HTML**
* **CSS/SASS** *(SCSS)*:
  * flex,
  * responsive design,
  * media queries,
  * constants,
  * mixins,
  * placeholders,
  * folders and files architecture,
  * final main.scss file with imports of all other files,
  * animations (logo, burger button, navigation menu at low screen resolution);
* BEM;
* **JavaScript** *(ECMAScript 6/7/8)*:
  * modules (import/export of components),
  * classes,
  * event delegation,
  * render elements,
  * try/catch,
  * destructuring assignment,
  * arrow functions,
  * rest parameters,
  * spread syntax,
  * default arguments value and etc.
* **Webpack** *(webpack.config.js)*:
  * plugins,
  * loaders,
  * modes (dev/prod),
  * final bundle.

## Functionality ##
- Navigation:
  - smooth scrolling to the anchors on the navigation buttons click,
  - smooth scrolling to the first section on the arrow button click;
- Inputs;
  - text,
  - email,
  - telephone,
  - select,
  - data,
  - time,
  - textarea;
- Bootstrap carousel;
- Menu selection;
  - the menu list is initially empty,
  - render the menu list depending on the selected category,
  - listener is on the menu categories block - determination of the selected category occurs by events delegation,
  - event target check;
- Google Maps iframe;
- Full responsive:
  - Navigation:
    - burger button appears at low screen resolution,
    - navigation menu appears when burger button is clicked,
    - overlay appears with navigation menu,
    - if you click on the navigation link or on the overlay, they will both disappear;
  - Layout:
    - changing flex-direction in columns depending on current screen resolution,
    - dynamic changing columns width;
  - Images:
    - all images are responsive;
  - Fonts:
    - changing font-size depending on current screen resolution.