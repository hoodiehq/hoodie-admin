/* global AccountAdmin */
import Ember from 'ember';

const {
  computed: { alias }
} = Ember;

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.admin = new AccountAdmin({url: '/hoodie/account/api'});
  },

  signIn({username, password}) {
    return this.admin.signIn({username, password});
  },

  signOut() {
    return this.admin.signOut();
  },

  isSignedIn() {
    return this.admin.isSignedIn();
  },

  username: alias('admin.username'),
  accounts: alias('admin.accounts')
});
