import { refs } from './refs.js';
import modalTpl from '../hbs/sample-2.hbs';

// Поиск ссылки на крточку и назначение слушателя
export function openModalListener() {
  const cardLink = document.querySelector('.card-link');
  cardLink.addEventListener('click', toggleModal);
}

// Поведение по нажатю (слушатель)
function toggleModal(e) {
  e.preventDefault();
  refs.backdrop.classList.remove('is-hidden');
  //   renderMovieModal();
}

