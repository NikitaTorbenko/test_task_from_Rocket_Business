import { arrow } from './arrow';

export const Slides = () => {  
  const nextBtn = document.querySelector("#nextBtn");
  const prevBtn = document.querySelector("#prevBtn");
  const slides = document.querySelectorAll("#sliderItem");
  
  nextBtn.addEventListener('click', () => nextSlide())
  prevBtn.addEventListener('click', () => prevSlide())
  const showSlide = (n) => {
    const slides = document.querySelectorAll("#sliderItem");
    const counter = document.querySelector("#counter");
    const items = document.querySelector("#items");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let slide of slides) {
      slide.style.display = "none";
    }
    if (window.innerWidth > 1270) {
      slides[slideIndex - 1].style.display = "block";
    } else {
      slides[slideIndex - 1].style.display = "flex";
    }
    
    counter.innerHTML = `${slideIndex}`
    items.innerHTML = `/${slides.length}`
    prevBtn.innerHTML = arrow('#0DBC91')
    nextBtn.innerHTML = arrow('#0DBC91')
    if (slideIndex === 1) {
      prevBtn.innerHTML = arrow('#E1E1E1')
      nextBtn.innerHTML = arrow('#0DBC91')
    } else if (slideIndex === slides.length) {
      prevBtn.innerHTML = arrow('#0DBC91')
      nextBtn.innerHTML = arrow('#E1E1E1')
    }
  };
  
  let slideIndex = 1;

  showSlide(slideIndex);

  const nextSlide = () => {
   slideIndex !== slides.length && showSlide((slideIndex += 1));
  };
  const prevSlide = () => {
    slideIndex !== 1 && showSlide((slideIndex -= 1));
  };

  
};
