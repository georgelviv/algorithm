export const checkSimpleSum = (s, k) => {
  const arr = s.slice().sort((a, b) => a - b);

  let l = 0;
  let r = arr.length - 1;
  let sum;

  while (l <= r) {
    sum = arr[l] + arr[r]
    if (sum > k) {
      r = r - 1;
    }
    if (sum < k) {
      l = l + 1;
    }
    if (sum == k) {
      let originL = s.indexOf(l);
      let originR = s.indexOf(r);
      return [originL, originR];
    }
  }

  return [-1, -1];
}