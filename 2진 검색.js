// 1번
// function binarySearch(array, target) {
//   let start = 1;
//   let end = array.length;
//   let mid = Math.floor((start + end) / 2);

//   if (target < 1 || target > array.length) {
//     return -1;
//   }

//   while (start < end && mid !== target) {
//     if (mid < target) {
//       start = mid + 1;
//     } else if (mid > target) {
//       end = mid - 1;
//     }
//     mid = Math.floor((start + end) / 2);
//   }

//   return mid - 1;

// }


// 2번
function binarySearch(array, target) {

    let number = Math.floor(array.length / 2);
    let half = Math.floor(array.length / 2);
  
    if (target < 1 || target > array.length) {
      return -1;
    }
  
    while (number !== target) {
      half = Math.floor(half / 2);
      if (half === 0) {
        half = 1;
      }
  
      if (number > target) {
        number = Math.floor(number / 2);
      } else if (number < target) {
        number += Math.floor(half);
      }
    }
    return number - 1;
  }
  
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
  console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 7)) //6
  console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 10));//9
  console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1
  