import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/success', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/success');
    assert.ok(route);
  });
});
