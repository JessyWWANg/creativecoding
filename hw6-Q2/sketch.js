i = 0;
Xpos = 30;
Ypos = 30;
rtt = 0;
r = 50;
function setup() {
	createCanvas(700,700);
	background(30,230,15);
}

function draw() {
	noStroke();
	for(i = 500; i > 200; i -= 25){
		Xpos += 30;
		Ypos += 30;
		rtt += PI/9;
		r += 30;
		push();
			translate(Xpos,Ypos);
			rotate(rtt);
			fill(r);
			rect(0,0,50,50);
		pop();
	}
}