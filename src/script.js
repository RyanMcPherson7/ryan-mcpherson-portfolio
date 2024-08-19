// ====================================================
// randomly choose header bg and color combo
// ====================================================
const colorBG = [
  ['#ffb061', 'bg1.jpg'],
  ['#33e0ff', 'bg2.jpg'],
  ['#67ffa6', 'bg3.jpg'],
  ['#ff91c8', 'bg4.jpg'],
  ['#c884ff', 'bg5.jpg'],
  ['#ffe862', 'bg6.jpg'],
  // ['#5BFDCE', 'bg7.jpg'],
]

const randomIndex = Math.floor(Math.random() * colorBG.length)

document.documentElement.style.setProperty(
  '--color-accent',
  colorBG[randomIndex][0],
)
document.documentElement.style.setProperty(
  '--header-img',
  `url(../assets/header-images/${colorBG[randomIndex][1]})`,
)

// ====================================================
// set navbar name based on screen width
// ====================================================
const navHomeName = document.getElementById('nav-home-name')
navHomeName.textContent = window.innerWidth >= 700 ? 'Ryan McPherson' : 'Ryan'

window.addEventListener('resize', () => {
  navHomeName.textContent = window.innerWidth >= 700 ? 'Ryan McPherson' : 'Ryan'
})

// ====================================================
// initial header loading animation
// ====================================================
const pageLoadCover = document.querySelector('#page-load-cover')
const pageLoadName = document.querySelector('#page-load-name')
const pageLoadNameCover = document.querySelector('#page-load-name-cover')

window.addEventListener('load', () => {
  pageLoadNameCover.style.transformOrigin = 'left'
  pageLoadNameCover.style.animation =
    'grow-right 0.6s ease-in-out forwards 0.3s'

  setTimeout(() => {
    pageLoadName.style.color = 'var(--color-primary)'

    pageLoadNameCover.style.transformOrigin = 'right'
    pageLoadNameCover.style.animation = 'shrink-right 0.6s ease-in-out forwards'
  }, 900)
})

// ====================================================
// scrolling down page events
// ====================================================
const navContainer = document.querySelector('#nav-container')
const collapsedResumeButton = document.querySelector('#collapsed-resume-button')

window.addEventListener('scroll', () => {
  // ====================================================
  // set navbar to solid color if not at top of page
  // ====================================================
  if (window.pageYOffset <= 0) {
    navContainer.style.backgroundColor = 'transparent'
  } else {
    navContainer.style.backgroundColor = 'var(--color-secondary-light)'
  }

  // ====================================================
  // display collapsed resume button if scrolled past header
  // ====================================================
  collapsedResumeButton.style.top =
    window.innerHeight / 1.75 - window.scrollY < 0 ? '15px' : '-90px'
})

// ====================================================
// focus animation for contact form input
// ====================================================
const inputUnderlineList = document.querySelectorAll('.inputUnderlineEffect')
const inputList = document.querySelectorAll('.form-input')

for (let i = 0; i < inputList.length; i++) {
  inputList[i].addEventListener('focus', () => {
    inputUnderlineList[i].style.transform = 'scaleX(1)'
  })

  inputList[i].addEventListener('blur', () => {
    inputUnderlineList[i].style.transform = 'scaleX(0)'
  })
}

// ====================================================
// Rick Roll ( ͡° ͜ʖ ͡°)
// ====================================================
const rickRollLink = document.getElementById('rick-roll-link')
const rickRollIcon = document.getElementById('rick-roll-icon')

rickRollIcon.addEventListener('mouseover', () => {
  rickRollIcon.innerHTML = '🎣'
})

rickRollLink.addEventListener('focus', () => {
  rickRollIcon.innerHTML = '🎣'
})

rickRollIcon.addEventListener('mouseout', () => {
  rickRollIcon.innerHTML = '❤️'
})

rickRollLink.addEventListener('blur', () => {
  rickRollIcon.innerHTML = '❤️'
})

// ====================================================
// send user alert if input correct and submit pressed
// ====================================================
// const contactSubmitButton = document.querySelector('#contact-submit-button')

// contactSubmitButton.addEventListener('click', () => {
//   for (let i = 0; i < inputList.length; i++) if (!inputList[i].value) return

//   alert('Your message has been sent!')
// })
