// OK this runs correctly in repl.it, but I have some questions on how that last else block is running if I 'prop in two' to element and two[prop] to two[element] it breaks--why???

function deepEqual (one, two) {
  if(one === two) return true;

  else if(one === null || two === null || typeof one !== 'object' || typeof two !== 'object') return false;

  // else {
  //   return ('do the recursive deepEqual.');
  // }

  else {
    var propsInOne = 0, propsInTwo = 0;

    for(let prop in one)
    propsInOne += 1;

    for(let prop in two) {
      propsInTwo += 1;
      if (!(prop in one) || !deepEqual(one[prop], two[prop]))
      return false;
    }
  }
  return propsInOne === propsInTwo;
}

deepEqual({here: 1, object: 2}, {here: 1, object: 4});
