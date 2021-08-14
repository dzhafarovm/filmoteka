export const watched = 'Watched';
export const queue = 'Queue';

////////////////////////////////////////////////
//Поиск ссылок по карточке
function searchLinks() {
  return {
    dataId: document.querySelector('.modal'),
    dataImg: document.querySelector('.modal__img'),
    dataAverage: document.querySelector('.card__item-average'),
    dataCount: document.querySelector('.card__item-count'),
    dataPopularity: document.querySelector('.card__item-count'),
    dataOriginal: document.querySelector('.card__item-original-title'),
    dataGenres: document.querySelector('.card__item-genres'),
    //  dataGenres: document.querySelectorAll('.card__item-genre'),
    dataOverview: document.querySelector('.card__text'),
    btnWatched: document.querySelector('.card__btn-watched'),
    btnQueue: document.querySelector('.card__btn-que'),
  };
}

//////////// Кнопка "add to Watched"  добавить - к просмотренным
// Добавляет в  localStorage
function updateStorage(datalocalStorage, keyStorage) {
  const dataStorage = [];
  dataStorage.push(datalocalStorage);
  //   console.log(datalocalStorage);
  localStorage[keyStorage] = JSON.stringify(dataStorage);
}

// После рендеринга - устанавливает слушатель
export function listenerModalBtn() {
  const btnAddWatched = document.querySelector('.card__btn-watched');
  btnAddWatched.addEventListener('click', addsWatched);

  const btnAddQueue = document.querySelector('.card__btn-que');
  btnAddQueue.addEventListener('click', addsQueue);
  storageСheckWatched();
  storageСheckQueue();
}

//Проверка статуса кнопок в зависимости от наличия в хранилище и зменение названия
function storageСheckWatched() {
  const linsk = searchLinks();
  const idCard = linsk.dataId.getAttribute('data-action'); // id  в карточке
  const movieStorageData = JSON.parse(localStorage.getItem(idCard)); // данние из хранилищя
  if (movieStorageData === null) {
    return;
  }
  if (movieStorageData[0].id === idCard && movieStorageData[0].librarySection === watched) {
    linsk.btnWatched.textContent = 'removed from Watched';
  } else {
    linsk.btnWatched.textContent = 'add to Watched';
  }
}

function storageСheckQueue() {
  const linsk = searchLinks();
  const idCard = linsk.dataId.getAttribute('data-action'); // id  в карточке
  const movieStorageData = JSON.parse(localStorage.getItem(idCard)); // данние из хранилищя
  if (movieStorageData === null) {
    return;
  }
  if (movieStorageData[0].id === idCard && movieStorageData[0].librarySection === queue) {
    linsk.btnQueue.textContent = 'removed from Queue';
  } else {
    linsk.btnQueue.textContent = 'add to Queue';
  }
}

// Кнопка - работа с хранилищем (добавление)
function addsWatched() {
  const linsk = searchLinks();
  let genresStrong = linsk.dataGenres.textContent;

  genresStrong = genresStrong.replace(/\s+/g, ' ').trim().split(' ').join(', ');

  const datalocalStorage = {
    id: linsk.dataId.getAttribute('data-action'),
    title: linsk.dataImg.getAttribute('alt'),
    poster_path: linsk.dataImg.getAttribute('src'),
    vote_average: linsk.dataAverage.textContent,
    vote_count: linsk.dataCount.textContent,
    popularity: linsk.dataPopularity.textContent,
    original_title: linsk.dataOriginal.textContent,
    genres: { name: genresStrong },
    overview: linsk.dataOverview.textContent,
    librarySection: watched,
  };

  const keyStorage = datalocalStorage.id;
  if (linsk.btnWatched.textContent != 'removed from Watched') {
    updateStorage(datalocalStorage, keyStorage);
  } else {
    deleteStoragData();
    linsk.btnWatched.textContent = 'add to Watched';
  }
  storageСheckWatched();
  storageСheckQueue();
}

//////////// Кнопка "add to queue" -  добавить в очередь
function addsQueue() {
  const linsk = searchLinks();
  let genresStrong = linsk.dataGenres.textContent;

  genresStrong = genresStrong.replace(/\s+/g, ' ').trim().split(' ').join(', ');
  //   console.log(genresStrong);

  const datalocalStorage = {
    id: linsk.dataId.getAttribute('data-action'),
    title: linsk.dataImg.getAttribute('alt'),
    poster_path: linsk.dataImg.getAttribute('src'),
    vote_average: linsk.dataAverage.textContent,
    vote_count: linsk.dataCount.textContent,
    popularity: linsk.dataPopularity.textContent,
    original_title: linsk.dataOriginal.textContent,
    genres: { name: genresStrong },
    overview: linsk.dataOverview.textContent,
    librarySection: queue,
  };

  const keyStorage = datalocalStorage.id;
  if (linsk.btnQueue.textContent != 'removed from Queue') {
    updateStorage(datalocalStorage, keyStorage);
  } else {
    deleteStoragData();
    linsk.btnQueue.textContent = 'add to Queue';
  }
  storageСheckQueue();
  storageСheckWatched();
}

//////// Удаление из хранилища
function deleteStoragData() {
  const linsk = searchLinks();
  const idCard = linsk.dataId.getAttribute('data-action'); // id  в карточке
  if (
    linsk.btnWatched.textContent === 'removed from Watched' ||
    linsk.btnQueue.textContent === 'removed from Queue'
  ) {
    localStorage.removeItem(idCard);
  }
}

// Стилизация кнопок
// export function modalButtonStyles() {
//   const linsk = searchLinks();
//   const linkTextWatched = linsk.btnWatched.textContent;
//   const linkTextQueue = linsk.btnQueue.textContent;

//   if (linkTextWatched === 'removed from Watched' || linkTextQueue === 'removed from Queue') {
//     console.log(linkTextWatched === 'removed from Watched');
//     linsk.btnWatched.classList.add('js-btn-watched');
//     linsk.btnQueue.classList.add('js-btn-watched');
//   } else {
//     linsk.btnWatched.classList.remove('js-btn-watched');
//     linsk.btnQueue.classList.remove('js-btn-watched');
//   }
// }
