/* 
* DOM Elements
 */

const wrapper = document.querySelector(".wrapper"),
carousel = document.querySelector(".carousel"),
images = document.querySelectorAll("img"),
button = document.querySelectorAll(".button");


let imagesIndex = 0,
  intervalId;

const autoSlide = () => {
    intervalId = setInterval(() => {
        slideImage(++imagesIndex);
    }, 2000);
}


const slideImage = () => {
    imagesIndex  = imagesIndex  === images.length ? 0 : imagesIndex < 0 ? images.length - 1: imagesIndex;

  carousel.style.transform = `translateX(-${imagesIndex * 100}%)`;
}

const updateClick = (e) => {
    clearInterval(intervalId);

    imagesIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imagesIndex);
    autoSlide();
}

button.forEach(button => button.addEventListener("click", updateClick))

wrapper.addEventListener("mouseover", () => clearInterval(intervalId))

wrapper.addEventListener("mouseleave", autoSlide)
