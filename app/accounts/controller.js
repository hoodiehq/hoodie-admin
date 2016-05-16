import Ember from 'ember';

const {
  Controller,
  inject: { service },
  get
} = Ember;

export default Controller.extend({
  accountAdmin: service('hoodie-account-admin'),

  actions: {
    signOut() {
      get(this, 'accountAdmin').signOut().then(() => {
        this.transitionToRoute('login');
      });
    }
  }
});
