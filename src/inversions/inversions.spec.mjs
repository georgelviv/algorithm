import { inversionsMerge } from './inversions';

const arr = [96, 21, 92, 41, 20, 54, 29, 44, 67, 28, 62, 88, 24, 84, 8, 77, 9, 26, 39];
const v = 44;

console.log(`
  Inversions
  INPUT: arr = ${ arr }
  OUTPUT: ${ inversionsMerge(arr) }
`);
