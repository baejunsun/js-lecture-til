function bubbleSort(array) {

  let change = 0;

  for (let i = array.length - 1; i > 0; i--) {

    for (let j = 0; j < i; j++) {

      if (array[j] > array[j + 1]) {
        change = array[j]
        array[j] = array[j + 1];
        array[j + 1] = change;
      }
    }
  }

  return array;

}

console.log(bubbleSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(bubbleSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]
console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]