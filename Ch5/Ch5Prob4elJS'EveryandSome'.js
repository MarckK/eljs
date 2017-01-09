function every(array, test) {
  for(i = 0; i < array.length; i++) {
    if(test(array[i]) === false) return false;
  }
  return true;
}

function some(array, test) {
  for(i = 0; i < array.length; i++) {
    if(test(array[i]) === true) return true;
  }
  return false;
}
