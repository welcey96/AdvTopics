import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MoviesDetailsRoute extends Route {
  @service router;

  redirect(pathParams) {
    console.log('🚀 ~ MoviesDetailsRoute ~ redirect ~ model:', pathParams.id);
    if (isNaN(+pathParams.id)) this.router.transitionTo('movies');
  }
}
