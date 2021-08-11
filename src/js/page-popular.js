import { fetchPopularCollection } from './fetch-popular.js';
import collectionPopalarCardTpl from '../hbs/sample-1.hbs';
import { refs } from './refs.js';
import { openModalListener } from './modalCard.js';
import { genres } from '../js/genre';

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
  const arr = data.results.map(genre => {
    return genre.genre_ids;
  });

  const newArr = arr.map(el => {
    return el.map(id => {
      const x = genres.find(gen => gen.id === id);
      return (id = x.name);
    });
  });

  const genresName = newArr.map(id => {
    if (id.length <= 2) {
      return id;
    }

    if (id.length > 2) {
      return [`${id[0]}, ${id[1]}, Other`];
    }
  });

  let index = 0;
  data.results.forEach(el => {
    el.genre_ids = genresName[index];
    index += 1;
  });

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
  openModalListener();
}
