import { linearSearchDuplicates } from './linear-search-duplicates.mjs';

const arr = [96, 21, 92, 41, 20, 54, 29, 44, 67, 28, 62, 88, 24, 84, 8, 41, 77, 9, 26, 39];

console.log(`
  LinearSeacrhDuplicates
  INPUT: arr = ${ arr }
  OUTPUT: ${ linearSearchDuplicates(arr) }
`);
