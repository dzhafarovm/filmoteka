const Head = {
  home: 'header--main',
  lib: 'header--lib',
  hidden: 'is-hidden',
  current: 'current-color',
};

const header = document.querySelector('header');
const libNav = document.querySelector('.js-lib-menu');
const homeNav = document.querySelector('.js-home-menu');
const formNav = document.querySelector('.search-form');
const libList = document.querySelector('.library-list');
const btnHome = document.querySelector('#btn-home');
const btnLib = document.querySelector('#btn-library');

libNav.addEventListener('click', libPageOn);
homeNav.addEventListener('click', homePageOn);

function libPageOn() {
  header.classList.add(Head.lib);
  header.classList.remove(Head.home);
  formNav.classList.add(Head.hidden);
  libList.classList.remove(Head.hidden);
  btnLib.classList.add(Head.current);
  btnHome.classList.remove(Head.current);
}

function homePageOn() {
  header.classList.remove(Head.lib);
  header.classList.add(Head.home);
  formNav.classList.remove(Head.hidden);
  libList.classList.add(Head.hidden);
  btnHome.classList.add(Head.current);
  btnLib.classList.remove(Head.current);
}
