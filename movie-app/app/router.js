import EmberRouter from '@ember/routing/router';
import config from 'movie-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('movies', function () {
    this.route('details', { path: '/:id' });
  });
});
