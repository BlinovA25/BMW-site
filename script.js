
let dots = document.getElementsByClassName('dot'),
    dotsArea = document.getElementById('dots-block'),
    slides = document.getElementsByClassName('slider-item'),
    prev = document.getElementById('prevPic'),
    next = document.getElementById('nextPic'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) 
    {
        if (n < 1) 
        { slideIndex = slides.length; } 
        else if (n > slides.length) 
        { slideIndex = 1; }

        for (let i = 0; i < slides.length; i++) 
            { slides[i].style.display = 'none'; }

        for (let i = 0; i < dots.length; i++) 
        { dots[i].classList.remove('active'); }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add('active');
    }

function plusSlides (n) 
{ showSlides(slideIndex += n); }

function minusSlides (n) 
{ showSlides(slideIndex -= n); }

function currentSlide (n) {
    showSlides(slideIndex = n)
}
nextPic.onclick = function () {
    plusSlides(1);
}
prevPic.onclick = function () {
    plusSlides(-1);
}