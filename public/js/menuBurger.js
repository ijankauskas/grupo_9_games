const burger = document.querySelector(".burger-menu");
const menu = document.querySelector("#menu");

burger.addEventListener("click", function(e){
     menu.classList.toggle ("mostrar")
});
    
menu.addEventListener("mouseleave", ()=>{
    menu.classList.toggle("mostrar")
});