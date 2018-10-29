// polynom arr is array of coefficients in polynom
export const hornerScheme = (polynomArr, x) => {
  let polynom = polynomArr.slice();
  let res;

  while (polynom.length) {
    const coef = polynom.shift();

    res = res 
      ? res * x + coef
      : coef;
  }

  return res;
} 