import Ember from 'ember';

const {
  Route,
  inject: { service },
  get
} = Ember;

export default Route.extend({
  accountAdmin: service('hoodie-account-admin'),
  model() {
    return get(this, 'accountAdmin.accounts').findAll();
  },

  beforeModel(transition) {
    let isLoggedIn = get(this, 'accountAdmin').isSignedIn();
    if (!isLoggedIn) {
      transition.abort();
      this.transitionTo('login');
    }
  }

});
