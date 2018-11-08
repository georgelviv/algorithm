export const mergeSort = (inputArr, p, q) => {
  let arr = typeof p !== 'number' || typeof q !== 'number' 
    ? inputArr.slice()
    : inputArr;

  if (arr !== inputArr) {
    return mergeSort(arr, 0, arr.length - 1);
  }

  if ((q - p) < 1) {
    return;
  }

  const c = Math.floor((p + q) / 2);

  if ((q - p) > 1) {
    mergeSort(arr, p, c);
    mergeSort(arr, c + 1, q);
  } 


  return merge(arr, p, c, q);
};

function merge(arr, p, c, q) {
  let i = p;
  let j = c + 1;
  let arrB = [];

  for (let k = p; k <= q; k++) {
    if (j > q || (i <= c && arr[i] <= arr[j])) {
      arrB[k] = arr[i];
      i++;
    } else {
      arrB[k] = arr[j];
      j++;
    }
  }

  for (let k = p; k <= q; k++) {
    arr[k] = arrB[k];
  }

  return arr;
}