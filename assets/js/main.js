var menuBtn = document.getElementsByClassName('menu-btn')
var mobileMenu = document.getElementsByClassName('mobile-menu')
var clickedBtn = function(){
  console.log(mobileMenu[0]);
  mobileMenu[0].classList.toggle('active')
}


menuBtn[0].addEventListener('click', clickedBtn)


console.log(menuBtn[0])
