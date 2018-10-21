export const linearSearch = (arr, v) => {
  for (let i = 0; i <= arr.length; i++) {
    const key = arr[i];
    if (key === v) return i;
  }
  return -1;
}