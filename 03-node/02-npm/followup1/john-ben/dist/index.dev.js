"use strict";

var _require = require('uuid'),
    uuidv4 = _require.v4;

for (var i = 0; i < 10; i++) {
  console.log(uuidv4());
}