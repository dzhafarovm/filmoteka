import { refs } from './refs.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// themeAfterPageReload();

refs.toggle.addEventListener('change', onInputChange);
export function onInputChange() {
  if (refs.toggle.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.filmName.classList.add(Theme.DARK);
    refs.backdrop.classList.add(Theme.DARK);
    refs.modal.classList.add(Theme.DARK);
    refs.cardItem.classList.add(Theme.DARK);
    refs.cardDescription.classList.add(Theme.DARK);
    refs.cardText.classList.add(Theme.DARK);

    refs.body.classList.remove(Theme.LIGHT);
    refs.filmName.classList.remove(Theme.LIGHT);
    refs.backdrop.classList.remove(Theme.LIGHT);
    refs.modal.classList.remove(Theme.LIGHT);
    refs.cardItem.classList.remove(Theme.LIGHT);
    refs.cardDescription.classList.remove(Theme.LIGHT);
    refs.cardText.classList.remove(Theme.LIGHT);

    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.filmName.classList.add(Theme.LIGHT);
    refs.backdrop.classList.add(Theme.LIGHT);
    refs.modal.classList.add(Theme.LIGHT);
    refs.cardItem.classList.add(Theme.LIGHT);
    refs.cardDescription.classList.add(Theme.LIGHT);
    refs.cardText.classList.add(Theme.LIGHT);

    refs.body.classList.remove(Theme.DARK);
    refs.filmName.classList.remove(Theme.DARK);
    refs.backdrop.classList.remove(Theme.DARK);
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
    refs.filmName.classList.add(Theme.LIGHT);
    refs.backdrop.classList.add(Theme.LIGHT);
    refs.modal.classList.add(Theme.LIGHT);
    refs.cardItem.classList.add(Theme.LIGHT);
    refs.cardDescription.classList.add(Theme.LIGHT);
    refs.cardText.classList.add(Theme.LIGHT);

    localStorage.setItem('theme', Theme.LIGHT);
  } else if (savedTheme === Theme.LIGHT) {
    refs.body.classList.add(Theme.LIGHT);
    refs.filmName.classList.add(Theme.LIGHT);
    refs.backdrop.classList.add(Theme.LIGHT);
    refs.modal.classList.add(Theme.LIGHT);
    refs.cardItem.classList.add(Theme.LIGHT);
    refs.cardDescription.classList.add(Theme.LIGHT);
    refs.cardText.classList.add(Theme.LIGHT);

    refs.body.classList.remove(Theme.DARK);
    refs.filmName.classList.remove(Theme.DARK);
    refs.backdrop.classList.remove(Theme.DARK);
    refs.modal.classList.remove(Theme.DARK);
    refs.cardItem.classList.remove(Theme.DARK);
    refs.cardDescription.classList.remove(Theme.DARK);
    refs.cardText.classList.remove(Theme.DARK);
  } else if (savedTheme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.filmName.classList.add(Theme.DARK);
    refs.backdrop.classList.add(Theme.DARK);
    refs.modal.classList.add(Theme.DARK);
    refs.cardItem.classList.add(Theme.DARK);
    refs.cardDescription.classList.add(Theme.DARK);
    refs.cardText.classList.add(Theme.DARK);

    refs.body.classList.remove(Theme.LIGHT);
    refs.filmName.classList.remove(Theme.LIGHT);
    refs.backdrop.classList.remove(Theme.LIGHT);
    refs.modal.classList.remove(Theme.LIGHT);
    refs.cardItem.classList.remove(Theme.LIGHT);
    refs.cardDescription.classList.remove(Theme.LIGHT);
    refs.cardText.classList.remove(Theme.LIGHT);
    refs.toggle.checked = true;
  }
}
