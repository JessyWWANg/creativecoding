var Xpos = 50;
var Ypos = 50;
PI = 3.14159265358979323846;//I'm confused here since I thought PI is a constant but the console tells me PI should be defined.
var rtt = PI/10;
function setup() {
	createCanvas(800,600);
	background(155);
}

function mouseClicked(){
	noStroke();
	Xpos +=50;
	Ypos +=50;
	rtt += PI/10;
	push();
		translate(Xpos,Ypos);
		rotate(rtt);
		scale(2,.75);
		fill(40);
		rect(0,0,40,40);

	pop();


}
