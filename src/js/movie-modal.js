import api from './fetchapi';
import renderMovieModal from './render-modal';
import {gallery} from './refs';

gallery.addEventListener('click', clickOnMovieHandler);

// Click Handler Function
async function clickOnMovieHandler(e) {
    e.preventDefault();
  
    if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H2') {
      return;
    }
  
    let movieId = e.target.dataset.id;
    await fetchById(movieId);
    textModalBtn(movieId);
  }
  
//   async function textModalBtn(id) {
//     const btnQueue = document.querySelector('.btn__queue');
//     const btnWatch = document.querySelector('.btn__watch');
//     if (inList(id, 'watched')) {
//       // console.log('есть такой в watched');
//       btnWatch.textContent = 'Added to watched';
//       btnWatch.disabled = true;
//       function changeText() {
//         btnWatch.disabled = false;
//         btnWatch.textContent = 'Remove from watched';
//         btnWatch.classList.add('active');
//       }
//       setTimeout(changeText, 1000);
//     } else {
//       // console.log('нет такого в watched');
//       btnWatch.textContent = 'Add to watched';
//       btnWatch.classList.remove('active');
//       // console.log('удаляем класс active');
//       btnWatch.disabled = false;
//     }
  
//     if (inList(id, 'queue')) {
//       // console.log('есть такой в queue');
//       btnQueue.textContent = 'Added to queue';
//       btnQueue.disabled = true;
//       function changeText() {
//         btnQueue.disabled = false;
//         btnQueue.textContent = 'Remove from queue';
//         btnQueue.classList.add('active');
//       }
//       setTimeout(changeText, 1000);
//     } else {
//       // console.log('нет такого в queue');
//       btnQueue.textContent = 'Add to queue';
//       btnQueue.classList.remove('active');
//       btnQueue.disabled = false;
//     }
//   }
  
  // Outer fetch by ID
  async function fetchById(id) {
      const movieId = await api.getMovieById(id);
      renderMovieModal(movieId);
  
    //   const btnQueue = document.querySelector('.btn__queue');
    //   const btnWatch = document.querySelector('.btn__watch');
  
    //   btnQueue.addEventListener('click', addQueueList);
    //   btnWatch.addEventListener('click', addWatchList);
  
}
  
  