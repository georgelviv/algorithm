import { insertionSort } from './insertion-sort.mjs';

const arr = [96, 21, 92, 41, 20, 54, 29, 44, 67, 28, 62, 88, 24, 84, 8, 77, 9, 26, 39];
const expectedArr = [8, 9, 20, 21, 24, 26, 28, 29, 39, 41, 44, 54, 62, 67, 77, 84, 88, 92, 96];

console.log(insertionSort(arr).join('') === expectedArr.join(''));

