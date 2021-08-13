//////////// Кнопка "add to Watched"  добавить- к просмотренным
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

  //   console.log(dataId.getAttribute('data-action')); //1
  //   console.log(dataImg.getAttribute('alt')); //2
  //   console.log(dataImg.getAttribute('src')); //3
  //   console.log(dataAverage.textContent); //4
  //   console.log(dataCount.textContent); //5
  //   console.log(dataPopularity.textContent); //6
  //   console.log(dataOriginal.textContent); //7
  //   console.log(dataGenres.textContent); //8
  //   console.log(dataOverview.textContent); //9

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
    //
  };
  console.log(datalocalStorage);

  localStorage.setItem(datalocalStorage, JSON.stringify(datalocalStorage));
}

//////////// Кнопка "add to queue" -  добавить в очередь
//   const qqqq = JSON.parse(localStorage.getItem(fqwe));

//   console.log(typeof fqwe); // объект
//   console.log(qqqq);
//   console.log((fqwe1 = JSON.parse(localStorage.getItem('fqwe')))); // Объект {x: 12, y: 56}
