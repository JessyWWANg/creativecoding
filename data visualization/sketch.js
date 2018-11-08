var monsterData;
var lst = [];
var num = 1;

function preload(){
	monsterData = loadJSON("assets/monsters.json");
}

function setup(){
	createCanvas(700,700);
	background(54,90,78);
	console.log(monsterData.names.length);
	for (var i = 0; i < monsterData.names.length; i++){
		console.log(monsterData.names[i][0]);
	}
	//counting # of first letter
	for (var i = 1; i < monsterData.names.length; i++){ 
		if(monsterData.names[i][0]!=monsterData.names[i-1][0]){
			lst.push((monsterData.names[i-1][0]),num);
			num = 1;
		}
		else if(monsterData.names[i][0]==monsterData.names[i-1][0]){
			num++;
		}
	}
	console.log(lst);
	//Question: there's suppose to be counting for z but i dont know how to add item to JSON file outside the file, could you talk about that in tomorrow's class if have time?
}

function draw(){
	fill(120);
	textSize(40);
	text("# of 1st letter",width/2,height/2.5);


	for(var i = 1;i <lst.length;i+=2){
		noFill();
		arc(width/2,height/2,i*15,i*15,0,2*PI/monsterData.names.length*lst[i]*4.5);
		fill(0);
		textSize(15);
		text(lst[i-1],width/2+7.5*i,height/2);
	}
	


}