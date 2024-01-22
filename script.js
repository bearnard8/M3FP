/*aggiunta/rimozione div scrollando*/

/*let addedDiv = document.getElementsByClassName("disappear");

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
}*/

/*document.addEventListener('DOMContentLoaded', () => {
    const disDiv = document.querySelectorAll('.disappear');
    console.log(disDiv);

    // Function to handle the intersection entries
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('disappear');
                console.log("removed");
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.add('disappear');
                console.log("added");
            }
        });
    };

    // Options for the IntersectionObserver
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5  // Adjust this threshold as needed
    };

    // Create an IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, options);

    // Select all elements with the class 'disappear' and observe them
    disDiv.forEach(element => {
        observer.observe(element);
    });
});*/

// const disDiv = document.querySelectorAll('.disappear');





const carouselContainers = document.querySelectorAll('.disappear');
console.log(carouselContainers);

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to toggle the visibility of the carousel containers
function toggleCarouselVisibility() {
  carouselContainers.forEach(carouselContainer => {
    if (isInViewport(carouselContainer)) {
      carouselContainer.classList.add('visible');
    } else {
      carouselContainer.classList.remove('visible');
    }
  });
}

// Add event listener to check the visibility of the carousel containers on scroll
window.addEventListener('scroll', toggleCarouselVisibility);

// Call the toggleCarouselVisibility function to initialize the visibility state
toggleCarouselVisibility();




/*carosello*/

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