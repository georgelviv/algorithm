export const selectionSort = (arr) => {
  const originalArr = arr.slice();
  const sortedArr = [];

  while (originalArr.length) {
    let index = 0;
    let cur = originalArr[index];
    for (let i = 1; i < originalArr.length; i++) {
      let key = originalArr[i];
      if (key < cur) {
        cur = key;
        index = i;
      }
    }

    sortedArr.push(cur);
    originalArr.splice(index, 1);
  }

  return sortedArr;
}