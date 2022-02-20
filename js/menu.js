let showmenu = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = showmenu ? "hidden" : "initial"

    menuSection.classList.toggle("on", showmenu)
    showmenu = !showmenu;
});
