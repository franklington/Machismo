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
<<<<<<< HEAD
  this.route('imprint');
=======
  this.route('nimda');
>>>>>>> fb5b323aa5f634c812e92dcfbef60f8c36d945b7
});

export default Router;
