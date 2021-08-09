// import debounce from 'lodash/debounce';
import { Notify } from 'notiflix';

import FilmsApiService from './fetchMainCards';
import filmsCardTpl from '../hbs/sample-1.hbs';

// const inputEl = document.querySelector('.search-input');
const searchForm = document.querySelector('.search-form');
const filmsContainer = document.querySelector('.container');

// const DEBOUNCE_DELAY = 300;
let totalRenderedFilms = 0;

const filmsApiService = new FilmsApiService();

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(e) {
  e.preventDefault();
  filmsContainer.innerHTML = '';
  filmsApiService.query = e.currentTarget.elements.query.value;
  if (filmsApiService.query.trim() === '') {
    filmsContainer.innerHTML = '';
    return;
  }
  filmsApiService
    .fetchCards()
    .then(addFilmsCardMarkup)
    .catch(error => {
      Notify.failure('Sorry, there are no films matching your search query. Please try again.');
    });
}

function addFilmsCardMarkup({ results }) {
  if (results.length === 0) {
    Notify.failure('Sorry, there are no films matching your search query. Please try again.');
    return;
  }
  totalRenderedFilms += results.length;

  const data = results.map(result => {
    return {
      poster_path: result.poster_path,
      overview: result.overview,
      title: result.title,
      genre_ids: result.genre_ids,
      release_date: result.release_date.split('-')[0],
    };
  });
  console.log('data', data);

  filmsContainer.insertAdjacentHTML('beforeend', filmsCardTpl(data));
  Notify.success(`We found ${totalRenderedFilms} films for you.`);
}
