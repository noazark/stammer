var Encoder = require('node-html-encoder').Encoder
  , encoder = new Encoder();

var decode = function(string, limit) {
  var limit = limit != undefined ? limit : 10,
    count = 0,
    lastResult;
  for (count; count <= limit; count++) {
    string = encoder.htmlDecode(string);
    if (lastResult != undefined && string == lastResult) {
      return string;
    } else {
      lastResult = string;
      continue;
    }
  }
  throw new Error('Overflown');
}

module.exports = {
  decode: decode
}
