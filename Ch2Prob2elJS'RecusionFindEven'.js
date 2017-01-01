//Recursion.  IsEven?

function isEven(num) {
  if(num === 0) return true;
  if(num === 1) return false;
  else return isEven(num - 2);
}


// isEven for neg numbers:
function isEven(num) {
  if(num < -1) num = -num;
  if(num === 0) return true;
  if(num === 1) return false;
  else return isEven(num - 2);
}



function isEven(num) {
  if (num >= 0) {
    	if (num === 0) return true;
	    if (num === 1) return false;
	    else {
		    return isEven(num - 2);
	    }
  }
}

isEven(50); //true


//I am a genius!  This now works for neg nums too (this was the stretch goal)

//Recursion.  IsEven?

function isEven(num) {
  if (num >= 0) {
    	if (num === 0) return true;
	    if (num === 1) return false;
	    else {
		    return isEven(num - 2);
	    }
  }
  if (num < 0) {
  	if (num === 0) return true;
  	if (num === -1) return false;
  	else {
  		return isEven(num + 2);
  	}
  }
}

isEven(-7); //returns false

// Or the much more elegant solution:
function isEven(num) {
	if (num === 0) return true;
  if (num === 1) return false;
  if (num < 0) return isEven(-num);
  else {
    return isEven(num - 2);
  }
}

isEven(-45); //returns false
