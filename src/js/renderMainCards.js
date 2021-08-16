import Notiflix from 'notiflix';
import FilmsApiService from './fetchMainCards';
import filmsCardTpl from '../hbs/sample-1.hbs';
import { genres } from '../js/genre';
import { openModalListener } from './modalCard.js';
import onTrailerClick from './trailer';

// const inputEl = document.querySelector('.search-input');
const searchForm = document.querySelector('.search-form');
const filmsContainer = document.querySelector('.container');

// const DEBOUNCE_DELAY = 300;
let totalRenderedFilms = 0;

const filmsApiService = new FilmsApiService();

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(e) {
  e.preventDefault();

  Notiflix.Loading.dots('Please wait...');

  filmsApiService.query = e.currentTarget.elements.query.value;
  if (filmsApiService.query.trim() === '') {
    return;
  }

  filmsContainer.innerHTML = '';
  // filmsApiService.resetPage();
  filmsApiService
    .fetchCards()
    .then(addFilmsCardMarkup)
    .catch(error => {
      Notiflix.Notify.failure(
        'Sorry, there are no films matching your search query. Please try again.',
      );
    });
}

function addFilmsCardMarkup({ results }) {
  Notiflix.Loading.remove();
  if (results.length === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no films matching your search query. Please try again.',
    );
    return;
  }

  totalRenderedFilms += results.length;
  addGenres(results);
  addPoster(results);
  addDate(results);

  const collectionPopFilm = results.map(result => {
    return {
      id: result.id,
      vote_average: result.vote_average,
      poster_path: result.poster_path,
      overview: result.overview,
      title: result.title,
      genre_ids: result.genre_ids,
      release_date: result.release_date.split('-')[0],
    };
  });

  filmsContainer.insertAdjacentHTML('beforeend', filmsCardTpl(collectionPopFilm));
  openModalListener();
  onTrailerClick();
  Notiflix.Notify.success(`We found ${totalRenderedFilms} films for you.`);
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
    if (id.length === 0) {
      return (id = 'Something interesting');
    }

    if (id.length === 1) {
      return id;
    }

    if (id.length === 2) {
      return `${id[0]},  ${id[1]}`;
    }

    if (id.length > 2) {
      return `${id[0]},  ${id[1]},  Other`;
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
        'data:image/jpeg;base64,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';
    } else el.poster_path = `https://image.tmdb.org/t/p/w500${el.poster_path}`;
  });
}

// добавление даты, если ее нет
function addDate(results) {
  results.forEach(el => {
    if (el.release_date === undefined || el.release_date === '') {
      el.release_date = 'new here';
    }
    return;
  });
}

Notiflix.Loading.init({ svgColor: '#ff6b08', messageColor: '#ff6b08' });
Notiflix.Notify.init({
  success: {
    background: 'rgba(255, 107, 8, 0.8)',
    notiflixIconColor: 'rgba(0,0,0,0.4)',
  },
});
