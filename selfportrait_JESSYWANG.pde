void setup(){
  size(1000,1000);
  background(205,112,109);
}
void draw(){
//hair_left
  //noStroke();
  stroke(171,40,31);
  fill(213,123,121);
  triangle(0,0,400,0,0,1000);
//hair_right
  fill(219,136,129);
  beginShape();
  vertex(398,0);
  vertex(755,0);
  vertex(840,134);
  vertex(611,471);
  vertex(558,346);
  vertex(531,307);
  vertex(364,288);
  vertex(373,536);
  vertex(489,612);
  vertex(399,1000);
  vertex(0,1000);
  vertex(398,0);
  endShape();
//face
  fill(226,147,144);
  beginShape();
  vertex(840,134);
  vertex(872,234);
  vertex(871,297);
  vertex(918,427);
  vertex(882,439);
  vertex(909,450);
  vertex(896,485);
  vertex(911,505);
  vertex(895,534);
  vertex(868,689);
  vertex(831,715);
  vertex(621,702);
  vertex(443,1000);
  vertex(399,1000);
  vertex(489,612);
  vertex(373,536);
  vertex(364,288);
  vertex(531,307);
  vertex(558,346);
  vertex(611,471);
  vertex(840,134);
  endShape();
  
  noFill();
  arc(479, 295, 50, 50, .4*PI, 2.1*PI);
  arc(422, 289, 50, 50, .4*PI, 2.1*PI);
  arc(370, 438, 50, 50, .5*PI, 2.1*PI);
  arc(372, 510, 50, 50, .5*PI, 2.1*PI);
  arc(416, 565, 50, 50, .2*PI, 1.9*PI);
//eye
  strokeWeight(2);
  fill(211,104,100);
  triangle(812,336,822,378,764,362);
//extra lines
  line(831,326,764,362);
  line(764,362,831,380);
  stroke(211,104,100);
  line(831,380,831,715);
}
