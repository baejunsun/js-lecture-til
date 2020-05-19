// const arr = [1, 2, 3, 1, 2];
// // 배열 array에서 item 요소를 제거한다. item 요소가 여러 개 존재하면 첫번째 요소만 제거한다.
// function remove(array, item) {
//   // 제거할 item 요소의 인덱스
//   const index = array.indexOf(item);
//   // 제거할 item 요소가 있다면 제거한다.
//   if (index !== -1) array.splice(index, 1);
//   return array;
// }
// console.log(remove(arr, 2)); // [1, 3, 1, 2]
// console.log(remove(arr, 10)); // [1, 3, 1, 2]

class Remove {
  constructor(array, item){
    this.array = array;
    this.item = item;
  }
  remove() {
    const index = this.array.indexOf(item);
    if (this.index !== -1)
      this.array.splice(index, 1);
      return array;
  }
}

const arr = new Remove();

const result = arr.remove([1,2,3,1,2,], 2)

console.log(result);

console.log(arr);
