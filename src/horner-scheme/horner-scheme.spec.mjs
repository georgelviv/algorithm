import { hornerScheme } from './horner-scheme';

const polynomArr = [5, 5, 1, 0, -11];
const x = 1;

console.log(`
  Horner Scheme
  INPUT: polynomArr = ${ polynomArr },  x = ${ 3 }
  OUTPUT: ${ hornerScheme(polynomArr, x) }
`);
