import { refs } from './refs.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Поиск рефов по карточке
function getRefsId() {
  return {
    filmName: document.querySelectorAll('.film-name'),
    body: document.querySelector('.body'),
    backdrop: document.querySelector('.backdrop'),
    footer: document.querySelector('.footer'),
  };
}
const refsId = getRefsId();
refs.toggle.addEventListener('change', onInputChangeMain);
refs.toggle.addEventListener('change', onInputChangeCards);
themeCardsAfterPageReload();
themeAfterPageReload();
export function onInputChangeMain() {
  if (refs.toggle.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.backdrop.classList.add(Theme.DARK);
    refs.footer.classList.add(Theme.DARK);

    refs.body.classList.remove(Theme.LIGHT);
    refs.backdrop.classList.remove(Theme.LIGHT);
    refs.footer.classList.remove(Theme.LIGHT);

    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.backdrop.classList.add(Theme.LIGHT);
    refs.footer.classList.add(Theme.LIGHT);

    refs.body.classList.remove(Theme.DARK);
    refs.backdrop.classList.remove(Theme.DARK);
    refs.footer.classList.remove(Theme.DARK);

    localStorage.setItem('theme', Theme.LIGHT);
  }
}

export function onInputChangeCards() {
  if (refs.toggle.checked) {
    refsId.filmName.forEach(el => el.classList.add(Theme.DARK));
    refsId.filmName.forEach(el => el.classList.remove(Theme.LIGHT));

    localStorage.setItem('theme', Theme.DARK);
  } else {
    refsId.filmName.forEach(el => el.classList.add(Theme.LIGHT));
    refsId.filmName.forEach(el => el.classList.remove(Theme.DARK));

    localStorage.setItem('theme', Theme.LIGHT);
  }
}

// export function onInputChangeCards() {
//     if (refs.toggle.checked) {
//       refsId.filmName.classList.add(Theme.DARK);
//       refsId.filmName.classList.remove(Theme.LIGHT);

//       localStorage.setItem('theme', Theme.DARK);
//     } else {
//       refsId.filmName.classList.add(Theme.LIGHT);
//       refsId.filmName.classList.remove(Theme.DARK);

//       localStorage.setItem('theme', Theme.LIGHT);
//     }
//   }

export function onInputChangeModal() {
  if (refs.toggle.checked) {
    refs.modal.classList.add(Theme.DARK);
    refs.cardItem.classList.add(Theme.DARK);
    refs.cardDescription.classList.add(Theme.DARK);
    refs.cardText.classList.add(Theme.DARK);

    refs.modal.classList.remove(Theme.LIGHT);
    refs.cardItem.classList.remove(Theme.LIGHT);
    refs.cardDescription.classList.remove(Theme.LIGHT);
    refs.cardText.classList.remove(Theme.LIGHT);

    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.modal.classList.add(Theme.LIGHT);
    refs.cardItem.classList.add(Theme.LIGHT);
    refs.cardDescription.classList.add(Theme.LIGHT);
    refs.cardText.classList.add(Theme.LIGHT);

    refs.modal.classList.remove(Theme.DARK);
    refs.cardItem.classList.remove(Theme.DARK);
    refs.cardDescription.classList.remove(Theme.DARK);
    refs.cardText.classList.remove(Theme.DARK);

    localStorage.setItem('theme', Theme.LIGHT);
  }
}

export function themeAfterPageReload() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === null) {
    refs.body.classList.add(Theme.LIGHT);
    refs.backdrop.classList.add(Theme.LIGHT);
    refs.footer.classList.add(Theme.LIGHT);

    localStorage.setItem('theme', Theme.LIGHT);
  } else if (savedTheme === Theme.LIGHT) {
    refs.body.classList.add(Theme.LIGHT);
    refs.backdrop.classList.add(Theme.LIGHT);
    refs.footer.classList.add(Theme.LIGHT);

    refs.body.classList.remove(Theme.DARK);
    refs.backdrop.classList.remove(Theme.DARK);
    refs.footer.classList.remove(Theme.DARK);
  } else if (savedTheme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.backdrop.classList.add(Theme.DARK);
    refs.footer.classList.add(Theme.DARK);

    refs.body.classList.remove(Theme.LIGHT);
    refs.backdrop.classList.remove(Theme.LIGHT);
    refs.footer.classList.remove(Theme.LIGHT);
    refs.toggle.checked = true;
  }
}

export function themeCardsAfterPageReload() {
  console.log(refsId.filmName);
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === null) {
    refsId.filmName.forEach(e => e.classList.add(Theme.LIGHT));

    localStorage.setItem('theme', Theme.LIGHT);
  } else if (savedTheme === Theme.LIGHT) {
    refsId.filmName.forEach(e => e.classList.add(Theme.LIGHT));
    refsId.filmName.forEach(e => e.classList.remove(Theme.DARK));
  } else if (savedTheme === Theme.DARK) {
    refsId.filmName.forEach(e => e.classList.add(Theme.DARK));
    refsId.filmName.forEach(e => e.classList.remove(Theme.LIGHT));

    refs.toggle.checked = true;
  }
}
export function themeModalAfterPageReload() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === null) {
    refs.modal.classList.add(Theme.LIGHT);
    refs.cardItem.classList.add(Theme.LIGHT);
    refs.cardDescription.classList.add(Theme.LIGHT);
    refs.cardText.classList.add(Theme.LIGHT);

    localStorage.setItem('theme', Theme.LIGHT);
  } else if (savedTheme === Theme.LIGHT) {
    refs.modal.classList.add(Theme.LIGHT);
    refs.cardItem.classList.add(Theme.LIGHT);
    refs.cardDescription.classList.add(Theme.LIGHT);
    refs.cardText.classList.add(Theme.LIGHT);

    refs.modal.classList.remove(Theme.DARK);
    refs.cardItem.classList.remove(Theme.DARK);
    refs.cardDescription.classList.remove(Theme.DARK);
    refs.cardText.classList.remove(Theme.DARK);
  } else if (savedTheme === Theme.DARK) {
    refs.modal.classList.add(Theme.DARK);
    refs.cardItem.classList.add(Theme.DARK);
    refs.cardDescription.classList.add(Theme.DARK);
    refs.cardText.classList.add(Theme.DARK);

    refs.modal.classList.remove(Theme.LIGHT);
    refs.cardItem.classList.remove(Theme.LIGHT);
    refs.cardDescription.classList.remove(Theme.LIGHT);
    refs.cardText.classList.remove(Theme.LIGHT);
    refs.toggle.checked = true;
  }
}
