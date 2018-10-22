import { bitwiseSum } from './bitwise-sum.mjs';

const a = [0, 0, 1];
const b = [0, 1, 1];

console.log(`
  BitwiseSum
  INPUT: a = ${ a },  b = ${ b }
  OUTPUT: ${ bitwiseSum(a, b) }
`);
