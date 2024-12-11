function menu(){
    const icon = document.querySelector(".menu-icon")
    const menu = document.querySelector(".menu")
    console.log("button clicked......")

    icon.classList.toggle("openMenu")
    menu.classList.toggle("openMenu")
}