function setup() {
	createCanvas(500,500);
  	background(70,80,9);
}

function draw() {
  	push();
  		rotate(PI/7);
  		rect(60,60,50,50);
  	pop();

  	push();
  		translate(100,100);
  		rotate(PI/7*2);
  		rect(0,0,50,50);
  	pop();

  	push();
  		translate(200,200);
  		rotate(PI/7*3);
  		rect(0,0,50,50);
  	pop();

  	push();
  		translate(300,300);
  		rotate(PI/7*4);
  		rect(0,0,50,50);
  	pop();

}