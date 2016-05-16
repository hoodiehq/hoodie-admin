import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('account-details', 'Integration | Component | account details', {
  integration: true
});

test('it renders', function(assert) {
  this.set('account', { username: 'john_locke_42' });

  this.render(hbs`{{account-details account=account}}`);

  assert.equal(this.$().text().trim(), 'john_locke_42');
});
