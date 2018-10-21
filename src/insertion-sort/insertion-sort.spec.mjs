import { insertionSort, descendingInsertionSort } from './insertion-sort.mjs';

const arr = [96, 21, 92, 41, 20, 54, 29, 44, 67, 28, 62, 88, 24, 84, 8, 77, 9, 26, 39];

console.log(`
  InsertionSort
  INPUT: arr = ${ arr }
  OUTPUT: ${ insertionSort(arr) }
`);

console.log(`
  DescendingInsertionSort
  INPUT: arr = ${ arr }
  OUTPUT: ${ descendingInsertionSort(arr) }
`);
