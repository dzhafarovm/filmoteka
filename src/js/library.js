import { refs } from './refs.js';

refs.btnLib.addEventListener('click', opensLibraryddd);

// По слущателю - очитска страници
function opensLibraryddd() {
  refs.filmsContainer.innerHTML = '';
  renderPageLibrary();
}

// Рендар страници библиотеки
function renderPageLibrary() {
  console.log(localStorage);
}

//достаем из localStorage после перезагрузки страницы
// forEachKey();

//Перебирает хранилище
function forEachKey(keyLs) {
  for (var i = 0; i < localStorage.length; i++) {
    keyLs(localStorage.key(i));
  }
}

var returnTask = JSON.parse(localStorage.getItem(727745));
console.log(returnTask);

allStorage();
function allStorage() {
  let archive = {},
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
  }
  console.log(archive);
  console.log(archive.keys);
  //   console.log(JSON.parse(localStorage.getItem(archive)));
  return archive;
}
