let addedDiv = document.getElementsByClassName("disappear");

window.addEventListener("scroll", function() {
    addDiv();
    removeDiv();
})

function addDiv() {
    let y = window.scrollY;
    console.log(y);
    let i = 0;
    if (y>200 && y<400) {
        addedDiv[i].style.display = "block";
    } else if (y > 400) {
        i += 1;
        addedDiv[i].style.display = "block";
    }
}

function removeDiv() {
    let y = window.scrollY;
    console.log(y);
    let i = 0;
    if (y < 200) {
        addedDiv[i].style.display = "none";
    } else if (y < 400) {
        i+=1;
        addedDiv[i].style.display = "none";
    }
}