import FilmsApiService from './fetchMainCard';
import filmsCardTpl from '../hbs/sample-1.hbs';

const inputEl = document.querySelector('.search-input');
const searchForm = document.querySelector('.search-form');
const filmsContainer = document.querySelector('.container');

const filmsApiService = new FilmsApiService();

searchForm.addEventListener('submit', onSearchFormSubmit);
function onSearchFormSubmit(e) {
  e.preventDefault();
  filmsContainer.innerHTML = '';
  filmsApiService.query = e.currentTarget.elements.query.value;
  filmsApiService
    .fetchCards()
    .then(results => {
      //   const date = results.map(result => {
      //     return result.release_date.split('-', [0]);
      //   });
      //   console.log(date);

      return addFilmsCardMarkup({ results });
    })
    .catch(error => {
      console.log(error);
    });
}
function addFilmsCardMarkup({ results }) {
  filmsContainer.insertAdjacentHTML('beforeend', filmsCardTpl({ results }));
}
