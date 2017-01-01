//console.log fizzbuzz 1-100.

function fizzbuzz(num) {
	for(let i = 1; i <= num; i++) {
		if(i % 15 === 0) console.log('fizzbuzz');
		else if(i % 3 === 0) console.log('fizz');
		else if(i % 5 === 0) console.log('buzz');
		else console.log(i);
	}
}


function fizzBuzz (num) {
	for(let i = 1; i <=100; i++) {
		if(i % 15 === 0) {
			console.log('FizzBuzz');
		}
		else if (i % 5 === 0) {
			console.log('Buzz');
		}
		else if (i % 3 === 0) {
			console.log('Fizz');
		}
		else console.log(i);
	}
}

fizzBuzz(100);
