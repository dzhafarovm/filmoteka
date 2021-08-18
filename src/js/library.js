import { refs } from './refs.js';
import collectionLibraryCardTpl from '../hbs/sample-1-1.hbs';
import { watched, queue } from './modal-btn';

// Слушатели
refs.btnLib.addEventListener('click', opensLibrary);

//////////////////////////////////////////////
// По слущателю - очитска страници
function opensLibrary() {
  refs.filmsContainer.innerHTML = '';
  allStorage();
  listenerBtnLib();
  //   const refsPaginH = document.querySelector('#root_header');
  const refsPaginF = document.querySelector('#root_futer');
  //   refsPaginH.innerHTML = '';
  refsPaginF.innerHTML = '';
}

// Вызов из хранилищя, переборы и рендеринг
export default function allStorage() {
  let archive = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
  }
  //   console.log(archive);
  archive.forEach(function (item) {
    refs.filmsContainer.insertAdjacentHTML('beforeend', collectionLibraryCardTpl(item));
  });
  filtersWatched();
}

///////////////////////////////////////////////
//////Кнопки Библиотеки
//CСлушатели
function listenerBtnLib() {
  refs.btnWatched.addEventListener('click', filtersWatched);
  refs.btnQueue.addEventListener('click', filtersQueue);
}

// Кнопка - Watched (фильтрация)
export function filtersWatched() {
  sessionStorage.setItem('libopen', 'libopenWatched');
  refs.btnWatched.classList.add('accent-color-btn');
  refs.btnQueue.classList.remove('accent-color-btn');

  refs.filmsContainer.innerHTML = '';
  let archive = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
  }

  archive.forEach(function (item) {
    const dataWatched = item[0].librarySection;
    if (dataWatched === watched) {
      refs.filmsContainer.insertAdjacentHTML('beforeend', collectionLibraryCardTpl(item));
    }
  });
}

// Кнопка - Queue
export function filtersQueue() {
  sessionStorage.setItem('libopen', 'libopenQueue');
  refs.btnQueue.classList.add('accent-color-btn');
  refs.btnWatched.classList.remove('accent-color-btn');

  refs.filmsContainer.innerHTML = '';
  let archive = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
  }

  archive.forEach(function (item) {
    const dataQueue = item[0].librarySection;
    if (dataQueue === queue) {
      refs.filmsContainer.insertAdjacentHTML('beforeend', collectionLibraryCardTpl(item));
    }
  });
}
