import { binarySearch } from './binary-search';

const sortedArr = [8, 9, 20, 21, 24, 26, 28, 29, 39, 41, 44, 54, 62, 67, 77, 84, 88, 92, 96];
const v = 44;

console.log(`
  BinarySearch
  INPUT: sortedArr = ${ sortedArr },  v = ${ v }
  OUTPUT: ${ binarySearch(sortedArr, v) }
`);
