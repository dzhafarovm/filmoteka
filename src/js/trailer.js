import axios from 'axios';
import { KEY_API } from './key';
import { refs } from './refs.js';

export default function onTrailerClick() {
  refs.filmsContainer.addEventListener('click', watchTrailer);
}

function watchTrailer(e) {
  if (!e.target.classList.contains('film-image')) {
    return;
  }

  dataIdSearch(e.target.closest('.card-link').dataset.id);
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
      return data.results;
    });
}

function renderTrailer(data) {
  let key = '';
  data.forEach(obj => {
    if (obj.name.includes('Official')) {
      key = obj.key;
    }
  });

  const trailerLink = document.querySelector('.js-youtube-key');
  trailerLink.href = `http://www.youtube.com/watch?v=${key}`;
}
