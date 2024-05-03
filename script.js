// console.log('working ');
// ELEMENTS DECLARATION
let hamburgers=document.querySelector('.hamburgers');
let phoneNavbar=document.querySelector('.phoneNavbar');
let phoneNavbarGo=document.querySelector('.phoneNavbarGo');
let navCenter=document.querySelector('.nav-center');



// NAVBAR AND ARROW BUTTON VISIBILITY FUNCTION
window.addEventListener('scroll',function(){
    let navheader=document.querySelector('.nav-header');
    let arrow=document.querySelector('.arrow');
    navheader.classList.toggle('sticky',window.scrollY >0)
    arrow.classList.toggle('arrow-up',window.scrollY >5)
 
})

// ARROW UP SCROLLING
function scrollWin(){
 window.scrollTo({top:0,behavior:'smooth'})
}
let arrowBtn=document.getElementById('arrow');
arrowBtn.addEventListener('click',scrollWin)

//FOR REMOVING  SIDEBAR WHILE CLICKING ON THE LINKS
let as=document.querySelectorAll('a')
as.forEach(current => {
    current.addEventListener('click',function(e){
      hamburgers.classList.add('fa-bars')
      hamburgers.classList.remove('fa-times')
      navCenter.classList.add('phoneNavbarGo')
      // e.id.scrollIntoView({behavior:"smooth"})
    
    })
});

// SIDEBAR FUNCTION
hamburgers.addEventListener('click',function(){
    // console.log('worked')
    phoneNavbar.classList.toggle('phoneNavbarGo');
    if (phoneNavbar.classList.contains('phoneNavbarGo')){
        hamburgers.classList.remove('fa-times')
        hamburgers.classList.add('fa-bars')
        
    }
    else{
        hamburgers.classList.remove('fa-bars')
        hamburgers.classList.add('fa-times')
    }
   
})






