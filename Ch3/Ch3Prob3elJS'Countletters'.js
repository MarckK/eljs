countBs('Have a BBBBbb'); //returns 4

//For any letter to be counted in string:

function countBs(str) {
	return str.filter(el => el === "B";).length;
}


function countBs (string) {
	let Bcount = 0;
	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) === 'B') Bcount++;
	}
	return Bcount;
}

countBs('Have a BBBBbb'); //returns 4

//For any letter to be counted in string:

function countLetter (string, letter) {
	let letterCount = 0;
	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) === letter) letterCount++;
	}
	return letterCount;
}

countLetter('Have a BBBBbb', 'a'); //returns 2

//Then if you want to have countBs using the more generic countLetter function you just put more generic function inside more specific function

function countBs (string) {
	return countLetter(string, 'B');
}

countBs('Have a BBB', 'B'); //returns 3  // should be: countBs('Have a BBB') to return 3
