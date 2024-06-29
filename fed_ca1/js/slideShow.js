var currentIndex = 0;
displaySlides(currentIndex);

function setSlides(num) {
    currentIndex += num;

    
    displaySlides(currentIndex);
}

function displaySlides(currentIndex) {
    var slides = document.getElementsByClassName("imageSlides");
    

    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    
    slides[currentIndex].style.display = "block";
}
