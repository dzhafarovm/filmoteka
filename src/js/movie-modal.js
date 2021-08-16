import api from './fetchapi';
import renderMovieModal from './render-modal';
import { gallery } from './refs';

gallery.addEventListener('click', clickOnMovieHandler);

// Click Handler Function
async function clickOnMovieHandler(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H2') {
    return;
  }

  let movieId = e.target.dataset.id;
  await fetchById(movieId);
  textModalBtn(movieId);
}

// Outer fetch by ID
async function fetchById(id) {
  const movieId = await api.getMovieById(id);
  renderMovieModal(movieId);
}
