"use strict";

//import module
var _require = require('uuid'),
    uuidv4 = _require.v4;

for (var i = 0; i < 4; i++) {
  console.log(uuidv4());
}