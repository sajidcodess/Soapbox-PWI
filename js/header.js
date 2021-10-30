// get dome elements 
const menu= document.querySelector("nav")
const menuItem= document.querySelectorAll(".menu-item")
const toggleMenu = document.querySelector(".menu-toggle")

// get started page ======================

// menu toggle 
toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})