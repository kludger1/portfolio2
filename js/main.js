const toggle = document.querySelector(".navbar__toggle")
const navList = document.querySelector(".navbar__list")

toggle.addEventListener("click", () => {
    navList.classList.toggle("navbar__list--hide")
})