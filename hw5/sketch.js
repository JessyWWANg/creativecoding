
// var i = 500;
// var j = 800;
// var k = 1000;

// function setup() {
// 	createCanvas(2000,1500);
//   	background(255);

//   	colorFlag = 0;
//   	colorFlag2 = 0;
//   	color = 0;

// 	a = 2;

// }

// function draw() {
// 	noStroke();
// 	// arc 1
// 	while(i >50){
// 		colorFlag += 1;
// 		if (colorFlag % 2 == 0){
// 			fill(0);
// 		}
// 		else{
// 			fill(255);
// 		}
//   		arc(i/a+200,500,i,i,0,PI,PIE);
//   		i -= 40;
//   	}


//   	//arc 3
//   	while(k> 400){
//   		color += 1;
//   		if (color % 2 == 0){
//   			fill(255);
//   		}
//   		else{
//   			fill(0);
//   		}
//   		arc(1320,500,k,k,0,PI,PIE); 
//   		k -= 80;
//   	}
  	
//   	//arc 2
//   	while(j> 100){
//   		colorFlag2 += 1;
//   		if (colorFlag2 % 2 == 0){
//   			fill(0);
//   		}
//   		else{
//   			fill(255);
//   		}
//   		arc(740,600,j,j,PI,2*PI,PIE);
//   		j -= 80;	
//   	}
  	
  	
// }


function setup() {
	createCanvas(2000,1500);
  	background(255);
}

colorFlag1 = 0;
colorFlag2 = 0;
colorFlag3 = 0;

function draw() {
 	noStroke();

 	// arc 1
 	for (var i = 500; i >= 40; i -= 40){
  		colorFlag1 += 1;
  		if (colorFlag1 % 2 == 0){
   			fill(0);
  		}
  		else{
   			fill(255);
  		}
   		arc(i/2+100,500,i,i,0,PI,PIE);
  	}
	//arc 2
  	for (var j = 800; j >= 80; j -= 80){
  		colorFlag2 += 1;
   		if (colorFlag2 % 2 == 0){
    		fill(0);
   		}
   		else{
    		fill(255);
   		}
    	arc(560,500,j,j,PI,2*PI,PIE);
	}
	//arc 3

  	for (var k = 500; k >= 40; k -=40){
  		colorFlag3 += 1;
   		if (colorFlag3 % 2 == 0){
    		fill(255);
   		}
   		else{
    		fill(0);
   		}
    	arc(1060-k/2,500,k,k,0,PI,PIE);

    }




}