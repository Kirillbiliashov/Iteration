'use strict';

const sum = (...args) => {
let acc = 0;
let i = 0;
do {
  if (args.length === 0) return 0;
  acc += args[i];
  i++;
} while (i < args.length);
return acc;
};

module.exports = { sum };
