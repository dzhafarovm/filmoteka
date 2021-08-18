import { refs } from './refs.js';

const Head = {
  home: 'header--main',
  lib: 'header--lib',
  hidden: 'is-hidden',
  current: 'current-color',
};

refs.libNav.addEventListener('click', libPageOn);
refs.homeNav.addEventListener('click', homePageOn);

function libPageOn() {
  refs.header.classList.add(Head.lib);
  refs.header.classList.remove(Head.home);
  refs.formNav.classList.add(Head.hidden);
  refs.libList.classList.remove(Head.hidden);
  refs.btnLib.classList.add(Head.current);
  refs.btnHome.classList.remove(Head.current);
}

function homePageOn() {
  refs.header.classList.remove(Head.lib);
  refs.header.classList.add(Head.home);
  refs.formNav.classList.remove(Head.hidden);
  refs.libList.classList.add(Head.hidden);
  refs.btnHome.classList.add(Head.current);
  refs.btnLib.classList.remove(Head.current);
  refs.inputEl.value = '';
}
