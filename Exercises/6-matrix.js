'use strict';

// const max = matrix => {
//   let maxValue = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     const nestedArray = matrix[i];
//     for (let k = 0; k < nestedArray.length; k++) {
//       if ((k === 0 && i === 0) ||nestedArray[k] > maxValue ) maxValue = nestedArray[k];
//     }
//   }
//   return maxValue;
// };

const max = matrix => {
  let maxVal = 0;
  for (const elem of matrix) {
    if (typeof elem === 'object') {
      const nestedMax = max(elem);
      maxVal = Math.max(maxVal, nestedMax);
    } else maxVal = Math.max(maxVal, elem);
  }
  return maxVal;
}

module.exports = { max };
