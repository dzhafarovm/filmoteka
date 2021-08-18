import { refs } from './refs.js';
import modalTpl from '../hbs/sample-2.hbs';
import axios from 'axios';
import { KEY_API } from './key';
import { listenerModalBtn } from './modal-btn';
// import { modalButtonStyles } from './modal-btn';
import { filtersWatched } from './library';
import { filtersQueue } from './library';
import onTrailerClick from './trailer';
import '../sass/sample-2.scss';
import allStorage from './library';

//////////////////////////////////////////////////////////////////////////////
////// Окрытие модалки - нажатие на карточку и назначение слушателя
// слушатель
export function openModalListener() {
  refs.filmsContainer.addEventListener('click', onPaletteContainerClick);
}

// слушатель клика и доп стилизация
function onPaletteContainerClick(evt) {
  if (!evt.target.classList.contains('film-image')) {
    return;
  }
  refs.backdrop.classList.remove('is-hidden');
  dataIdSearch(evt.target.closest('.card-link').dataset.id);
  refs.body.classList.add('overhidden');
  refs.backdrop.addEventListener('click', backdropClick);
}

//////////////////////////////////////////////////////////////////////////////
//////// Фетч фильма по ID
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
    //  .then(dataId)
    .catch(error => {
      console.log(error);
    });
}

///////Для смены темы/////
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Поиск рефов по карточке
function getRefsId() {
  return {
    modal: document.querySelector('.modal'),
    cardItem: document.querySelector('.card__item'),
    cardDescription: document.querySelector('.card__description'),
    cardText: document.querySelector('.card__text'),
  };
}
//////////////////////////////////////////////////////////////////////////////
// рендеринг шаблона
function renderMovieModal(data) {
  const modalMarkup = modalTpl(data);
  //   console.log(data);
  refs.backdrop.innerHTML = modalMarkup;
  refs.backdrop.classList.add('is-open');
  // document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', modalCloseByEsc);

  closeByButton();
  listenerModalBtn();
  onTrailerClick();
  //   modalButtonStyles();
  /////Для смены темы//////
  const refsId = getRefsId();
  refs.toggle.addEventListener('change', onInputChangeModal);
  themeModalAfterPageReload();
  function onInputChangeModal() {
    if (refs.toggle.checked) {
      refsId.modal.classList.add(Theme.DARK);
      refsId.cardItem.classList.add(Theme.DARK);
      refsId.cardDescription.classList.add(Theme.DARK);
      refsId.cardText.classList.add(Theme.DARK);

      refsId.modal.classList.remove(Theme.LIGHT);
      refsId.cardItem.classList.remove(Theme.LIGHT);
      refsId.cardDescription.classList.remove(Theme.LIGHT);
      refsId.cardText.classList.remove(Theme.LIGHT);

      localStorage.setItem('theme', Theme.DARK);
    } else {
      refsId.modal.classList.add(Theme.LIGHT);
      refsId.cardItem.classList.add(Theme.LIGHT);
      refsId.cardDescription.classList.add(Theme.LIGHT);
      refsId.cardText.classList.add(Theme.LIGHT);

      refsId.modal.classList.remove(Theme.DARK);
      refsId.cardItem.classList.remove(Theme.DARK);
      refsId.cardDescription.classList.remove(Theme.DARK);
      refsId.cardText.classList.remove(Theme.DARK);

      localStorage.setItem('theme', Theme.LIGHT);
    }
  }
  function themeModalAfterPageReload() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === null) {
      refsId.modal.classList.add(Theme.LIGHT);
      refsId.cardItem.classList.add(Theme.LIGHT);
      refsId.cardDescription.classList.add(Theme.LIGHT);
      refsId.cardText.classList.add(Theme.LIGHT);

      localStorage.setItem('theme', Theme.LIGHT);
    } else if (savedTheme === Theme.LIGHT) {
      refsId.modal.classList.add(Theme.LIGHT);
      refsId.cardItem.classList.add(Theme.LIGHT);
      refsId.cardDescription.classList.add(Theme.LIGHT);
      refsId.cardText.classList.add(Theme.LIGHT);

      refsId.modal.classList.remove(Theme.DARK);
      refsId.cardItem.classList.remove(Theme.DARK);
      refsId.cardDescription.classList.remove(Theme.DARK);
      refsId.cardText.classList.remove(Theme.DARK);
    } else if (savedTheme === Theme.DARK) {
      refsId.modal.classList.add(Theme.DARK);
      refsId.cardItem.classList.add(Theme.DARK);
      refsId.cardDescription.classList.add(Theme.DARK);
      refsId.cardText.classList.add(Theme.DARK);

      refsId.modal.classList.remove(Theme.LIGHT);
      refsId.cardItem.classList.remove(Theme.LIGHT);
      refsId.cardDescription.classList.remove(Theme.LIGHT);
      refsId.cardText.classList.remove(Theme.LIGHT);
      refs.toggle.checked = true;
    }
  }
}

//////////////////////////////////////////////////////////////////////////////
// Закрытие модалки
function modalClose() {
  window.removeEventListener('keydown', modalCloseByEsc);
  refs.backdrop.classList.add('is-hidden');
  refs.body.classList.remove('overhidden');
  refs.backdrop.innerHTML = '';
  //   filtersWatched();
  //   filtersQueue();
  if (sessionStorage.getItem('libopen') === null) {
    return;
  }

  if (sessionStorage.getItem('libopen') === 'libopenQueue') {
    refs.filmsContainer.innerHTML = '';
    filtersQueue();
  }

  if (sessionStorage.getItem('libopen') === 'libopenWatched') {
    refs.filmsContainer.innerHTML = '';
    filtersWatched();
  }
}

// Закрытие по клику бекдроп
function backdropClick(event) {
  if (event.currentTarget === event.target) {
    modalClose();
  }
}

// Закрытие модалки по Escape
function modalCloseByEsc(event) {
  if (event.code === 'Escape') {
    modalClose();
  }
}

///////////////////////////////////////////////////////////////////////////
// Закрытие модалки по Кнопке
function closeByButton() {
  const modalCloseBtn = document.querySelector('.modal-close-btn.close');
  modalCloseBtn.addEventListener('click', modalClose);
}
