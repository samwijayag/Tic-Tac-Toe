// --------------------------------------------------------
//  Declerations
//  =======================================================

let origBoard;

//Decleare players
const huPlayer= 'O';
const aiPlayer= 'X';
//Declare winning combinations
const winCombos = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[6,4,2]
]

// using the DOM select all the cells on the board
const cells= document.querySelectorAll('.cell');

// --------------------------------------------------------
//  Game Logic
//  =======================================================


//declaring a start game function
const startGame = () => {
	document.querySelector('.endgame').style.display = 'none';
	//declaring an array for the origBoard 
	origBoard = Array.from(Array(9).keys());
	
	//using iteration to remove all x and o from the board when restarting
	for(let i=0;i<cells.length;i++){
		cells[i].innerText = '',
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click',turnClick,false)
	}
}	

const turnClick =(square) =>{
	turn(square.target.id, huPlayer)
}

const turn = (squareId, player) => {
	origBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
	let gameWon = checkWin(origBoard, player);
	if(gameWon) gameOver(gameWon)
}

const checkWin = (board,player) => {
	let player = board.reduce((a, e, i)=> {
		(e === player)) 
	})
}

startGame();