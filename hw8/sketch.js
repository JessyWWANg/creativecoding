var myShape1;
var myShape2;
var myShape3;

function setup(){

	createCanvas(500,500);
	background(70,80,155);

	myShape1 = new Shape(50,90,1,2,0);
	myShape2 = new Shape(300,20,3,1,0);
	myShape3 = new Shape(0,77,2,3,0);

}

function draw(){

	myShape1.rotate();
	myShape1.move();
	myShape1.display();

	myShape2.rotate();
	myShape2.move();
	myShape2.display();

	myShape3.rotate();
	myShape3.move();
	myShape3.display();
}

function Shape(myX,myY,myVarX,myVarY,myAngle){

	this.x = myX;
	this.y = myY;
	this.varX = myVarX;
	this.varY = myVarY;
	this.angle = myAngle;

	this.rand = random(0,255);

	//functions
	this.move = function(){
		this.x += this.varX;
		this.y += this.varY;

		if(this.x <= 0 || this.x >= width){
			this.varX *= -1;
		}
		if(this.y <=0 || this.y >= height){
			this.varY *= -1;
		}
	}
	this.rotate = function(){
		this.angle += this.var/20;

		rotate(this.angle);
	}

	this.color = color(this.rand);

	this.display = function(){
		fill(this.color);
		rect(this.x,this.y,20,20);
	}



};