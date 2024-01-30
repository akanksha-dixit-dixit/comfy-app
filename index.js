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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const review = [
  {
    id: 5,
    img: './images/img1.png',
    author: 'Stone Eater',
    job: 'System Architech',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi earum magnam atque et eius officia molestias voluptate necessitatibus hic optio est, at, corporis voluptas nobis dolorem natus nihil perferendis harum',
  },
  {
    id: 1,
    img: './images/review-1.jpg',
    author: 'John',
    job: 'web developer',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi earum magnam atque et eius officia molestias voluptate necessitatibus hic optio est, at, corporis voluptas nobis dolorem natus nihil perferendis harum',
  },
  {
    id: 2,
    img: './images/review-2.jpg',
    author: 'Smith',
    job: 'web designer',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi earum magnam atque et eius officia molestias voluptate necessitatibus hic optio est, at, corporis voluptas nobis dolorem natus nihil perferendis harum',
  },
  {
    id: 3,
    img: './images/review-3.jpg',
    author: 'And',
    job: 'web developer',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi earum magnam atque et eius officia molestias voluptate necessitatibus hic optio est, at, corporis voluptas nobis dolorem natus nihil perferendis harum',
  },
  {
    id: 4,
    img: './images/review-4.png',
    author: 'Micheal',
    job: 'Dev Ops',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi earum magnam atque et eius officia molestias voluptate necessitatibus hic optio est, at, corporis voluptas nobis dolorem natus nihil perferendis harum',
  },
  {
    id: 6,
    img: './images/img1.png',
    author: 'Ryhne',
    job: 'Quality Assurance',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi earum magnam atque et eius officia molestias voluptate necessitatibus hic optio est, at, corporis voluptas nobis dolorem natus nihil perferendis harum',
  },
  {
    id: 7,
    img: './images/img1.png',
    author: 'Nosche',
    job: 'Security guard',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi earum magnam atque et eius officia molestias voluptate necessitatibus hic optio est, at, corporis voluptas nobis dolorem natus nihil perferendis harum',
  },
  {
    id: 8,
    img: './images/img1.png',
    author: 'sillysunshine',
    job: 'Unknown',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi earum magnam atque et eius officia molestias voluptate necessitatibus hic optio est, at, corporis voluptas nobis dolorem natus nihil perferendis harum',
  },
];

const buttonLeftTestimonial = document.querySelector('.buttonLeftTestimonial');
const buttonRightTestimonial = document.querySelector(
  '.buttonRightTestimonial'
);
const job = document.querySelector('#job');
const dynamic = document.querySelectorAll('.dynamic');
console.log(job);

let reviewCounter = 0;
buttonRightTestimonial.addEventListener('click', (e) => {
  if (reviewCounter === review.length - 1) {
    return;
  } else {
    reviewCounter++;
  }
  dynamic[0].src = review[reviewCounter].img;
  dynamic[1].innerHTML = review[reviewCounter].author;
  dynamic[2].innerHTML = review[reviewCounter].job;
  dynamic[3].innerHTML = review[reviewCounter].content;
  console.log(dynamic);
});

buttonLeftTestimonial.addEventListener('click', (e) => {
  if (reviewCounter !== 0) {
    reviewCounter--;
  }
  dynamic[0].src = review[reviewCounter].img;
  dynamic[1].innerHTML = review[reviewCounter].author;
  dynamic[2].innerHTML = review[reviewCounter].job;
  dynamic[3].innerHTML = review[reviewCounter].content;
});
