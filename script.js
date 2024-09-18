const home = document.getElementById("Home")
const conteudo = document.getElementById("conteudo")
const sobre = document.getElementById("sobre")
const menu = document.getElementsByClassName("Menu")[0]
const contentMenu = document.getElementById("contentMenu")
conteudo.addEventListener("mouseover", function(){
    contentMenu.style.display="flex"
})
contentMenu.addEventListener("mouseout", function(){
    contentMenu.style.display = "none"
})