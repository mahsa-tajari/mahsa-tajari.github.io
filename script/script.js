const $ = document 
const menuItemElm = $.querySelectorAll('.menu__item')
const menuClose = $.querySelector('.menu__close')
const navMenu = $.querySelector('.nav-menu')
const navIcon = $.querySelector('.nav-icon')
let isMenuOpen = false
let navIconImgElm = $.querySelector('.nav-icon__img')

function openingOptionsHandler (icon){
    let collapsedMenuElm = icon.firstElementChild.nextElementSibling.nextElementSibling;
    let arrowElm = icon.firstElementChild.nextElementSibling
    let style = window.getComputedStyle(collapsedMenuElm)

    if(style.display === 'none'){
        collapsedMenuElm.style.display = 'flex'
        arrowElm.src = 'file:///E:/project/project2/images/icon-arrow-up.svg'
    }
    else{
        collapsedMenuElm.style.display = 'none'
        arrowElm.src = 'file:///E:/project/project2/images/icon-arrow-down.svg'
    }
}

function openingMenuHandler(){
    if(!isMenuOpen){
        navMenu.classList.add('nav-menu--open')
        navIconImgElm.src = 'file:///E:/project/project2/images/icon-close-menu.svg'
        isMenuOpen = true
    }
    else {
        navMenu.classList.remove('nav-menu--open')
        navIconImgElm.src = 'file:///E:/project/project2/images/icon-menu.svg'
        isMenuOpen = false
    }
}

menuItemElm.forEach(element => {
    element.addEventListener('touchend',function(){
        openingOptionsHandler(element)
    })
});
navIcon.addEventListener('touchend',openingMenuHandler)