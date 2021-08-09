import { fetchPopularCollection } from './fetch-popular.js';
import collectionPopalarCardTpl from '../hbs/sample-1.hbs';
import { refs } from './refs.js';

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
  const collectionPopFilm = data.results.map(result => {
    return {
      poster_path: result.poster_path,
      overview: result.overview,
      title: result.title,
      genre_ids: result.genre_ids,
      release_date: result.release_date.split('-')[0],
    };
  });

  const markup = collectionPopalarCardTpl(collectionPopFilm);
  refs.filmsContainer.innerHTML = markup;
}
