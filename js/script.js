const barsNavbar = document.querySelector(".barsNavbar")
const navUl = document.querySelector(".nav-ul")

barsNavbar.addEventListener('click', ()=>{
    navUl.classList.toggle("active")
})