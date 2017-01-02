function reverseArray(array) {
  let reversedArray = [];
  for(let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
  let middle = array.length / 2;
  for (let i = array.length - 1, k = 0; i >= middle; i--, k++) {
    console.log(i);
    let temp = array[k];
    array[k] = array[i];
    array[i] = temp;
  }
  return array;
}

// reverseArrayInPlace([1, 2, 3, 4, 5]);
