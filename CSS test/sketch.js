var button;
var canvas;
var input;
var TEXT;
var count = 0;


function setup(){
	canvas = createCanvas(500,500);
	canvas.position(100,100);
	input = createInput("What's your name?");


	button = createButton('Enter');
	button.mousePressed(update);
	TEXT = createP(name);

	TEXT.style('outline-style','solid');
	TEXT.style('outline-width','thick');
	TEXT.style('outline-color','#ffaba0');
	TEXT.style('text-decoration','underline');

}

function mouseClicked(){
	TEXT.style('font','font-size');
	count ++;
	if(count%2==0){TEXT.style('font-size','small')};
	if(count%2==1){TEXT.style('font-size','large')}


}

function draw(){
	background(40,77,150);
	textSize(60);
	text(name,100,100);

}

function update(){
	name = input.value();
	console.log(name);
	input.value("");
	TEXT.html(name);
}