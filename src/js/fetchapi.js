import axios from "axios";
import KEY_API from './key';


export default{
// Фетч фильма по  ID
  async getMovieById(id) {
    
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY_API}`);

      const result = {
        ...data,
        // year: createYear(data),
        // customGenres: createGenresFromID(data),
      };

      return result;

  },
};
