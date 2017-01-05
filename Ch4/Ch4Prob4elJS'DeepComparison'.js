function deepEqual (one, two) {
  if(one === two) return true;

  else if(one === null || two === null || typeof one !== 'object' || typeof two !== 'object') return false;

  else {
    var propsInOne = 0, propsInTwo = 0;

    for(let prop in one) {
      propsInOne += 1;
    }

    for(let element in two) {
      propsInTwo += 1;
      if (!(element in one) || !deepEqual(one[element], two[element])) {
        return false;
      }
    }
  }
  return propsInOne === propsInTwo;
}

// deepEqual({here: 1, object: 2}, {here: 1, object: 4});
