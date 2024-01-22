/*aggiunta/rimozione div scrollando*/

const disappearingDivs = document.querySelectorAll('.disappear');

// funzione applicata a ogni elemento ispezionato dall'observer
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    const disappearingDiv = entry.target;

    if (entry.isIntersecting) {
      disappearingDiv.classList.add('visible');
    } else {
      disappearingDiv.classList.remove('visible');
    }
  });
}

// opzioni dell'observer
const info = {
  root: null, //riferimento del viewport
  rootMargin: '0px',
  threshold: 0.3 // soglia di visibilità dell'elemento, oltre la quale diventa visibile
};

// creazione dell'observer
const observer = new IntersectionObserver(handleIntersection, info);

// applicazione dell'observer sui singoli elementi
disappearingDivs.forEach(disappearingDiv => {
  observer.observe(disappearingDiv);
});

/*carosello*/

//const carouselIds = ['#filmCarousel1', '#filmCarousel2', '#filmCarousel3', '#filmCarousel4', '#filmCarousel5'];

const carouselSlides = document.querySelectorAll(".carousel");
console.log(carouselSlides);
let carouselIds = [];
console.log(carouselIds);

carouselSlides.forEach( function(slide) {
    carouselIds.push('#' + slide.id);
});
console.log(carouselIds);

let screenWidth = window.innerWidth;

carouselIds.forEach((carouselId) => {
    let carousel = document.querySelector(carouselId);
    
    if (carousel) {
        let items = carousel.querySelectorAll('.carousel-item');

        if (screenWidth >= 768) {
            items.forEach((el) => {
                const minPerSlide = 6;
                let next = el.nextElementSibling;
    
                for (let i = 1; i < minPerSlide; i++) {
                    if (!next) {
                        next = items[0];
                    }
    
                    let cloneChild = next.cloneNode(true);
                    el.appendChild(cloneChild.children[0]);
                    next = next.nextElementSibling;
                }
            });
        } else  if (screenWidth <= 768 && screenWidth >= 576){
            items.forEach((el) => {
                const minPerSlide = 2;
                let next = el.nextElementSibling;
    
                for (let i = 1; i < minPerSlide; i++) {
                    if (!next) {
                        next = items[0];
                    }
    
                    let cloneChild = next.cloneNode(true);
                    el.appendChild(cloneChild.children[0]);
                    next = next.nextElementSibling;
                }
            });
        } else {
            items.forEach((el) => {
                const minPerSlide = 1;
                let next = el.nextElementSibling;
    
                for (let i = 1; i < minPerSlide; i++) {
                    if (!next) {
                        next = items[0];
                    }
    
                    let cloneChild = next.cloneNode(true);
                    el.appendChild(cloneChild.children[0]);
                    next = next.nextElementSibling;
                }
            });
        }
    }
});