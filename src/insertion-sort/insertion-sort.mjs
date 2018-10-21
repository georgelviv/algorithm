export const insertionSortBase = (predicat = (a, b) => a > b, arr) => {
  const sortedArr = arr.slice();

  for (let j = 1; j < sortedArr.length; j++) {
    const key = sortedArr[j];
    let i = j - 1;

    while (i >= 0 && predicat(sortedArr[i], key)) {
      sortedArr[i + 1] = sortedArr[i];
      --i;
    }

    sortedArr[i + 1] = key;
  }

  return sortedArr;
}

export const insertionSort = insertionSortBase.bind(null, (a, b) => a > b);
export const descendingInsertionSort = insertionSortBase.bind(null, (a, b) => a < b);