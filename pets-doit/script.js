//JS of responsive nav menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");


document.querySelector('.nav-home').onclick =() =>{
    navigation.classList.remove("active")
    menuBtn.classList.remove("active")
}

document.querySelector('.nav-about').onclick =() =>{
    navigation.classList.remove("active")
    menuBtn.classList.remove("active")
}

document.querySelector('.nav-service').onclick =() =>{
    navigation.classList.remove("active")
    menuBtn.classList.remove("active")
}

document.querySelector('.nav-portfolio').onclick =() =>{
    navigation.classList.remove("active")
    menuBtn.classList.remove("active")
}

document.querySelector('.nav-contact').onclick =() =>{
    navigation.classList.remove("active")
    menuBtn.classList.remove("active")
}

menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});

//JS of video slide nav-btn
const btns = document.querySelectorAll(".slider-nav-btn");
const slides = document.querySelectorAll(".video-silde");
const contents = document.querySelectorAll(".content");


var slideNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i)=>{
    btn.addEventListener("click",()=>{
        slideNav(i);
    });
});

//JS of video  nav scroll
var nav = document.querySelector('header');

window.addEventListener('scroll',function(){
    if(window.pageYOffset > 150){
        nav.classList.add('header-scroll','shadow');
    }else{
        nav.classList.remove('header-scroll','shadow');
    }
})

//JS Chat
function actionToggle(){
    var action = document.querySelector('.chat-btn');
    action.classList.toggle('active')
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
