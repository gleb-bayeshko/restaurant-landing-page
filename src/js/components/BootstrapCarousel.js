export class BootstrapCarousel {
    constructor(carouselID) {
        this.carouselID = carouselID;
        this.carouselItems = document.querySelectorAll(`#${this.carouselID} .carousel-inner .carousel-item`);
        this.carouselIndicators = document.querySelector(`#${this.carouselID} .carousel-indicators`);
    }

    addInitialActiveClassToSlide(slideNumber = 0) {
        try {
            if (slideNumber >= this.carouselItems.length) {
                throw new RangeError(`The entered number ${slideNumber} is greater than the number of slides (0-${this.carouselItems.length - 1}). The active slide number is set by default (0)`);
            }
        } catch (error) {
            if (error.name === 'RangeError') {
                console.log(error);
                slideNumber = 0;
            } else {
                throw error;
            }
        }

        this.carouselItems[slideNumber].classList.add('active');
    }

    renderCarouselIndicators() {

        for (let i = 0; i < this.carouselItems.length; i++) {
            let carouselIndicator = document.createElement('li');
            carouselIndicator.setAttribute('data-target', `#${this.carouselID}`);
            carouselIndicator.setAttribute('data-slide-to', `${i}`);
            carouselIndicator.classList.add('carousel-controls-panel__control');
            this.carouselIndicators.append(carouselIndicator);
        }
    }
}