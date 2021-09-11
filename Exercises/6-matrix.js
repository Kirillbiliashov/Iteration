'use strict';

const max = matrix => {
  let maxValue = 0;
  for (let i = 0; i < matrix.length; i++) {
    const nestedArray = matrix[i];
    for (let k = 0; k < nestedArray.length; k++) {
      if ((k === 0 && i === 0) ||nestedArray[k] > maxValue ) maxValue = nestedArray[k];
    }
  }
  return maxValue;
};

module.exports = { max };
