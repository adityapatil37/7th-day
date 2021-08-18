const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
let menuOpen =false;

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle('fade');
    });
});

hamburger.addEventListener('click', () =>{
    if(!menuOpen) {
        hamburger.classList.add('p');
        menuOpen = true;
    } else{
        hamburger.classList.remove('p');
        menuOpen = false;
    }
});

