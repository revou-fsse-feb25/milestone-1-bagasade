// Toggle class active
const navbarNav = document.querySelector('.navbar-nav')

//When hamburger-menu clicked
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}