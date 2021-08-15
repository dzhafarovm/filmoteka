import axios from 'axios';
import { KEY_API } from './key.js';

const urlPopalarDay = 'https://api.themoviedb.org/3/trending/movie/day';

// Запрос популярных фильмов за сегодня
export function fetchPopularCollection(page) {
  return axios.get(`${urlPopalarDay}?api_key=${KEY_API}&page=${page}`).then(response => {
    //  console.log(response.data);
    return response.data;
  });
}
