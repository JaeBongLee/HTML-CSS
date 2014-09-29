var leftButton = document.querySelector(".moveLeft");
var rightButton = document.querySelector(".moveRight");
var touchBook = document.querySelector(".section-bookShelf");

leftButton.addEventListener("touchstart",function(e){
	touchBook.style.marginLeft = "0%";//getCmputedStyle
},false);

rightButton.addEventListener("touchstart",function(e){
	touchBook.style.marginLeft = "-200%";
},false);