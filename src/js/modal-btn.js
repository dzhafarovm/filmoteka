//////////// Кнопка "add to Watched"  добавить- к просмотренным
const watched = 'Watched';
const queue = 'Queue';

// Добавляет в  localStorage
function updateStorage(datalocalStorage, keyStorage) {
  const dataStorage = [];
  dataStorage.push(datalocalStorage);
  localStorage[keyStorage] = JSON.stringify(dataStorage);
}
// После рендеринга - устанавливает слушатель
export function listenerAddsWatched() {
  const btnAddWatched = document.querySelector('.card__btn-watched');
  btnAddWatched.addEventListener('click', addsWatched);
}

function addsWatched() {
  const dataId = document.querySelector('.modal');
  const dataImg = document.querySelector('.modal__img');
  const dataAverage = document.querySelector('.card__item-average');
  const dataCount = document.querySelector('.card__item-count');
  const dataPopularity = document.querySelector('.card__item-count');
  const dataOriginal = document.querySelector('.card__item-original-title');
  const dataGenres = document.querySelector('.card__item-genres');
  const dataOverview = document.querySelector('.card__text');

  const datalocalStorage = {
    id: dataId.getAttribute('data-action'),
    title: dataImg.getAttribute('alt'),
    poster_path: dataImg.getAttribute('src'),
    vote_average: dataAverage.textContent,
    vote_count: dataCount.textContent,
    popularity: dataPopularity.textContent,
    original_title: dataOriginal.textContent,
    genres: dataGenres.textContent,
    overview: dataOverview.textContent,
    librarySection: watched,
  };

  const keyStorage = datalocalStorage.id;
  updateStorage(datalocalStorage, keyStorage);
}

//////////// Кнопка "add to queue" -  добавить в очередь
export function listenerAddsQueue() {
  const btnAddWatched = document.querySelector('.card__btn-watched');
  btnAddWatched.addEventListener('click', addsQueue);
}

function addsQueue() {
  const dataId = document.querySelector('.modal');
  const dataImg = document.querySelector('.modal__img');
  const dataAverage = document.querySelector('.card__item-average');
  const dataCount = document.querySelector('.card__item-count');
  const dataPopularity = document.querySelector('.card__item-count');
  const dataOriginal = document.querySelector('.card__item-original-title');
  const dataGenres = document.querySelector('.card__item-genres');
  const dataOverview = document.querySelector('.card__text');

  const datalocalStorage = {
    id: dataId.getAttribute('data-action'),
    title: dataImg.getAttribute('alt'),
    poster_path: dataImg.getAttribute('src'),
    vote_average: dataAverage.textContent,
    vote_count: dataCount.textContent,
    popularity: dataPopularity.textContent,
    original_title: dataOriginal.textContent,
    genres: dataGenres.textContent,
    overview: dataOverview.textContent,
    librarySection: Queue,
  };

  const keyStorage = datalocalStorage.id;
  updateStorage(datalocalStorage, keyStorage);
}

//   const qqqq = JSON.parse(localStorage.getItem(fqwe));

//   console.log(typeof fqwe); // объект
//   console.log(qqqq);
//   console.log((fqwe1 = JSON.parse(localStorage.getItem('fqwe')))); // Объект {x: 12, y: 56}
