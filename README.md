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
* **BEM**;
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
  - smooth scrolling to the first section on the arrow button click,
  - listener is on the navigation block - determination of a clicked link occurs by event delegation;
  - event target check;
- Inputs;
  ![Inputs](https://lh3.googleusercontent.com/NYSCx7BEtX86WzJrCzuZ-UqOMvfXAmXP9WK0LWQHchkFJaOoHsHPXKh83VPB_6W1IOrq610JBtG3Ev4QXlWq25HRatM_pZnq1H18t2RX49BZOt7WqNuMmS0jtxCB9rFSUEgvdRo02ximae7xdFo3DhnF4p0gURyZYkutPU5H196vfKJKM5nSBcYc14u_lW43AAlRBqLVxJsq0ssmb02GLxxbRQ4hD-IFVPV-R7L1Nv9fUYSOM1CylL0y08d5f23oNCLoAvY0j5LT89WMhyyRASBKbCE9GyoUeiIsWdx5-yAg7nLpPU7JOPKy-7TRmyLC66mvOfSWv_wtGfFCHQTMy5X3w6ms0e6he_1FSER-dHHuqYVeFktvS3ynaozkQhNyTWXQ4FNeR-uJf_tR3Xp7hespi81g738ACjkJ8iJin6BRzGVd6rBKwMmwSM3wDSV-11niGTZbTOfNtFve4txMLgxpdIJNnDXCM4TpiQFvdYwpVL2FXOO4Wr5HTxG77fubxhR1DpZHHbRtQKwJYDmOb_XEtj_0F7TUUrAZ34ETLm6qtrZF5LibwmS_q5wxKAObI1c5kECjmeY7ac3738PoLE9yGkUo3fO12SJ6Ka3XWOsTG5TJDdrxLNsYecLoCcSPoy5ViVVLIZk8dFZvcXV4Op0U9yImGGXpypDiT6zTR6ejHsnT60c1CCdJM2S4Xw=w1337-h617-no?authuser=0)
  - text,
  - email,
  - telephone,
  - select,
  - data,
  - time,
  - textarea;
- Bootstrap carousel;
- Menu selection;
  ![Menu selection](https://lh3.googleusercontent.com/pZY7PBxkc7BlzL08hMds-iEW4DU3z17Rf2cN8aw_uxEYbkWjrD40CY-Md2gSBs8YM2A3j1aNp5elqH2tYUdTcOZlxmmnQvcbzfWswaN9uqQwbZd5Pa78-Egrj5iMBHRsQNDte7Irq5RxZMvHJ31mIOGsNyet6s6e-WmDFoJEC5xQne_vegYcm4H3UXaMSl9e_1VvQgPF637fiwUSw3Pp3fpliH3tPFKDBqJQ_gS_XAT75iDwqcgFt41jp-JQLAWsd_MQzs-w--mWAuJavJvw_-NTgLYgY9z5CeosYSiSRT8awoqdtH5-pA2QEKUUhR4hUSerHOytqf-jdxTOq-gW7bPTNhIcGE9YUu9XDCLaZPY5Dbf9SUt9dKcC4r2XAV6LNlmIN28Dt7PGYimWvYfNztqvQpTEmYopzERO7pt8O-3m83Ark2u7lqzoXXKX65p9vulOhgZQp4AuMYMWTvThpYjqDcobJeKYfK6BucXgAmWfwro9L8qRCKmTK1E9QEydWoAAm7SgDe5OAkQpLgQRdgKQ99dDV1CNE8M0QbvfSDggId5qEiufmVlM1Y5-L86mM0VpWaNDuB8tuHwX9B1DdE7W4OMjZ3pwTtOMXVDg1dlfDNG1BaaNgwjuv_LD-JwTvLsJhT5leCp0aQGXJ43byN-kKYF-gtEf7bWfd2CsjAXauy1uPURHo7jpCWA2Vg=w1352-h475-no?authuser=0)
  - the menu list is initially empty,
  - render the menu list depending on the selected category,
  - listener is on the menu categories block - determination of a selected category occurs by event delegation,
  - event target check;
- Google Maps iframe;
- Full responsive:
  - Navigation:
    !Navigation](https://lh3.googleusercontent.com/kt_QinRn4qn1sRIyiWkkBaRWicp-Dw0oMthgafTzifbc5lD0xUeoEE1EfQDxky4iJ8QCQCIzH39BazXmvihaNr77F1fsT66uG_enz5gD972DhhmL95eYyVwd1VUbpa9RD1w14KhI6GJlxZk-npiIU1sszlCThWNyAt9JkjpibV_UuCJPCyJKdMQImxHcc7TxzAj8K_HH93htvc3ev60lxhJ-Dt094fZMjdBvnVZoUWReAogmZKQjF6P9I-Zg2KOWYeON08jo6P5FWsQc3BM7Anq7IEF0Pkdu0Ov6eiVXVWnhvrS0XgViQGRcMgGghY44UHr6wyu-4mDTNdWax64VyiUStv0YtxSFd2egFQpWrviij_vAvBwbRlmsc7LdLmNjeVIGrEvlwIYlZGLYW1VHHiX55vDzOldMchVPlfeTTZSbV60CLd6P7FPLRkWR5xVKzEGUdLjMcQ_GwyxEJBBP73cUV0_UEJVavMb82lfRBm3XPSikZ0KgP6Bd0-vhhfyJbPVVHU1lxTNOPVt4Epc6IDUEudLXsjYumZVH6EBoODVBqtoa1Y9kMoo59hAg6GY8t00SjFMlC8VQZ9udK3WGSgtIsPSKQc6ZaPofTqh_jYHtzSpW9B8gvokBFvMrWPc6zkIYptMdkzFuiSTaJLaQGbpJuNu0hzUCxSvmzsbuKcy6IoIJLdZ1k37Ql1i7Tg=w783-h629-no?authuser=0)
    - the burger button appears at low screen resolution,
    - the navigation menu appears when the burger button is clicked,
    - the overlay appears with the navigation menu,
    - if the navigation link or the overlay is clicked, they will both disappear;
  - Layout:
    - dynamic changing of columns width,
    - changing of flex-direction in columns depending on current screen resolution;
  - Images:
    - all images are responsive;
  - Fonts:
    - changing of font-size depending on current screen resolution.
