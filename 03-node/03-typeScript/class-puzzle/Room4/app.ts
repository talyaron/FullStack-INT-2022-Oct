// const _ = require('lodash');

import { flattenDeep as flatArr } from "lodash";

// console.log(lodash);
const deepArray = [1, [2, [3, [4, [5]]]]];

console.log(deepArray);
console.log(flatArr(deepArray));
