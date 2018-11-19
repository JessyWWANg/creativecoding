//user input API, data visualization
var url;
var baseUrl;
var query;
var myAPI;
var myPara;
var city;
var myData;

function setup(){
	canvas = createCanvas(500,500);
	canvas.position = (300,300);

	myPara = createP("This is the weather now:");
	myPara.position(200,200);

	// input = createInput("Enter search term");
	// input.position = (300,300);
	// inputButton = createButton("Search");
 //    inputButton.mousePressed(search());
 	input = createInput("Enter city name");
 	inputButton = createButton("Click to Search");
 	inputButton.mousePressed(getUrl);

 	// var city = input.value();
    baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
	// query = "q=" + city;
	myAPI = "&appid=0a376136c8463e25be25454a413a289e";
	// url = baseUrl + query + myAPI;


}

function getUrl(){

	var city = input.value();
	query = "q=" + city;

	console.log(query);
	input.value("");
	url = baseUrl + query + myAPI;
	console.log(url);
	// console.log(myData);
	myData = loadJSON(url, gotData);
	// text(myData.main.name);
}


function gotData(myData){
	canvas = createCanvas(500,500);
	console.log(myData);
	text("city: "+myData.name,100,100);
	text("humidity: "+myData.main.humidity,100,120);
	text("temperature: "+myData.main.temp,100,130);
}





