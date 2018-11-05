import { checkSimpleSum } from './check-simple-sum.mjs';

const arr = [1, 2, 13, 6, 13, 8, 5, 12, 6, 11, 9, 3, 10, 7, 15, 4]
const x = 22;

console.log(`
  СheckSimpleSum
  INPUT: arr = ${ arr } x = ${ x }
  OUTPUT: ${ checkSimpleSum(arr, x) }
`);
