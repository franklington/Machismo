import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/failed', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/failed');
    assert.ok(route);
  });
});
