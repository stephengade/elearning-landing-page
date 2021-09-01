// selectors
const trigger = document.querySelector('.hamburger')
const hamburger = document.querySelector('nav .hamburger span')
const menu = document.querySelector('.nav-menu')

// add event listener
// kenny was here :)e
trigger.addEventListener('click', menuTrigger)

// function

let showMenu = false

function menuTrigger() {
  hamburger.classList.add('opacity')

  if (!showMenu) {
    menu.style.display = 'block'

    showMenu = true
  } else {
    hamburger.classList.remove('opacity')
    menu.style.display = 'none'

    showMenu = false
  }
}

// Scroll trigger

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero-section',
  },
})

tl.from('.hero-text', { x: -400, opacity: 0, duration: 1.5 })

// hero text

let th = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero-main',
  },
})

th.from('.hero-image', { x: 400, opacity: 0, duration: 1.5 })

// Cta
let tq = gsap.timeline({
  scrollTrigger: {
    trigger: '.registration',
  },
})

tq.from('form', { x: -200, opacity: 0, duration: 2 })

// text

let tp = gsap.timeline({
  scrollTrigger: {
    trigger: '.partners',
  },
})

tp.from('.imgs', { y: 200, opacity: 0, duration: 3.5 })

//

// Cta
let tj = gsap.timeline({
  scrollTrigger: {
    trigger: '.courses',
  },
})

tj.from('.trackcard', { y: 400, opacity: 0, duration: 3.5 })

// text

let tk = gsap.timeline({
  scrollTrigger: {
    trigger: '.benefits',
  },
})

tk.from('.benefit-image', { x: 200, opacity: 0, duration: 3.5 })

// last cta

// scroll

const scrollArrow = document.querySelector('.scroll-down')
const registerBtn = document.querySelector('.register')
const registerBtn_2 = document.querySelector('.hero-register')
const registerForm = document.querySelector('.form')

scrollArrow.addEventListener('click', () => {
  window.scrollBy(0, 2500)
})

registerBtn.addEventListener('click', () => {
  registerForm.scrollIntoView()
})

registerBtn_2.addEventListener('click', () => {
  registerForm.scrollIntoView()
})
