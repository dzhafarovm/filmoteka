const Header = {
    Home: 'header-1',
    Lib: 'header-2',
    hidden: 'is-hidden',
}
const hidden= document.querySelector('is-hidden')
const header = document.querySelector('header')


const libNav = document.querySelector('.js-lib-menu');
const homeNav = document.querySelector('.js-home-menu');
const formNav = document.querySelector('.search-form');
const libList = document.querySelector('.library-list')
  
libNav.addEventListener('click', libPageOn);
homeNav.addEventListener('click', homePageOn);


function libPageOn() {

    header.classList.add(Header.Lib);
    header.classList.remove(Header.Home);
    formNav.classList.add(Header.hidden);
    libList.classList.remove(Header.hidden);
}

function homePageOn () {
    
    header.classList.remove(Header.Lib);
    header.classList.add(Header.Home);
    formNav.classList.remove(Header.hidden);
    libList.classList.add(Header.hidden);
}