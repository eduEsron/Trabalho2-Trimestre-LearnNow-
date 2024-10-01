const menu = document.getElementsByClassName("Menu")[0]
const conteudo = document.getElementById("conteudo")
const dropdownMenu = document.getElementById("nav")
const icons = document.getElementsByClassName("icons")[0]
conteudo.addEventListener("mouseover", function(){
    dropdownMenu.style.display="block"
})
dropdownMenu.addEventListener("mouseover", function(){
    dropdownMenu.style.display="block"
})
dropdownMenu.addEventListener("mouseout", function(){
    dropdownMenu.style.display = "none"
})
menu.addEventListener("mouseover", function(){
    dropdownMenu.style.display = "none"
})
