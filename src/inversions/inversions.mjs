export const inversions = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }

  return count;
};

export const inversionsMerge = (arr) => {
  let newArr = arr.slice();
  return mergeSort(newArr, 0, arr.length - 1);
}

export const mergeSort = (arr, p, q) => {
  let count = 0;


  if ((q - p) < 1) {
    return count;
  }

  const c = Math.floor((p + q) / 2);

  if ((q - p) > 1) {
    count = mergeSort(arr, p, c);
    count += mergeSort(arr, c + 1, q);
  }

  count += merge(arr, p, c, q);


  return count;
};

function merge(arr, p, c, q) {
  let i = p;
  let j = c + 1;
  let arrB = [];
  let count = 0;

  for (let k = p; k <= q; k++) {
    if (j > q || (i <= c && arr[i] <= arr[j])) {
      arrB[k] = arr[i];
      i++;
    } else {
      arrB[k] = arr[j];
      j++;
      count = count + (c - i + 1);
    }
  }

  for (let k = p; k <= q; k++) {
    arr[k] = arrB[k];
  }

  return count;
}