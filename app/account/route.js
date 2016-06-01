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
  },

  actions: {
    deleteAccount(account) {
      if (confirm(`Are you sure you'd like to delete ${account.username}'s account?`)) {
        get(this, 'accountAdmin.accounts').remove(account.id)
        .then(() => {
          this.transitionTo('accounts');
        });
      }
    }
  }
});
