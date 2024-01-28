const miniContainer = document.querySelectorAll('.mini-container');
const slides = document.querySelectorAll('.slides');
const buttonLeft = document.querySelector('.buttonLeft');
const buttonRight = document.querySelector('.buttonRight');

let currentIndex = 0;

buttonRight.addEventListener('click', (e) => {
  if (currentIndex === slides.length - 1) {
  } else {
    currentIndex++;
  }
  ChangeSlidesRight(currentIndex);
});

buttonLeft.addEventListener('click', (e) => {
  if (currentIndex === 0) {
  } else {
    currentIndex--;
  }
  ChangeSlidesRight(currentIndex);
});

const ChangeSlidesRight = (currentIndex) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
  });
};
