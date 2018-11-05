export const binarySearch = (sortedArr, v) => {
  let first = 0;
  let last = sortedArr.length - 1;

  while (last > first) {
    const middle = first + Math.floor((last - first) / 2);
    const key = sortedArr[middle];
    if (key >= v) {
      last = middle;
    } else {
      first = middle + 1;
    }
  }

  if (sortedArr[last] === v) {
    return last;
  }

  return -1;
};