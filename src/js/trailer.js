import axios from 'axios';
import { KEY_API } from './key';

export default function onTrailerClick() {
  const btnTrailer = document.querySelector('.card__btn-trailer');
  const divModal = document.querySelector('.modal');

  divModal.addEventListener('click', watchTrailer);
}

function watchTrailer(e) {
  if (!e.target.classList.contains('card__btn-trailer')) {
    return;
  }

  const videoEl = document.querySelector('.trailer-box');
  videoEl.classList.remove('trailer-box--hidden');

  dataIdSearch(e.currentTarget.dataset.action);
}

function dataIdSearch(id) {
  fetchById(id)
    .then(renderTrailer)
    .catch(error => {
      console.log(error);
    });
}

function fetchById(id) {
  return axios
    .get(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY_API}`)
    .then(response => response.data)
    .then(data => {
      // console.log('data.results', data.results);
      return data.results;
    });
}

function renderTrailer() {
  const videoEl = document.querySelector('.trailer-box');
  videoEl.src = '';
}
