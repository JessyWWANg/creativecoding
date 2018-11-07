var triggerArray = [];
//number of sparks
var n = 5;

function preload(){
	BGM = loadSound('assets/01 once we were.mp3');
	ring = loadSound('assets/telephone.wav');
	phone = loadSound('assets/homephone.wav');
}

function setup() {
	createCanvas(700,700);
	background(79,100,32);

	for(var i = 0; i < n; i++){
		triggerArray[i] = new trigger(random(width),random(height),random(0,2),random(0,2),random(20,50),(20,50));
	}
}

function draw() {
	background(70);
	for(var i = 0; i < n; i++){
		triggerArray[i].display();
		triggerArray[i].move();
		triggerArray[i].sizechange();
		triggerArray[i].judge();
	}
	
}



//def class
function trigger(xPos,yPos,xVar,yVar,size,sizeVar){
	//class var
	this.x = xPos;
	this.y = yPos;
	this.xVar = xVar;
	this.yVar = yVar;
	this.size = size;
	this.sizeVar = sizeVar;

	//class function
	this.move = function(){
		this.x += this.xVar;
		this.y += this.yVar;
		if(this.x <= 0 || this.x >= width){
			this.xVar *= -1;
			phone.play();
		}
		if(this.y <= 0 || this.y >= height){
			this.yVar *= -1;
			phone.play();
		}

	}

	this.sizechange = function(){
		this.size += sizeVar;
		if(this.size >= 60){
			this.size *= -1;
		}


	}

	this.judge = function(){
		if(mouseX>=(this.x-this.size)&&mouseX<=(this.x+this.size)&&mouseY>=(this.y-this.size)&&mouseY<=(this.y+this.size)){
			ring.play();
		}
	}


	this.display = function(){
		BGM.play();
		noStroke();
		fill(random(0,255));
		ellipse(this.x,this.y,this.size,this.size);
	}






};

