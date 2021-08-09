import axios from 'axios';
import { KEY_API } from './key.js';

const urlPopalarDay = 'https://api.themoviedb.org/3/trending/movie/day';

// Запрос популярных фильмов за сегодня
export function fetchPopularCollection() {
  return axios.get(`${urlPopalarDay}?api_key=${KEY_API}`).then(response => {
    //  console.log(response.data);
    return response.data;
  });
}
