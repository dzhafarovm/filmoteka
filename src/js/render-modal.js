import modalTpl from '../hbs/sample-2.hbs';
import { backdrop } from './refs';

// Функция отрисовки модального окна по шаблону
export default function renderMovieModal(data) {
  const modalMarkup = modalTemplate(data);
  backdrop.innerHTML = modalMarkup;

  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  const backdrop = document.querySelector('.backdrop');
  const closeButton = document.querySelector('[data-action="close-modal"]');

  backdrop.addEventListener('click', modalClose);
  closeButton.addEventListener('click', modalClose);
  window.addEventListener('keydown', modalCloseByEsc);
}
// Закрытие модалки по Escape
function modalCloseByEsc(event) {
  if (event.code === 'Escape') {
    modalClose();
  }
}
