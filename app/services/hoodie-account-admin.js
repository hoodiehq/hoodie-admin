import Ember from 'ember';
import HoodieAdmin from 'npm:@hoodie/admin-client';

const {
  computed: { alias }
} = Ember;

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.admin = new HoodieAdmin();

    // for debugging only
    window.hoodieAdmin = this.admin;
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
