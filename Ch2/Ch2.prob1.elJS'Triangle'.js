

function triangle(num) {
	var str = '';
	for(let i = 1; i <= num; i ++) {
		str += '#'.repeat(i) + '\n';
	}
	console.log(str.slice(0, -1));
}


// a triangle: (get 7 lines to print with num # same as their line num)

function triangle() {
	for (let i = 1; i <= 7; i++) {
		console.log(`${Array(i).join('#')}\n`);
	}
	console.log(`${Array(8).join('#')}`);
}

triangle();

// Also this, but here can change num lines printed out:

function triangle(size) {
	for (let i = 1; i <= size; i++) {
		console.log(`${Array(i).join('#')}\n`);
	}
	console.log(`${Array(size + 1).join('#')}`);
}

triangle(7);

//Or this, much nicer solution:

function triangle(size) {
	for (let line = "#"; line.length <= size; line += "#") {
		console.log(line);
	}
}

triangle(7);
