function selectionSort(array) {

  let min = 0;
  let change = 0;

  for (let i = 0; i < array.length; i++) {

    min = i;

    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    change = array[i]
    array[i] = array[min];
    array[min] = change;
  }

  return array;
}

console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]