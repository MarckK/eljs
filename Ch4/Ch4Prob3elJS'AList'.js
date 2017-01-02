//write function to build a list when given array as an argument.

function arrayToList(array) {
  let list = null;
  for(i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    };
  }
  return list;
}

//write function to produce an array of values from a list.

function listToArray(list) {
  let returnArr = [];
  for (var node = list; node; node = node.rest) {
    returnArr.push(node.value);
  }
  return returnArr;
}

//write helper prepend func to add element to a list and thereby create a new list

function prepend(val, list) {
  return {
    value: val,
    rest: list
  };
}

//wirte func to return element at given position in list (or undefined if no element at that position)

function nth(list, num) {
  if(num === 0) return list;
  else {
    for(i = 1; i <= num; i++) {
    list = list.rest;
    }
  }
  return list;
}

//note can then get whatever property you want out of that nth position element

//recursive version of nth function (above)

function nth(list, num) {
  if(!list) return undefined;
  if(num === 0) return list;
  else {
    return nth(list.rest, num - 1);
  }
}

//again, can get whatever property you want out of that nth position element
