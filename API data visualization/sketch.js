var locations = [];
var FR_holi = [];
var DE_holi = [];
var IN_holi = [];
var CN_holi = [];
var lst = [];


var query1 = "&country=";
var query2 = "&year=2015"


function setup() {

	locations[0] = "FR";
	locations[1] = "DE";
	locations[2] = "IN";
	locations[3] = "CN";
	console.log(locations);


	//for loop ;index++
	//RE_holidays=[2,5,6,]

	baseUrl = "https://holidayapi.com/v1/holidays?";
	apiKey = "67d19bb6-ce80-40c4-a4d9-3063597792ce";

	for(var i=0;i <4;i++){
		url = baseUrl + "key=" + apiKey + query1 + locations[i] + query2;
		var myData = loadJSON(url, callBack);




	}

}

function callBack(myData){
	// console.log(myData.holidays);
	for (key in myData.holidays){
		// console.log(int(key[5]*10)+int(key[6]));
		lst.push(int(key[5]*10)+int(key[6]));
	}
	// console.log(lst);

}

function mouseClicked(){
	console.log(lst);
	console.log(lst.length);
	// console.log(lst.toString().count(1));

}

function draw(){

}





