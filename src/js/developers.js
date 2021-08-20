import { refs } from './refs.js';
import { developers } from './dev-data';
import personalTpl from '../hbs/sample-4.hbs';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';

const developersBoard = document.querySelector('.js-dev-set');
developersBoard.innerHTML = personalTpl(developers);

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.backdropTeam.addEventListener('click', onBackdropClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdropTeam.classList.remove('is-hidden');
  refs.backdropTeam.classList.remove('show-modal');
  refs.body.classList.add('overhidden');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdropTeam.classList.remove('show-modal');
  refs.backdropTeam.classList.add('is-hidden');
  refs.body.classList.remove('overhidden');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
