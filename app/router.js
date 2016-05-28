import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('accounts', {path: '/'});
  this.route('account', {path: '/account/:account_id'});
  this.route('login');
});

export default Router;
