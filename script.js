// randomly determine header background image and color combination
const colorBG = [
  ['#c884ff', 'bg1.jpg'],
  ['#33e0ff', 'bg2.jpg'],
  ['#67ffa6', 'bg3.jpg'],
  ['#ff91c8', 'bg4.jpg'],
  ['#c884ff', 'bg5.jpg'],
  ['#ffe862', 'bg6.jpg'],
  ['#5bfdba', 'bg7.jpg'],
];

const randomIndex = Math.floor(Math.random() * colorBG.length);

document.documentElement.style.setProperty(
  '--color-accent',
  colorBG[randomIndex][0]
);
document.documentElement.style.setProperty(
  '--header-img',
  `url(images/header-images/${colorBG[randomIndex][1]})`
);


// initial header loading animation
const pageLoadCover = document.querySelector('#page-load-cover');
const pageLoadName = document.querySelector('#page-load-name');
const pageLoadNameCover = document.querySelector('#page-load-name-cover');

const headerMain = document.querySelector('header h1');
const headerParagraph = document.querySelector('header p');
const headerResumeButton = document.querySelector('#header-resume-button');
const navigation = document.querySelector('nav');
const scrollDownButton = document.querySelector('#scroll-down-button');

window.addEventListener('load', () => {
  // animating cover section (occurs every load)
  pageLoadNameCover.style.transformOrigin = 'left';
  pageLoadNameCover.style.animation =
    'grow-right 0.6s ease-in-out forwards 0.3s';

  setTimeout(() => {
    pageLoadName.style.color = 'var(--color-primary)';

    pageLoadNameCover.style.transformOrigin = 'right';
    pageLoadNameCover.style.animation =
      'shrink-right 0.6s ease-in-out forwards';
  }, 900);
});


// scrolling down page events
const navContainer = document.querySelector('#nav-container');
const resumeBottomButton = document.querySelector('#resume-bottom-button');

window.addEventListener('scroll', () => {
  // check if not at top of page to convert nav background from transparent to solid
  if (window.pageYOffset <= 0) {
    navContainer.style.backgroundColor = 'transparent';
  } else {
    navContainer.style.backgroundColor = 'var(--color-secondary-light)';
  }

  // check if scrolled past header section to display bottom right resume button
  if (window.pageYOffset > window.innerHeight - 330) {
    // check to see if style has already been applied.. if so, don't execute
    if (resumeBottomButton.style.bottom != '4vw') {
      resumeBottomButton.style.transition = 'bottom 0.5s ease-in-out';
      resumeBottomButton.style.bottom = '4vw';
      resumeBottomButton.style.right = '4vw';
    }
  } else {
    if (resumeBottomButton.style.right != '-90px') {
      resumeBottomButton.style.transition = 'right 0.5s ease-in-out';
      resumeBottomButton.style.right = '-90px';
      // added 500ms delay for animation to work properly
      setTimeout(() => {
        resumeBottomButton.style.bottom = '-90px';
      }, 500);
    }
  }
});


// focusing and unfocusing on input areas triggers underline effect
const inputUnderlineList = document.querySelectorAll('.inputUnderlineEffect');
const inputList = document.querySelectorAll('.form-input'); // targets non-hidden input


// events for text input
for (let i = 0; i < inputList.length; i++) {
  inputList[i].addEventListener('focus', () => {
    inputUnderlineList[i].style.transform = 'scaleX(1)';
  });

  inputList[i].addEventListener('blur', () => {
    inputUnderlineList[i].style.transform = 'scaleX(0)';
  });
}


// clicking the submit button sends the user a message
const contactSubmitButton = document.querySelector('#contact-submit-button');

contactSubmitButton.addEventListener('click', () => {
  // checking to see if all input has been entered
  for (let i = 0; i < inputList.length; i++) if (!inputList[i].value) return;

  alert('Your message has been sent!');
});


// smooth scroll with jQuery
$(document).ready(function () {
  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1500
    );
  });
});
