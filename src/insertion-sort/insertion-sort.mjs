export const insertionSort = (arr) => {
  const sortedArr = arr.slice();

  for (let j = 1; j < sortedArr.length; j++) {
    const key = sortedArr[j];
    let i = j - 1;

    while (i >= 0 && sortedArr[i] > key) {
      sortedArr[i + 1] = sortedArr[i];
      --i;
    }

    sortedArr[i + 1] = key;
  }

  return sortedArr;
}