import Model, { attr } from '@ember-data/model';
import config from 'movie-app/config/environment';

export default class MovieModel extends Model {
  @attr title;
  @attr poster_path;
  @attr({ defaultValue: 'n/a' }) overview;
  @attr backdrop_path;
  @attr release_date;

  get image() {
    return `${config.TMDB_IMG}${this.poster_path}`;
  }

  get backdrop() {
    return `${config.TMDB_IMG}${this.backdrop_path}`;
  }

  get year(){
    return new Date(this.release_date).getFullYear();
  }
}
