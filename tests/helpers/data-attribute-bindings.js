import Ember from 'ember';

Ember.Component.reopen({
  attributeBindings: ['data-test-selector']
});
