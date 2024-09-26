const menu = document.getElementsByClassName("Menu")[0]
const conteudo = document.getElementById("conteudo")
const dropdownMenu = document.getElementById("nav")
conteudo.addEventListener("mouseover", function(){
    dropdownMenu.style.display="block"
})
dropdownMenu.addEventListener("mouseout", function(){
    dropdownMenu.style.display = "none"
})
menu.addEventListener("mouseover", function(){
    dropdownMenu.style.display = "none"
})