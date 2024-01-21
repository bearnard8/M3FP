/*aggiunta/rimozione div scrollando*/

let addedDiv = document.getElementsByClassName("disappear");

window.addEventListener("scroll", function() {
    addRemoveDiv();
})

function addRemoveDiv() {
    let y = window.scrollY;
    let i = 0;
    if (y>200 && y<400) {
        addedDiv[i].style.display = "block";
    } else if (y > 400) {
        i += 1;
        addedDiv[i].style.display = "block";
    }
    if (y < 200) {
        addedDiv[i].style.display = "none";
    } else if (y < 400) {
        i+=1;
        addedDiv[i].style.display = "none";
    }
}

/*carosello*/

// let items = document.querySelectorAll('.carousel .carousel-item')
// console.log(items);

// items.forEach((el) => {
//     const minPerSlide = 6;
//     let next = el.nextElementSibling;
//     for (let i=1; i<minPerSlide; i++) {
//         if (!next) {
//         	next = items[0];
//       	}
//         let cloneChild = next.cloneNode(true);
//         el.appendChild(cloneChild.children[0]);
//         next = next.nextElementSibling;
//     }
// })

const carouselIds = ['#filmCarousel1', '#filmCarousel2', '#filmCarousel3', '#filmCarousel4', '#filmCarousel5'];
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
        } else {
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
        }
    }
});