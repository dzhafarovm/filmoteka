import modalCard from '../hbs/sample-2.hbs';
import basiclightbox from 'basiclightbox';
import API_KEY from './key';



const cardFilm = document.querySelector('.js-container');
cardFilm.addEventListener('click', openModal);

function fetchMovie(movie_id) {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`;
    return fetch(url)
      .then(response => response.json());
}

function renderMovieModal(data) {

    const modalMarkup = modalCard(data);
      modalBox.innerHTML = modalMarkup;
      modalBox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
  
      const modal = document.querySelector('.modal');
      const modalCloseBtn = document.querySelector('[data-action="close-modal"]');
  
      modal.addEventListener('click', modalClose);
      modalCloseBtn.addEventListener('click', modalClose);
      window.addEventListener('keydown', modalCloseByEsc);

    // Закрытие модалки
      function modalClose() {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
        window.removeEventListener('keydown', modalCloseByEsc);
      }

      // Закрытие модалки по Escape
      function modalCloseByEsc(event) {
      if (event.code === 'Escape') {
      modalClose();
      }
}
  
  }

 



// function openModal(e) {
//   e.preventDefault();
  
//   fetchMovie(e.target.dataset.id)
//       .then(data => {
//         if (e.target.nodeName !== 'IMG')
//         return;

//         const markup = modalFilmCard(data);
//         const modal = basicLightbox.create(markup);

//         modal.show();

//         const closeBtn = document.querySelector('.modal-close-btn');
//         closeBtn.addEventListener('click', closeModal);
  
//         window.addEventListener('keydown', closeModalHandler);
  
//         function closeModalHandler(e) {
//           if (e.code === 'Escape') {
//             modal.close();
//             window.removeEventListener('keydown', closeModalHandler);
//           }
//         }
  
//         function closeModal(e) {
//           modal.close();
//           window.removeEventListener('keydown', closeModalHandler);
//         }
  
      
//       })
  
//   }





  
