'use strict';

const ages = persons => {
 const hashObj = {};
 for (const person in persons) {
   const info = persons[person];
  hashObj[person] = info.died - info.born;
 }
 return hashObj;
};

module.exports = { ages };
