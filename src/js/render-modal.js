import modalTpl from '../hbs/sample-2.hbs';
import { modalBox } from './refs';


// Функция отрисовки модального окна по шаблону
export default function renderMovieModal(data) {
    const modalMarkup = modalTemplate(data);
  
      modalBox.innerHTML = modalMarkup;
  
      modalBox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
  
      const modalBackdrop = document.querySelector('.modal__backdrop');
      const closeButton = document.querySelector('[data-action="close-modal"]');
  
      modalBackdrop.addEventListener('click', modalClosing);
      closeButton.addEventListener('click', modalClosing);
      window.addEventListener('keydown', modalClosinByEsc);
  }
// Закрытие модалки по Escape
function modalClosinByEsc(event) {
    if (event.code === 'Escape') {
      modalClosing();
    }
  }
