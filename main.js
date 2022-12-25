const openMenu = document.getElementById("open")
const closeMenu = document.getElementById("close")
const mobileMenu = document.querySelector(".nav-menu")
const container = document.querySelector(".main-container")
const mediaqueryList = window.matchMedia("(min-width:768px)");
mediaqueryList.addListener(function (EventoMediaQueryList) {
    if (EventoMediaQueryList.matches) {
        closeMenu.classList.remove("on")
        container.style.filter = null
    } else {
        closeMenu.classList.add("on")
    }

});
openMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("show")
    container.style.filter = "blur(5px) brightness(0.7)"
    container.style.overflow = "hidden"
    openMenu.classList.add("off")
    closeMenu.classList.add("on")
})
closeMenu.addEventListener("click", () => {
    openMenu.classList.remove("off")
    closeMenu.classList.remove("on")
    mobileMenu.classList.toggle("show")
    container.style.filter = null
})
