export const linearSearchDuplicates = (arr) => {
  const elements = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (!elements[key]) {
      elements[key] = i;
    } else {
      return elements[key];
    }
  }
  return -1;
}