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
  if (!evt.target.classList.contains('film-image')) {
    return;
  }
  refs.backdrop.classList.remove('is-hidden');
  dataIdSearch();
}

//////////////////////////////////////////////////////////////////////////////
//////// Фетч фильма по  ID
function fetchId() {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${520763}?api_key=${KEY_API}`)
    .then(response => {
      // console.log(response.data);
      return response.data;
    });
}

// Данные - вызов
function dataIdSearch() {
  fetchId()
    .then(renderMovieModal)
    .catch(error => {
      console.log(error);
    });
}
//////////////////////////////////////////////////////////////////////////////
// рендеринг шаблона
function renderMovieModal(data) {
  console.log(data);
  const collectionIdFilm = data;
  //   console.log(collectionIdFilm);

  const modalMarkup = modalTpl(data);
  //   console.log(modalMarkup);
  refs.backdrop.innerHTML = modalMarkup;
}

//////////////////////////////////////////////////////////////////////////////
// Закрытие модалки
function modalClose() {
  refs.backdrop.classList.add('is-hidden');
}

// Закрытие модалки по Escape
function modalCloseByEsc(event) {
  if (event.code === 'Escape') {
    modalClose();
  }
}

///////////////////////////////////////////////////////////////////////////
//
const modalCloseBtn = document.querySelector('.backdrop');
modalCloseBtn.addEventListener('click', modalClose);