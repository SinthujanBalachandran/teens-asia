const menu = document.querySelector('.menu')
const navItems = document.querySelector('.nav--items')
const navItem0 = document.querySelector('.item-0')
const navItem1 = document.querySelector('.item-1')
const navItem2 = document.querySelector('.item-2')
const navItem3 = document.querySelector('.item-3')
const navItem4 = document.querySelector('.item-4')
const navItem5 = document.querySelector('.item-5')
const header = document.querySelector('.header')


menu.onclick = ()=>{
    header.classList.toggle("active--menu");
}

navItem0.onclick = ()=> header.classList.remove("active--menu");
navItem1.onclick = ()=> header.classList.remove("active--menu");
navItem2.onclick = ()=> header.classList.remove("active--menu");
navItem3.onclick = ()=> header.classList.remove("active--menu");
navItem4.onclick = ()=> header.classList.remove("active--menu");
navItem5.onclick = ()=> header.classList.remove("active--menu");


function scrollHeader() {
    const header = document.querySelector('.header')
    if (this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


// scroll reveal

// ScrollReveal().reveal('.hero--text,.inner--container');

const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay:'200'
})

sr.reveal(`.hero--text, .title,.image`,{
    origin:'top',
    interval:'100'
})
sr.reveal(`.inner--container--text, .hair--care--text`,{
    origin:'left',
    interval:'100'
})
sr.reveal(`.skin--care--text,.body--care--text`,{
    origin:'right',
    interval:'100'
})
sr.reveal(`.about--item,.bridal--images,.skin--care--images, .hair--care--images,.stylist,.testimonial`,{
    delay:'600',
    interval:'100'
})