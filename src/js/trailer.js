import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

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
    .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY_API}`)
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

  creatTrailerLink(key);
}

function creatTrailerLink(key) {
  const trailer = basicLightbox.create(`
  <iframe width="320" height="240" src='https://www.youtube.com/embed/${key}'frameborder="0" allowfullscreen class="trailer_video"></iframe>
`);

  setTimeout(() => {
    const trailerbtn = document.querySelector('.card__btn-trailer');
    trailerbtn.addEventListener('click', watchTrailer);
  }, 300);

  function watchTrailer() {
    trailer.show();
  }
}
