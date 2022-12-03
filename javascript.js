//sticky navbar on scroll
const nav = document.querySelector('#nav');
window.addEventListener('scroll', fixnav);
function fixnav(){
  if(window.scrollY > nav.offsetHeight - 50){
      nav.classList.add('sticky');
  }
  else{
      nav.classList.remove('sticky');
  }
}
// Behaviors of subMenu
const subMenu = document.getElementById('nav__mobile--subMenu');
const main = document.getElementById('main');
const bars = document.querySelector('.mobile__bars-btn');
const btn_showMenuLevel1 = document.querySelector('.btn--angleRight');
const menu_level1 = document.getElementById('menu__level1');
const btn_hideMenuLevel1 = document.querySelector('#menu__level1 .menu__heading');

function showSubMenu() {
    subMenu.classList.toggle('open_sub_Menu');
    bars.classList.toggle('open_sub_Menu');
    document.body.style.overflow = 'hidden';
    main.style.width = '100%';
};
bars.addEventListener('click', showSubMenu);   

function showMenuLevel1(){
    menu_level1.style.transform = 'translateX(0)';
    document.querySelector('.menu__container').style.transform = 'translateX(-100%)';
}
btn_showMenuLevel1.addEventListener('click', showMenuLevel1);

btn_hideMenuLevel1.onclick = function(){
    menu_level1.style.transform = 'translateX(100%)';
    document.querySelector('.menu__container').style.transform = 'translateX(0)';
}

document.onclick = function hideMenu(e){
    if(!subMenu.contains(e.target) && !bars.contains(e.target)){
        subMenu.classList.remove('open_sub_Menu');
        bars.classList.remove('open_sub_Menu');
        document.body.style.overflow = 'inherit';
    }
}
// Opening the sections
let widgets = document.querySelectorAll('.widget')
widgets.forEach(widget =>{
    widget.addEventListener('click', ()=>{
        widget.classList.toggle('active')
    })
})