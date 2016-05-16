import Ember from 'ember';

const {
  Controller,
  inject: { service },
  get,
  set
} = Ember;

export default Controller.extend({
  currentPasswordValue: 'secret',
  accountAdmin: service('hoodie-account-admin'),

  actions: {
    signIn(password) {
      get(this, 'accountAdmin').signIn({
        username: 'admin',
        password: password
      }).then(() => {
        this.transitionToRoute('accounts');
      }).catch((reason) => {
        set(this, 'currentError', reason.message);
      });
    },
  }
});
