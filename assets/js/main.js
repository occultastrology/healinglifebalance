'use strict'

let home = document.getElementById('home')
let about = document.getElementById('about')
let services = document.getElementById('services')
let store = document.getElementById('store')
let contact = document.getElementById('contact')

let homeButton = document.getElementById('homeButton')
let aboutButton = document.getElementById('aboutButton')
let servicesButton = document.getElementById('servicesButton')
let storeButton = document.getElementById('storeButton')
let contactButton = document.getElementById('contactButton')
let startTodayButton = document.getElementById('startToday')
let blogButton = document.getElementById('blogButton')

let content = [home, services, about, store, contact, blog]

document.addEventListener("click", (x) => {

  let buttons = [
    homeButton,
    servicesButton,
    aboutButton,
    storeButton,
    contactButton,
    startTodayButton,
    blogButton
  ]

  let target = x.target

  buttons.forEach((x, i) => {
    if (target == x) {
      clearAll()

      if (i == 5) {
        showContent(1)
      } else {
        showContent(i)
      }
    }

  })

});

function clearAll() {
  content.forEach(x => {
    x.classList.add('hidden')
  })
}

function showContent(number) {
  content[number].classList.remove('hidden')
}
