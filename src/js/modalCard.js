import { refs } from './refs.js';
import modalTpl from '../hbs/sample-2.hbs';
import axios from 'axios';
import { KEY_API } from './key';

//////////////////////////////////////////////////////////////////////////////
////// Окрытие модалки - нажатие на карточку и назначение слушателя
export function openModalListener() {
  refs.filmsContainer.addEventListener('click', onPaletteContainerClick);
}

// слушатель
function onPaletteContainerClick(evt) {
  if (!evt.target.classList.contains('film-overlay-box')) {
    return;
  }
  refs.backdrop.classList.remove('is-hidden');
  dataIdSearch(evt.target.closest('.card-link').dataset.id);
  refs.body.classList.add('overhidden')
}

//////////////////////////////////////////////////////////////////////////////
//////// Фетч фильма по  ID
function fetchId(movie_id) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY_API}`)
    .then(response => {
      // console.log(response.data);
      return response.data;
    });
}

// Данные - вызов
function dataIdSearch(movie_id) {
  fetchId(movie_id)
    .then(renderMovieModal)
    .catch(error => {
      console.log(error);
    });
}
//////////////////////////////////////////////////////////////////////////////
// рендеринг шаблона
function renderMovieModal(data) {
  //   console.log(data);
  const collectionIdFilm = data;
  //   console.log(collectionIdFilm);

  const modalMarkup = modalTpl(data);
  //   console.log(modalMarkup);
  refs.backdrop.innerHTML = modalMarkup;
  closeByButton();
  //   modalCloseByEsc();
}

//////////////////////////////////////////////////////////////////////////////
// Закрытие модалки
function modalClose() {
  refs.backdrop.classList.add('is-hidden');
   refs.body.classList.remove('overhidden')
}

// Закрытие модалки по Escape
function modalCloseByEsc(event) {
  if (event.code === 'Escape') {
    modalClose();
  }
}

///////////////////////////////////////////////////////////////////////////
//
function closeByButton() {
  const modalCloseBtn = document.querySelector('.modal-close-btn.close');

  modalCloseBtn.addEventListener('click', modalClose);
}


///////////////////////////////////////////////////////////////////////

// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US


