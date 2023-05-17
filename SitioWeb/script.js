const iconMenu = document.querySelector(".icon-menu")

const ulMenu = document.querySelector(".menu-container");

iconMenu.addEventListener("click", function(){
    console.log(ulMenu.classList.toggle("hidden"));
})