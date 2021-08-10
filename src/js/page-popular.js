import { fetchPopularCollection } from './fetch-popular.js';
import collectionPopalarCardTpl from '../hbs/sample-1.hbs';
import { refs } from './refs.js';
import { openModalListener } from './modalCard.js';

dataCollection();

//// Вызов данных запроса
function dataCollection() {
  fetchPopularCollection()
    .then(renderPopularCollection)
    //  .then(paginA)
    .catch(error => {
      console.log(error);
    });
}

// Рендер галереи
function renderPopularCollection(data) {
  console.log(data);
  const collectionPopFilm = data.results;

  const markup = collectionPopalarCardTpl(collectionPopFilm);
  refs.filmsContainer.innerHTML = markup;
  openModalListener();

}
