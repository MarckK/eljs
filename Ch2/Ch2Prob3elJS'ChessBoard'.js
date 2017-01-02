//console.log a chessBoard with hashes and spaces.  Note, doesn't work is return the board, but console.log DOES work! :)


function chessBoard(num) {
	let board = '';
	for(let i = 1; i < num; i++) {  //printing num of lines
		for(let k = 1; k < num; k++) {  //pinting num of characters on the lines
			if((i + k) % 2 === 0) board += '#';
			else board += ' ';
		}
		board += '\n';
	}
	console.log(board);
}



function chessBoard(size) {
	let board = '';
	for (let i = 0; i < size; i++) {
		for (let k = 0; k < size; k++) {
			if ((i + k) % 2 === 0) {
				board += "#"
			} else  board += " ";
		}
		board += "\n";
	}
	console.log(board);
}

 chessBoard(8);
