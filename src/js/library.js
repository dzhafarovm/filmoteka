import { refs } from './refs.js';
import collectionLibraryCardTpl from '../hbs/sample-1-1.hbs';
import { watched, queue } from './modal-btn';
// import { closePagin } from './pagination/start-pagination';
// import { paginationLib } from './pagination/start-pagination';

//Поиск ссылок по карточке
// function searchLinksLib() {
//   return {
//     listItemLib: document.querySelector('.gallery-item'),
//   };
// }

// Слушатели
refs.btnLib.addEventListener('click', opensLibraryddd);

//////////////////////////////////////////////
// По слущателю - очитска страници
function opensLibraryddd() {
  refs.filmsContainer.innerHTML = '';
  allStorage();
  listenerBtnLib();
  //   closePagin();
  const refsPagin = document.querySelector('#root_futer');
  refsPagin.innerHTML = '';
}

// Вызов из хранилищя, переборы и рендеринг
function allStorage() {
  let archive = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
  }
  //   console.log(archive);
  archive.forEach(function (item) {
    //  console.log(item);
    //  console.log(item[0].librarySection);
    //   librarySection;
    //   console.log(item[0].genres);
    //  console.log(item[0].genres.replace(/\n/g, ''));
    //  item[0].genres.replace(/\n/g, '');
    //  console.log(item[0].librarySection);
    //  console.log(item[0].genres);

    refs.filmsContainer.insertAdjacentHTML('beforeend', collectionLibraryCardTpl(item));
  });
  //   paginationLib();
}

///////////////////////////////////////////////
// filtersWatched();
//////Кнопки Библиотеки
//CСлушатели
function listenerBtnLib() {
  refs.btnWatched.addEventListener('click', filtersWatched);
  refs.btnQueue.addEventListener('click', filtersQueue);
}

// Кнопка - Watched
export function filtersWatched() {
  refs.filmsContainer.innerHTML = '';
  //   console.log('Wwww');
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
  //   console.log('QQQQ');
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
