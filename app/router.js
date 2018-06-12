import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('index', {path:"/"},function() {
    this.route('create');
    this.route('success');
    this.route('failed');
  });
});

export default Router;
