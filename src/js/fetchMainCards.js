import axios from 'axios';
export default class FilmsApiService {
  constructor() {
    this.query = '';
    this.page = 1;
  }

  fetchCards() {
    const API_KEY = '93ab5af0b6f3bcde1224ca161062db06';
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.query}&page=${this.page}`,
      )
      .then(response => response.data)
      .then(({ results, total_pages }) => {
        this.page += 1;
        console.log({ results, total_pages });
        return { results, total_pages };
      });
  }
  get searchQuery() {
    return this.query;
  }
  set searchQuery(newQuery) {
    this.query = newQuery;
  }
  resetPage() {
    this.page = 1;
  }
}
