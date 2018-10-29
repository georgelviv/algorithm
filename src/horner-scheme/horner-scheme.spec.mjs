import { hornerScheme } from './horner-scheme';

const polynomArr = [2, -6, 2, -1];
const x = 3;

console.log(`
  LinearSeacrh
  INPUT: polynomArr = ${ polynomArr },  x = ${ 3 }
  OUTPUT: ${ hornerScheme(polynomArr, x) }
`);
