const containerEnd = document.getElementById("containerEnd")
const screenWidth  = window.matchMedia( '(min-width: 850px)' );
const stars = '<img src="./images/stars.png">'
if(screenWidth.matches == true ){
    containerEnd.innerHTML += stars
}

