import { selectionSort } from './selection-sort.mjs';

const arr = [96, 21, 92, 41, 20, 54, 29, 44, 67, 28, 62, 88, 24, 84, 8, 77, 9, 26, 39];

console.log(`
  SelectionSort
  INPUT: arr = ${ arr }
  OUTPUT: ${ selectionSort(arr) }
`);
