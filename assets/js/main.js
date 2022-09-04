const menu = document.querySelector('.menu')
const navItems = document.querySelector('.nav--items')
const body = document.querySelector('.body')

menu.onclick = ()=>{
    navItems.classList.toggle("active--menu");
}