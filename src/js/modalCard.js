import { refs } from './refs.js';
import modalTpl from '../hbs/sample-2.hbs';
import axios from "axios";
import KEY_API from './key';

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

  // Фетч фильма по  ID
  function fetchMovieById(movie_id) {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY_API}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => ({
        ...data,
        year: createYear(data),
        popularity: data.popularity.toFixed(1),

      }));
}
 //Открытие модалки
  function openModal(e) {
  e.preventDefault();

  fetchMovieById(e.target.dataset.id)
    .then(data => {
      if (e.target.nodeName !== 'IMG') return;
      const markup = modalTpl(data);
      const modal = basicLightbox.create(markup);

      modal.show();

      const closeBtn = document.querySelector('.modal-close-btn');
      closeBtn.addEventListener('click', closeModal);

      window.addEventListener('keydown', closeModalHandler);

      function closeModalHandler(e) {
        if (e.code === 'Escape') {
          modal.close();
          window.removeEventListener('keydown', closeModalHandler);
        }
      }

      function closeModal(e) {
        modal.close();
        window.removeEventListener('keydown', closeModalHandler);
      }

  })
};
    
