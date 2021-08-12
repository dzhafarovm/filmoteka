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
  addGenres(data.results);
  addPoster(data.results);
  addDate(data.results);

  const collectionPopFilm = data.results.map(result => {
    return {
      id: result.id,
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

// Подмена id на имя жанра и обрезка по длине строки
function addGenres(results) {
  const arr = results.map(genre => {
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
  results.forEach(el => {
    el.genre_ids = genresName[index];
    index += 1;
  });
}

// добавление постера в свойство poster_path
function addPoster(results) {
  results.forEach(el => {
    if (el.poster_path === null) {
      el.poster_path =
        'https://www.publicdomainpictures.net/pictures/160000/velka/vintage-theatre-poster-14601989046BB.jpg';
    } else el.poster_path = `https://image.tmdb.org/t/p/w500${el.poster_path}`;
  });
}

// добавление даты, если ее нет
function addDate(results) {
  results.forEach(el => {
    if (el.release_date === undefined || el.release_date === '') {
      el.release_date = 'new here';
    }
    console.log(el.release_date);
    return;
  });
}
