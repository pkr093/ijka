function gapSize(){
    document.getElementById('home1').style.height='14vh';
}

let burger=document.querySelector('.burger');
let navbar=document.querySelector('.navbar');
let navLeft=document.querySelector('.nav-left');


burger.addEventListener('click',()=>{
    navbar.classList.toggle('nav-height-res');
    navLeft.classList.toggle('nav-vis-res');
   
})
