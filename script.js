const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

const sr = ScrollReveal ({
    distance:'25px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})