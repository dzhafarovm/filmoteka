import { refs } from './refs.js';
import collectionLibraryCardTpl from '../hbs/sample-1.hbs';

refs.btnLib.addEventListener('click', opensLibraryddd);

// По слущателю - очитска страници
function opensLibraryddd() {
  refs.filmsContainer.innerHTML = '';
  allStorage();
}

// Вызов из хранилищя, переборы и рендеринг
function allStorage() {
  let archive = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
  }

  archive.forEach(function (item) {
    //  console.log(item);
    //  console.log(item[0].librarySection);

    refs.filmsContainer.insertAdjacentHTML('beforeend', collectionLibraryCardTpl(item));
  });
}
