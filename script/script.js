//variables
const $ = document 
const menuItemElm = $.querySelectorAll('.menu__item')
const menuClose = $.querySelector('.menu__close-icon')
const navMenu = $.querySelector('.nav-menu--mobile')
const navIcon = $.querySelector('.nav-icon')
let isMenuOpen = false
let navIconImgElm = $.querySelector('.nav-icon__img')
let sidebarWrapperElm = $.querySelector('.sidebar-wrapper')
//functions
//function for openin/closing an item
function openingOptionsHandler (icon){
    let collapsedMenuElm = icon.firstElementChild.nextElementSibling.nextElementSibling;//select div of options of item that clicked on that
    let arrowElm = icon.firstElementChild.nextElementSibling //select icon open or close: ^
    let style = window.getComputedStyle(collapsedMenuElm) //styles of div 
    if(style.display === 'none'){ //if div is hide
        collapsedMenuElm.style.display = 'flex' //show it
        arrowElm.src = './images/icon-arrow-up.svg' //change arrow
    }
    else{
        collapsedMenuElm.style.display = 'none' //if div is showing, hide it
        arrowElm.src = './images/icon-arrow-down.svg' //change arrow
    }
}
//function for opening/closing sidebar
function openingMenuHandler(){
    if(!isMenuOpen){ // if sidebar is closed
        navMenu.classList.add('nav-menu--open') //add class with styles that show the sidebar
        navIconImgElm.style.display = 'none' //hide the openining  sidebar icon
        sidebarWrapperElm.classList.add('sidebar-wrapper--active')//blackcolor for background
        isMenuOpen = true //sidebar is open
    }
    else { //sidebar is open
        navMenu.classList.remove('nav-menu--open') //close it
        navIconImgElm.style.display = 'inline'//show opening sidebar icon
        sidebarWrapperElm.classList.remove('sidebar-wrapper--active')  
        isMenuOpen = false //side bar is closed
    }
}
//add eventlisteners
menuItemElm.forEach(element => {
    element.addEventListener('click',function(){
        openingOptionsHandler(element)
    })
});
navIcon.addEventListener('touchup',openingMenuHandler)
menuClose.addEventListener('touchup',openingMenuHandler)
