import { refs } from './refs.js';
import { developers } from './dev-data';
import personalTpl from '../hbs/sample-4.hbs';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';
// console.log(developers);

const developersBoard = document.querySelector('.js-dev-set');
developersBoard.innerHTML = personalTpl(developers);


refs.openModalBtn.addEventListener('click', onOpenModal);
refs.backdrop.addEventListener('click', onBackdropClick);





function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('is-hidden');
  refs.body.classList.add('overhidden');

    // refs.backdrop.classList.add('show-modal');
}

  
function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('show-modal');
  refs.backdrop.classList.add('is-hidden');
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