//board

let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//pokemon
let pokemonWidth = 98;
let pokemonHeight = 98;
let pokemonX = boardWidth/8;
let pokemonY = boardHeight/2;

let pokemon = {
	x: pokemonX,
	y: pokemonY,
	width: pokemonWidth,
	height: pokemonHeight

}

window.onload = function() {
	board = document.getElementById("board");
	board.height = boardHeight;
	board.width = boardWidth;
	context = board.getContext("2d");


context.fillstyle = "green";
context.fillRect(pokemon.x, pokemon.y, pokemon.width, pokemon.height);

pokemonImg = new Image();
pokemonImg.src = "./Pikachu.jpg";
pokemonImg.onload = function() {
context.drawImage(pokemonImg, pokemon.x, pokemon.y, pokemon.width, pokemon.height);
   }


   requestAnimationFrame(update);

}

function update() {
	requestAnimationFrame(update);
	
	

}