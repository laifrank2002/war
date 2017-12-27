// V0.04 P-Alpha
/* TDL
 Rewrite HTML, the other one at the tippy top that's blue.

 FAQ
 Restart Button
 Introduction to Game
 Destroy Buildings 

 Diplomacy Actions, More Factions.
 Events
 War
 Trading
 Import/Export(Data)
 Spying?
 
 Entertainment
	
	Trade 
		Carts
	War
	Classes
		Serfs 1.0 (Default)
		Peasants 1.5 (Needs Territory, Produces Food Too)
		Working Class 2.5 (Needs City Territory, Produces Goods)
		Middle Class 5.0 (Needs City Territory and Goods, Produces Knowledge)
		Merchants 7.5 (Needs City Territory and Licenses and more Goods, provides Trading Services)
		Patricians 10.0 (Needs Goods, Exotic Goods, City Territory and Estates, Produces Knowledge)
		Aristocrat 50.0 (Needs Goods, Exotic Goods, City Territory, Territory, and Estates, and Produces Knowledge and Taxes) 
			(Creates a Manor with 1 Patrician, Serfs, and lots of Territory and Slaves)
		
		Slaves 0 (Needed for Aristocrats, is just cheap labour) (Can turn into Serfs)
		Nationals 0.5 (People not under direct jurisdiction, produces a little tax money) (Can turn into Peasants)
*/

//init
// Player Stats
var time = 0;
var money = 75;
var pop = 0;
var food = 0;

var territory = 15;
var usedTerritory = 0; 
// Economy
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


// Floating Point Error Resolver
function roundTwo (value){
	return +((value).toFixed(2));
}

function passTime () {
	time = time + 1;
	// Time, the healer, updates values!
	makeResources();
	// Updates Timestamp
	timeStamp = years.toString() + " y " + days.toString() + " d " + ":";
	
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
	
	// production
	addedfood += (1.5 * buildingArray[1].number);
	addedfood += (2 * workerArray[1].number);
	
	if (well) {
		addedfood *= 1.5;
	}
	
	// consumption
	addedfood -= (1 * pop);
	
	// max food
	
	
	maxfood = 100;
	
	maxfood += (500 * buildingArray[3].number);
	
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
	
	maxpop += (5 * buildingArray[2].number);
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
	
	var element = document.getElementById("messager")
	var child = document.getElementById("messageIntro")
	
	element.appendChild(messageNode);
	
	// Scrolls Down Automatically
	document.getElementById("Messages").scrollTop += 500;
	messages += 1
}
function clearMessages (){
	document.getElementById("messager").innerHTML = "";
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
	SaveLocalData();
	LoadLocalData();
}

function setAutoSave(delay){
	clearInterval(saveInterval) //Prevents duplicates
	setInterval(autoSave,delay)
}


