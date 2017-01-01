//Write own Math.min function which return the minium of 2 arguments.

//console.log(Math.min(8, 28, 2, 102, 4));

// or, if only 2 arguments

function mathMin(a, b) {
	return a <= b ? a : b;
}


function returnMin(a, b) {
	return a <= b ? a: b;
}



returnMin(601, 61);

//or the longer version:

function returnMin(a, b) {
	if(a <= b) {
		return a;
	}
	else return b;
}

returnMin(601, 60);
