// import modalTpl from '../hbs/sample-2.hbs';
// import { refs } from './refs';

// Функция отрисовки модального окна по шаблону
// export function renderMovieModal(data) {
//   const collectionIdFilm = data.results;
//   console.log(collectionIdFilm);

//   const modalMarkup = modalTpl(data);
//   console.log(modalMarkup);

//   refs.backdrop.innerHTML = modalMarkup;

//   backdrop.classList.add('is-open');
//   document.body.style.overflow = 'hidden';

//   const backdrop = document.querySelector('.backdrop');
//   const closeButton = document.querySelector('[data-action="close-modal"]');

//   backdrop.addEventListener('click', modalClose);
//   closeButton.addEventListener('click', modalClose);
//   window.addEventListener('keydown', modalCloseByEsc);
// }

// // Закрытие модалки по Escape
// function modalCloseByEsc(event) {
//   if (event.code === 'Escape') {
//     modalClose();
//   }
// }
