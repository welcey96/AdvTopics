import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MoviesDetailsRoute extends Route {
  @service router;
  @service movie;

  async model(params) {
    return await this.movie.get(params.id);
  }

  redirect(pathParams) {
    console.log('🚀 ~ MoviesDetailsRoute ~ redirect ~ model:', pathParams.id);
    if (isNaN(+pathParams.id)) this.router.transitionTo('movies');
  }
}
