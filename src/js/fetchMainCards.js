import axios from 'axios';
import { KEY_API } from './key.js';

export default class FilmsApiService {
  constructor() {
    this.value = '';
  }

  fetchCards(page, value) {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&query=${value}&page=${page}`,
      )
      .then(response => {
        return response.data;
      });
  }
  get searchQuery() {
    return this.value;
  }
  set searchQuery(newQuery) {
    this.value = newQuery;
  }
  resetPage() {
    this.page = page;
  }
}
