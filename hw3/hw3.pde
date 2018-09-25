import ddf.minim.*;

Minim minim;
AudioPlayer player;

void setup(){
  size(800,800);
  background(155);
  int positionX = 0;
  int positionY = 0;
  int um_side = 0;
  minim = new Minim(this);
  player = minim.loadFile("412424__dblover__rain-on-concrete-sound.mp3");

}

void draw(){
  int myTime = millis();
  //fading effect??
  //if (myTime % 3000 == 0){
  //  background(155);
  //  print(myTime);
  //}
  background(155);
  

  //raindrop
  int positionX = int(random(0,800));
  int positionY = int(random(0,800));
  noStroke();
  fill(192,208,218);
  triangle(positionX, positionY,(positionX-4),(positionY+4*sqrt(3)),(positionX+4),(positionY+4*sqrt(3)));

}

void mousePressed(){
  //umbrella
  int side = int(random(50,120));
  float um_hei = sqrt(3)*.5*side;
  int r = int(random(0,255));


  fill(255);
  triangle(mouseX, mouseY, (mouseX-.5*side),(mouseY-um_hei),(mouseX+.5*side),(mouseY-um_hei));
  triangle(mouseX, mouseY, (mouseX-.5*side),(mouseY+um_hei),(mouseX+.5*side),(mouseY+um_hei));
  triangle(mouseX, mouseY, (mouseX-.5*side),(mouseY-um_hei),(mouseX-side),mouseY);
  triangle(mouseX, mouseY,(mouseX+side),mouseY,(mouseX+.5*side),(mouseY-um_hei));
  triangle(mouseX, mouseY,(mouseX-side),mouseY,(mouseX-.5*side),(mouseY+um_hei));
  fill(r);
  triangle(mouseX, mouseY,(mouseX+side),mouseY,(mouseX+.5*side),(mouseY+um_hei));
}

void mouseMoved(){
  int r = int(random(0,255));
  float x = random(0,800);
  float y = random(0,800);
  //int b = dist(x1, x2, y1, y2); /*to get the distance between two coordinates
  noFill();
  stroke(r);
  line(mouseX, mouseY, x,y);
  player.play();

  
}
