sceneIndex = 0;
var myString = "";
//Scenes
var tempString;
var picScene0;
var picScene1;
var picScene2;
var picScene3;
//GIF
var imageState = 0;
var img0;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;



emailFlag = false;
cactusFlag = false;
calendarFlag = false;
slimeFlag = false;
bookshelfFlag = false;
doorFlag = false;
poster1Flag = false;
poster2Flag = false;
closetFlag = false;
appleFlag = false;



function preload(){
	//font
	myFont = loadFont("asset/inverted.ttf");
	//scene
	picScene0 = loadImage("asset/1.png");
	picScene1 = loadImage("asset/2.png");
	picScene2 = loadImage("asset/3.png");
	picScene3 = loadImage("asset/4.png");
	//GIF
	img0 = loadImage("asset/Frame001.png");
	img1 = loadImage("asset/Frame002.png");	
	img2 = loadImage("asset/Frame003.png");	
	img3 = loadImage("asset/Frame004.png");	
	img4 = loadImage("asset/Frame005.png");
	img5 = loadImage("asset/Frame006.png");
	img6 = loadImage("asset/Frame007.png");
	img7 = loadImage("asset/Frame008.png");

}

function setup() {

}

function draw() {

	//state machine
	if(sceneIndex == 0){
		sceneZero();
	}
	else if(sceneIndex == 1){
		sceneOne();
	}
	else if(sceneIndex == 2){
		sceneTwo();
	}
	else if(sceneIndex == 3){
		sceneThree();
	}

	//ending trigger
	if(emailFlag&&cactusFlag&&calendarFlag&&slimeFlag&&bookshelfFlag&&doorFlag&&poster1Flag&&poster2Flag&&closetFlag&&appleFlag){
		//setTimeout(function(){endHappen()},3000);
		endHappen();
	}
}


//scene set up
function sceneZero(){
	createCanvas(picScene0.width,picScene0.height);
	image(picScene0,0,0);
	//direction
	noStroke();
	fill(246,106,93);
	triangle(1800,500,1800,600,1870,550);
	triangle(120,500,120,600,50,550);
	rect(400,800,1120,200);
	//text
	fill(150,90,100);
	textSize(40);
	textFont(myFont);
	text("send email",0.5*picScene0.width-50,300);
	text("cactus",0.5*picScene0.width+380,400);
	text("calendar",0.5*picScene0.width+600,400);
	// text("scene0",100,100);
	//interact
	if(tempString == "send email"){
		fill(255);
		textFont(myFont);
		text("I might have some superpower I guess. I just\nsent an email without touching anything...",420,850);
		emailFlag = true;
	}
	if(tempString == "cactus"){
		fill(255);
		textFont(myFont);
		text("Why would I touch this? Oh wait. Wait. Why\ndon't I feel hurt? Is this a toy?",420,850);
		cactusFlag = true;
	}
	if(tempString == "calendar"){
		fill(255);
		textFont(myFont);
		text("Today's date is 19th.",420,850);
		calendarFlag = true;
	}

}

function sceneOne(){
	createCanvas(picScene1.width,picScene1.height);
	image(picScene1,0,0);
	//direction
	noStroke();
	fill(246,106,93);
	triangle(1800,500,1800,600,1870,550);
	triangle(120,500,120,600,50,550);
	rect(400,800,1120,200);
	//text
	fill(150,90,100);
	textSize(40);
	textFont(myFont);
	text("slime doll",0.5*picScene0.width+100,600);
	text("bookshelf",690,90);
	text("door",140,700);
	// text("scene1",100,100);
	//interact
	if(tempString == "slime doll"){
		fill(255);
		textFont(myFont);
		text("Two dolls of slime figure from Dragon Quest.\nReally nice game.",420,850);
		slimeFlag = true;
	}
	if(tempString == "bookshelf"){
		fill(255);
		textFont(myFont);
		text("I've had this bookshelf since I was 6. It's\nbeen a long time.",420,850);
		bookshelfFlag = true;
	}
	if(tempString == "door"){
		fill(255);
		textFont(myFont);
		text("..Weird. The door isn't locked but I can't\nopen it.",420,850);
		doorFlag = true;
	}
}

function sceneTwo(){
	createCanvas(picScene2.width,picScene2.height);
	image(picScene2,0,0);
	//direction
	noStroke();
	fill(246,106,93);
	triangle(1800,500,1800,600,1870,550);
	triangle(120,500,120,600,50,550);
	rect(400,800,1120,200);
	//text
	fill(150,90,100);
	textSize(40);
	textFont(myFont);
	text("poster1",480,130);
	text("poster2",1400,130);
	// text("scene2",100,100);
	//interact
	if(tempString == "poster1"){
		fill(255);
		textFont(myFont);
		text("It's a steamer poster.",420,850);
		poster1Flag = true;
	}
	if(tempString == "poster2"){
		fill(255);
		textFont(myFont);
		text("It's a poster of my favorite character from\nJOJO.\nORAORAORAORA!!",420,850);
		poster2Flag = true;
	}
}

function sceneThree(){
	createCanvas(picScene3.width,picScene3.height);
	image(picScene3,0,0);
	//direction
	noStroke();
	fill(246,106,93);
	triangle(1800,500,1800,600,1870,550);
	triangle(120,500,120,600,50,550);
	rect(400,800,1120,200);
	//text
	fill(150,90,100);
	textSize(40);
	textFont(myFont);
	// text("scene3",100,100);
	text("closet",300,130);
	text("apple",1570,650);
	//interact
	if(tempString == "closet"){
		fill(255);
		textFont(myFont);
		text("I'm not going out now. No need to put on more\nclothes.",420,850);
		closetFlag = true;
	}
	if(tempString == "apple"){
		fill(255);
		textFont(myFont);
		text("Nice apple. I'm gonna eat it later.",420,850);
		appleFlag = true;
	}
}

//interact
function keyPressed(){
	console.log(sceneIndex);
	if(keyCode != LEFT_ARROW && keyCode != RIGHT_ARROW){
		myString += key;
	}

	if(keyCode == RIGHT_ARROW){
		if(sceneIndex == 0){
			sceneIndex = 1
		}
		else if(sceneIndex == 1){
			sceneIndex = 2
		}
		else if(sceneIndex == 2){
			sceneIndex = 3
		}
		else if(sceneIndex == 3){
			sceneIndex = 0
		}
	}

	if(keyCode == LEFT_ARROW){
		if(sceneIndex == 0){
			sceneIndex = 3
		}
		else if(sceneIndex == 1){
			sceneIndex = 0
		}
		else if(sceneIndex == 2){
			sceneIndex = 1
		}
		else if(sceneIndex == 3){
			sceneIndex = 2
		}
	}
	
	//if KeyCode == return: tempString = myString, 
	//string concatenation

}

function mousePressed(){
	//string comparison 
	tempString = myString;
	myString = "";

}

//import GIF



function endHappen() {

	//image(variable name, x, y)

	var count = frameCount % 10;
	if(count == 0){
		imageState ++;
		if (imageState > 7){
			imageState = 0;
		}
	}

	drawSprite();
	textSize(100);
	textFont(myFont);
	text("W H O   A M   I?",.3*picScene3.width-400,.3*picScene3.height);
	text("->A   G H O S T",.3*picScene3.width-400,.5*picScene3.height);
	text("->A   L I V I N G   P E R S O N",.3*picScene3.width-400,.7*picScene3.height);
	//chose your ending
	if((keyIsPressed == true) && (keyCode == UP_ARROW)){
		rect(0,600,2000,500);
		fill(0);
		textFont(myFont);
		text("Bingo! Welcome to the\nafterlife.",.1*picScene3.width-100,.7*picScene3.height);
	}
	if((keyIsPressed == true) && (keyCode == DOWN_ARROW)){
		rect(0,0,2000,600);
		fill(0);
		textFont(myFont);
		text("Sure. We respect your choice.",.1*picScene3.width-100,.3*picScene3.height);
	}

}


function drawSprite(){

	switch(imageState){
		case 0:
			image(img0,0,-200);
			break;
		case 1:
			image(img1,0,-200);
			break;
		case 2:
			image(img2,0,-200);
			break;
		case 3:
			image(img3,0,-200);
			break;
		case 4:
			image(img4,0,-200);
			break;
		case 5:
			image(img5,0,-200);
			break;
		case 6:
			image(img6,0,-200);
			break;
		case 7:
			image(img7,0,-200);
			break;

	}

}


