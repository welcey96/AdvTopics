import Service, { service } from '@ember/service';
import config from 'movie-app/config/environment';

export default class MovieService extends Service {
  url = `${config.TMDB_HOST}${config.TMDB_API_VERSION}/movie`;

  async get(id) {
    try {
      const res = await fetch(
        `${this.url}/${id}?api_key=${config.TMDB_API_KEY}`,
      );
      const movie = await res.json();

      return {
        id: movie.id,
        title: movie.title,
        poster_path: `${config.TMDB_IMG}${movie.poster_path}`,
        backdrop_path: `${config.TMDB_IMG}${movie.backdrop_path}`,
        overview: movie.overview ?? 'n/a',
        release_date: movie.release_date,
      };
    } catch (error) {
      console.error('Error fetching movies:', error);
      return {};
    }
  }
}
