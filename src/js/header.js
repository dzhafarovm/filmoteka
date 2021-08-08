const Head = {
  Home: 'header-1',
  Lib: 'header-2',
  hidden: 'is-hidden',
};

const header = document.querySelector('header');

const libNav = document.querySelector('.js-lib-menu');
const homeNav = document.querySelector('.js-home-menu');
const formNav = document.querySelector('.search-form');
const libList = document.querySelector('.library-list');

libNav.addEventListener('click', libPageOn);
homeNav.addEventListener('click', homePageOn);

function libPageOn() {
  header.classList.add(Head.Lib);
  header.classList.remove(Head.Home);
  formNav.classList.add(Head.hidden);
  libList.classList.remove(Head.hidden);
}

function homePageOn() {
  header.classList.remove(Head.Lib);
  header.classList.add(Head.Home);
  formNav.classList.remove(Head.hidden);
  libList.classList.add(Head.hidden);
}
