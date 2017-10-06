// V0.04 P-Alpha
/* TDL
 Rewrite HTML, the other one at the tippy top that's blue.
 If you have no idea who I mean, that means you should remove this message. Or you're colourblind. 
 
 // function from another person
 https://rawgit.com/IvarK/BuildASpaceShip/master/index.html

 FAQ
 Restart Button
 Introduction to Game
 Destroy Buildings 
 Longbow men
 Pikemen
 Diplomacy Actions, More Factions.
 Events
 War
 Trading
 Import/Export(Data)
 Spying?
 
 Resources:
	Ores
		Gold Ore
		Iron Ore 
		Bronze Ore
		Silver Ore
		Coal
		Charcoal
		Sand
	Bars
		Iron
		Bronze
		Gold
		Silver
		Steel
		Glass
	Construction
		
		Wood
		Plank
		Nails
		Gold Foil
		Plaster of Paris 
	Food Seperation + Set as Food Checkbox
		Meat
		Vegetables
		Dairy
		Bread
	Entertainment
	
	Trade 
		Carts
	War
		Pikeman
		Longbowman
		Light Calvary
		Man at Arms
		Knight
		Crossbowman
		Halbardier
		Musketeer
		Field Canon
		Reiter
		Hussar
*/
var timeInterval = setInterval(passTime,1000);
var fpsInterval = setInterval(update,20);
var saveInterval = setInterval(autoSave,30000);
//init
// Player Stats
var time = 0;
var money = 75;
var pop = 0;
var food = 0;

var territory = 15;
var usedTerritory = 0; 
// Economy
var days = 0;
var years = 0;

var addedmoney = 0.01;

var maxpop = 10;
var addedpop = 0.1;

var maxfood = 100;
var addedfood = 1;

// Misc Stats

// Settings (Cookies)
var speed = 1;


// One timers
var barrack = false;
var well = false;
var outpost = false;
// Unlimited
var farms = 0;
var house = 0;
var barn = 0;

// Messages module declarations
var messages = 0;
var timeStamp = "";

// Initial
LoadData();
alert("This game requires cookies to run. The manual saving system isn't implemented yet, so wait a while")

// Floating Point Error Resolver
function roundTwo (value){
	return +((value).toFixed(2));
}

function passTime () {
	time = time + 1;	
	// Time, the healer, updates values!
	makeResources();
	// Updates Timestamp
	timeStamp = years.toString() + " y " + days.toString() + " d: ";
	
}


function makeResources (){
	money = money + addedmoney;
	money = +((money).toFixed(2));
	
	calculateMoney();
	calculateFood();
	calculatePop();
	
	// Don't hit the ceiling!
	if (food <= maxfood){ // <= instead of < so that it can decrease too!
		food = food + addedfood;
		food = +((food).toFixed(2));
	}
	// Ooops, you can't go under the floor!
	if (food < 0) {
		food = 0;
	}
	else if (food > maxfood && addedfood > 0){ // Unless It's Under
		food = maxfood; // Nor Over
	}
	// Don't hit the ceiling!
	if (pop <= maxpop){
		pop = pop + addedpop;
		pop = +((pop).toFixed(2));
	}
	// Ooops, you can't go under the floor!
	if(pop < 0) { // <= instead of < so that it can decrease too!
		pop = 0;
	}
	else if (pop > maxpop && addedpop > 0){
		pop = maxpop; // Nor Over
	}
	
}

// Calculates Adding Values
function calculateMoney () {
	
	addedmoney = 0;
	addedmoney += pop * 0.01 * (workerArray[3].number + 1);
	
	addedmoney = roundTwo(addedmoney);
	// boosts

	
}

function calculateFood () {
	addedfood = 0;
	// consumption
	addedfood -= (1 * pop);
	// production
	addedfood += (1.5 * farms);
	addedfood += (2 * workerArray[1].number);
	
	if (well) {
		addedfood *= 1.5;
	}
	// max food
	
	
	maxfood = 100;
	
	maxfood += (500 * barn);
	
}

function calculatePop () {
	// Initial Growth Rate
	addedpop = 0.1;
	// If there's a famine
	if (food <= 0) {
		addedpop = -0.2;
	}
	
	// max pop
	
	maxpop = 10;
	
	maxpop += (5 * house);
}

// Button Functions

// Settings
function speedUp() {
	if (speed < 10){ //They can't go *too* fast.
		speed += 1;
		clearInterval(timeInterval) // So not to produce multiple
		timeInterval = setInterval(passTime,1000/speed);
	}
}
function slowDown() {
	if (speed > 1){
		speed -= 1;
		clearInterval(timeInterval) // So that it wouldn't just keep increasing
		timeInterval = setInterval(passTime,1000/speed);
	}
	else if (speed = 1){
		speed -= 1;
		clearInterval(timeInterval) //Pauses
	}
}

// Create Messages
function pushMessage (messageText) {
	var messageNode = document.createElement("p");
	var messageContents = document.createTextNode(timeStamp + messageText);
	messageNode.appendChild(messageContents)
	
	var element = document.getElementById("Messages")
	var child = document.getElementById("intro")
	
	element.appendChild(messageNode);
	
	// Scrolls Down Automatically
	document.getElementById("Messages").scrollTop += 500;
	messages += 1
}

// Loads Other Messages
function loadStoryMessage(messageName){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			pushMessage(this.responseText);
			console.log("Sucess!")
		}
	};
	xhttp.open("GET", messageName, true);
	xhttp.send();
}


function autoSave(){
	SaveData();
	LoadData();
}

function setAutoSave(delay){
	clearInterval(saveInterval) //Prevents duplicates
	setInterval(autoSave,delay)
}


