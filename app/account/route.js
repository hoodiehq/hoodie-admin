import Ember from 'ember';

const {
  Route,
  inject: { service },
  get
} = Ember;

export default Route.extend({
  accountAdmin: service('hoodie-account-admin'),

  model(params) {
    return get(this, 'accountAdmin.accounts').find(params.account_id);
  },

  beforeModel(transition) {
    let isLoggedIn = get(this, 'accountAdmin').isSignedIn();
    if (!isLoggedIn) {
      transition.abort();
      this.transitionTo('login');
    }
  }
});
