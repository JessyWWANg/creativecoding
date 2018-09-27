function setup() {

	createCanvas(600,500);
	background(155);

}

function draw() {

	if (mouseX <= .5*width && mouseY < 1/3*height){
		background(155);
		noStroke();
		fill(179,61,42);
		rect(0,0,.5*width,1/3*height);
	}
	else if (mouseX <= .5*width && mouseY >= 1/3*height){
		background(155);
		fill(214,184,165);
		rect(0,1/3*height,.5*width,2/3*height);
	}
	else if (mouseX > .5*width){
		background(155);
		fill(79,72,82);
		rect(.5*width,0,.5*width,height);
		if (mouseX == 500){
			stroke(50);
			strokeWeight(10);
			line(500,0,500,height);
		}
	}

}