import RestAdapter from '@ember-data/adapter/rest';
import config from 'movie-app/config/environment';

export default class MovieAdapter extends RestAdapter {
  urlForFindAll() {
    let endpoint = '/discover/movie';
    return `${config.TMDB_HOST}${config.TMDB_API_VERSION}${endpoint}?api_key=${config.TMDB_API_KEY}`;
  }
}
