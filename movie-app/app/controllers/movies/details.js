import Controller from '@ember/controller';

export default class MoviesDetailsController extends Controller {
  get backdrop() {
      return `background-image: url(${this.model.backdrop_path})`;
  }
}
