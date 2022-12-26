const openMenu = document.getElementById("open")
const closeMenu = document.getElementById("close")
const mobileMenu = document.querySelector(".nav-menu")
const main = document.querySelector(".main-container")
const footer = document.querySelector(".section-footer")
const mediaqueryList = window.matchMedia("(min-width:768px)");
mediaqueryList.addListener(function (EventoMediaQueryList) {
    if (EventoMediaQueryList.matches) {
        // console.log("hola");
        // openMenu.classList.add("show")
        // closeMenu.classList.add("show")
    }

});
openMenu.addEventListener("click", () => {
    // mobileMenu.style.display = "flex"
    mobileMenu.classList.add("active")
    openMenu.classList.add("show")
    closeMenu.classList.remove("show")
    main.classList.add("screen-filter")
    footer.classList.add("screen-filter")
})
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    closeMenu.classList.add("show")
    openMenu.classList.remove("show")
    main.classList.remove("screen-filter")
    footer.classList.remove("screen-filter")
})
