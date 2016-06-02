import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-user', 'Integration | Component | new user', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  const username = 'user';
  const password = 'pass';

  this.set('createUser', function(user) {
    assert.deepEqual(user, {
      username,
      password
    });
  });

  this.render(hbs`{{new-user createUser=(action createUser)}}`);

  this.$('[data-test-selector="new-user-name"]').val(username);
  this.$('[data-test-selector="new-user-name"]').trigger('change');
  this.$('[data-test-selector="new-user-password"] input').val(password);
  this.$('[data-test-selector="new-user-password"] input').trigger('change');
  this.$('[data-test-selector="new-user-submit"]').click();
});
