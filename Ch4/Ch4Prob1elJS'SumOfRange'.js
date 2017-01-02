function range(start, end, step) {
  let arr = [];
  if(!step) step = 1;
  if(step < 0) {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  else {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

function sum(array) {
  var sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//sum(range(1, 10));     returns 55

//range(5, 2, -1);    returns [5, 4, 3, 2]
