export const bitwiseSum = (a, b) => {
  const aLength = a.length;
  const bLength = b.length;

  const c = Array.from(new Array(Math.max(aLength, bLength) + 1)).fill(0);
  const cLength = c.length;

  let acum = 0;

  for (let i = 0; i < cLength; i++) {
    const aKey = a[aLength - i - 1] || 0;
    const bKey = b[bLength - i - 1] || 0;
    const cIndexLeft = cLength - i - 1;

    const calcAcum = binarySum(acum, aKey);
    c[cIndexLeft] = calcAcum.sum;
    acum = calcAcum.acum;

    const calcB = binarySum(c[cIndexLeft], bKey);
    c[cIndexLeft] = calcB.sum;
    acum = acum | calcB.acum;
  }

  return c;
};

function binarySum(a, b) {
  return {
    sum: a ^ b,
    acum: a && b
  };
}