import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('show-password-toggle', 'Integration | Component | show password toggle', {
  integration: true
});

test('it toggles input type', function(assert) {
  assert.expect(2);

  this.render(hbs`{{show-password-toggle}}`);

  assert.equal(this.$('input').attr('type'), 'password');

  this.$('[data-test-selector="password-visibility-toggle"]').click();

  assert.equal(this.$('input').attr('type'), 'text');
});

test('it binds to `value` just like `{{input`', function(assert) {
  assert.expect(3);

  this.set('value', 'hello');

  this.render(hbs`{{show-password-toggle value=value}}`);

  assert.equal(this.$('input').val(), 'hello');

  this.$('input').val('hello world');
  this.$('input').trigger('change');

  assert.equal(this.get('value'), 'hello world');

  this.$('[data-test-selector="password-visibility-toggle"]').click();
  this.$('input').val('hello world!');
  this.$('input').trigger('change');

  assert.equal(this.get('value'), 'hello world!');
});
