const accountButton = document.querySelector('.nav__button')
const loginButton = document.querySelector('.modal-window__button')
const modalWindow = document.querySelector('.modal-window')
const blur = document.querySelector('.blur')
const burgerButton = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger-menu')
const closeMenu = document.querySelector('.button-close')

accountButton.addEventListener('click', showModalWindow)
loginButton.addEventListener('click', closeModalWindow)
blur.addEventListener('click', closeModalWindow)
burgerButton.addEventListener('click', this.openMenuBurger)
closeMenu.addEventListener('click', this.closeMenuBurger)

function showModalWindow() {
    modalWindow.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}

function closeModalWindow() {
    modalWindow.style.display = 'none'
    document.body.style.overflow = 'scroll'
}

function openMenuBurger() {
    burgerMenu.style.display = 'block'
}

function closeMenuBurger() {
    burgerMenu.style.display = 'none'
}