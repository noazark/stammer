var assert = require('assert')
  , Stammer = require('../index')

describe('stammer', function () {
  it('repeats until the result is the same', function () {
    assert.equal(Stammer.decode('F&amp;#252;rth'), 'Fürth');
  });

  it('safely returns decoded strings', function () {
    assert.equal(Stammer.decode('Fürth'), 'Fürth');
  });

  it('throws an error once the limit has been reached', function() {
    assert.throws(
      function() {
        Stammer.decode('', 0)
      },
      Error
    );
  });
});
