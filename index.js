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
// console.log(job);

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
  // console.log(dynamic);
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

// ##########################Dark-light mode###################################################################################################
let themeMode = document.getElementById('theme-mode');
let localStorageTheme = localStorage.getItem('theme');
let systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');
let resultId = document.getElementById('result_id');

themeMode.addEventListener('click', (e) => {
  if (currentTheme === 'light') {
    localStorage.setItem('theme', 'dark');
    resultId.setAttribute('data-theme', 'light');
    currentTheme = 'dark';
  } else {
    localStorage.setItem('theme', 'light');
    resultId.setAttribute('data-theme', 'dark');
    currentTheme = 'light';
  }
});

let themeChangeMode = (localStorageTheme, systemSettingDark) => {
  if (localStorageTheme !== null) return localStorageTheme;
  else if (systemSettingDark.matches == 'light') return 'dark';
  else return 'light';
};

let currentTheme = themeChangeMode(localStorageTheme, systemSettingDark);

// const themeMode = document.getElementById('theme-mode');
// const localStorageTheme = localStorage.getItem('theme');
// const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');
// // let theme = 'light';

// let getTheme = (localStorageTheme, systemSettingDark) => {
//   if (localStorageTheme !== null) return localStorageTheme;
//   else if (systemSettingDark.matches) return 'dark';
//   else return 'light';
// };

// const changeThemeMode = (theme) => localStorage.setItem('theme', theme);

// themeMode.addEventListener('click', (e) => {
//   let newTheme = 'light';
//   if (getTheme === 'light') newTheme = 'dark';
//   else if (getTheme === 'dark') newTheme = 'light';

//   getTheme = newTheme;
//   changeThemeMode(newTheme);

//   console.log(newTheme);
// });

// ################################################SignIn Modal##############################################################################
let SignIn = document.getElementById('SignIn');
let createAccount = document.getElementById('createAccount');
let signInModal = document.querySelector('.signInModal');
let closeDialog = document.getElementById('close_dialog');
let confirmDialog = document.getElementById('confirm_dialog');
let alertModal = document.querySelector('.alertModal');
let cancelBtn = document.getElementById('cancelbtn');
let username = document.getElementById('username');
let password = document.getElementById('password');
let loginButton = document.getElementById('loginButton');
let nonSubmitModal = document.querySelector('.nonSubmitModal');
let form = document.getElementById('form');
let oKbtn = document.getElementById('oKbtn');
let closeModalButton = document.getElementById('closeModalButton');
let siginConfirmCancel = document.querySelector('.siginConfirmCancel');
const modalsignIn = document.querySelector('[data-signin-confirm]');
const creatloginacModal = document.querySelector('.creatloginacModal');
let logoutbtn = document.getElementById('logoutbtn');
let welcomeText = document.querySelector('.welcomeText');

SignIn.addEventListener('click', (e) => {
  signInModal.showModal();
});

cancelBtn.addEventListener('click', (e) => {
  signInModal.close();
});

const handleWelcome = () => {};

form.addEventListener('submit', (e) => {
  let user = username.value;
  let pass = password.value;
  e.preventDefault();
  if (username.value === '' && password.value === '') {
    nonSubmitModal.showModal();
  } else {
    const userNameData = localStorage.getItem('createdUser');
    const userPassData = localStorage.getItem('createdPassword');

    if (userNameData === user && userPassData === pass) {
      alert(`Welcome back', ${username.value}`);
      signInModal.close();
      SignIn.style.display = 'none';
      createAccountLink.style.display = 'none';
      welcomeText.textContent = `Welcome ${userNameData}`;
      logoutbtn.style.display = 'block';
    } else {
      modalsignIn.showModal();
    }
  }
  username.value = '';
  password.value = '';
});

logoutbtn.addEventListener('click', (e) => {
  SignIn.style.display = 'block';
  createAccountLink.style.display = 'block';
  logoutbtn.style.display = 'none';
  welcomeText.textContent = ` `;
});

closeModalButton.addEventListener('click', (e) => {
  creatloginacModal.close();
});
console.log(siginConfirmCancel);
siginConfirmCancel.addEventListener('click', (e) => {
  creatloginacModal.close();
  signInModal.close();
  createAnAccountModal.showModal();
});

oKbtn.addEventListener('click', (e) => {
  nonSubmitModal.close();
});

// ###################################################### Create An Account ##########################################################################################
let createAccountForm = document.getElementById('createAccountForm');
let createAnAccountModal = document.querySelector('.createAnAccountModal');
let createAccountLink = document.getElementById('createAccountLink');
let form1 = document.getElementById('form1');
let user = document.getElementById('user');
let pass = document.getElementById('pass');
let email = document.getElementById('Email');

form1.addEventListener('submit', (e) => {
  e.preventDefault();
  let usname = user.value;
  let pswd = pass.value;

  if (user.value === '' && pass.value === '' && email.value === '') {
    nonSubmitModal.showModal();
  } else {
    localStorage.setItem('createdUser', usname);
    localStorage.setItem('createdPassword', pswd);
  }
});

createAccountLink.addEventListener('click', (e) =>
  createAnAccountModal.showModal()
);

// ################################################# MenuBar #######################################################################################################

let navlink = document.querySelectorAll('.navlink');
// navlink.forEach((element) => {
//   element.addEventListener('click', (e) => {
//     navlink.forEach((element) => {
//       e.target.parentNode.classList.remove('active');
//     });

//     // e.target.classList.add('active');
//     e.target.parentNode.classList.add('active');
//   });
// });

navlink.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    console.log(
      'This is element target: ',
      e.target.parentNode.nodeName === 'UL'
    );

    if (e.target.parentNode.nodeName === 'UL') return;
    navlink.forEach((tab) => tab.classList.remove('active'));
    e.target.parentNode.classList.add('active');
  });
});


//#region - Scroll based nav
const nav = document.getElementsByTagName('nav');
let prevScrollPos = window.scrollY;

window.onscroll = () => {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) nav[0].style.top = '0';
  else nav[0].style.top = '-20%';

  prevScrollPos = currentScrollPos;
};
//#endregion - Scroll based nav