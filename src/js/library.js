import { refs } from './refs.js';

// filmsContainer;

refs.btnLib.addEventListener('click', opensLibraryddd);

function opensLibraryddd() {
  refs.filmsContainer.innerHTML = '';
  renderPageLibrary();
}

function renderPageLibrary() {
  console.log(localStorage.setItem('', JSON.stringify()));
  localStorage.setItem('myDataStorage', JSON.stringify(myData));
  //   var myData = localStorage.getItem('myDataStorage');
  //   console.log(myData);
  //   let values = [],
  //     keys = Object.keys(localStorage),
  //     i = keys.length;
  //   while (i--) {
  //     JSON.parse(values);
  //     values.push(localStorage.getItem(keys[i]));
  //   }
  //   //   const movieSt = JSON.parse(values);
  //   console.log(values);
  //   return values;
}

//   const movieStorageData = JSON.parse(localStorage.getItem(idCard));
// function allStorage() {
//   var values = [],
//     keys = Object.keys(localStorage),
//     i = keys.length;

//   while (i--) {
//     values.push(localStorage.getItem(keys[i]));
//   }

//   return values;
// }
