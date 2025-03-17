import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MoviesIndexRoute extends Route {
  @service store;

  async model() {
    let cachedMovies = await this.store.peekAll('movie');
    console.log(
      '🚀 ~ Cached movies:',
      cachedMovies.map((movie) => movie.serialize()),
    );

    if (!cachedMovies.length) {
      let movies = await this.store.findAll('movie');
      console.log(
        '🚀 Movies Data:',
        movies.map((movie) => movie.serialize()),
      );
      return movies;
    }

    return cachedMovies;
  }
}
