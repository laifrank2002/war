setInterval(passTime,200);
// graphics
setInterval(update,20);

//init

// Player Stats
var GDP = 0;
// Economy
var time = 0;
var days = 0;
var years = 0;

var money = 75;
var addedmoney = 0.01;

var pop = 0;
var maxpop = 10;
var addedpop = 0.1;

var food = 0;
var maxfood = 100;
var addedfood = 1;

// Misc Stats


// Military 
var militiamen = 0;
var swordmen = 0;
var archers = 0;


// Buildings

// One timers
var barrack = false;
var well = false;
// Unlimited
var farms = 0;
var house = 0;
var barn = 0;

// Messages module declarations
var messages = 0;
var timeStamp = "";

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

function calculateDate (time) {
	years = Math.floor(time/365);
	days = time % 365;
}

function makeResources (){
	money = money + addedmoney;
	money = +((money).toFixed(2));
	
	calculateMoney();
	calculateFood();
	calculatePop();
	
	// Don't hit the ceiling!
	if (food < maxfood){
		food = food + addedfood;
		food = +((food).toFixed(2));
	}
	// Ooops, you can't go under the floor!
	if (food < 0) {
		food = 0;
	}
	else if (food > maxfood){
		food = maxfood; // Nor Over
	}
	// Don't hit the ceiling!
	if (pop < maxpop){
		pop = pop + addedpop;
		pop = +((pop).toFixed(2));
	}
	// Ooops, you can't go under the floor!
	if(pop < 0) {
		pop = 0;
	}
	else if (pop > maxpop){
		pop = maxpop; // Nor Over
	}
}

// Calculates Adding Values
function calculateMoney () {
	addedmoney = 0;
	addedmoney += pop * 0.1;
	
	addedmoney = roundTwo(addedmoney);
	// boosts
}

function calculateFood () {
	addedfood = 0;
	addedfood -= (1 * pop);
	
	addedfood += (1.5 * farms);
	
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


function calculateStatistics() {
	GDP = addedmoney * 365;
	GDP = roundTwo(GDP);
}

// Purchasing Functions
// This is so the buttons would work
function buyMilitiamen() {
	if (pop >= 1){
		pop -= 1;
		militiamen += 1;
		
		pop=roundTwo(pop);
	}
}

function buySwordmen() {
	// Make Sure they have a place to live!
	if (barrack) {
		if (money >= 10 && pop >= 1){
			money -= 10;
			pop -= 1;
			swordmen += 1;
			
			pop=roundTwo(pop);;
			money=roundTwo(money);
			swordmen=roundTwo(swordmen);
		}
	}
}
function buyArchers() {
	if (barrack) {
		if (money >= 10 && pop >= 1){
			money -= 10;
			pop -= 1;
			archers += 1;
			
			pop=roundTwo(pop);
			money=roundTwo(money);
			archers=roundTwo(archers);
		}
	}
}

// Buildings
function buyBarrack () {
	if (money >= 100 && !(barrack)){
		barrack = true;
		money -= 100;
		money=roundTwo(money);
		
		//Alert Messages
		pushMessage ("Built the barracks.");
	}
}
function buyFarms () {
	if (money >= 10) {
		money -= 10;
		farms += 1;
		
		money=roundTwo(money);
		
		//Alert Messages
		pushMessage ("Bought a farm.");
	}
}

function buyWell () {
	if (money >= 50 && !(well)) {
		money -= 50;
		well = true;
		
		money=roundTwo(money);
		
		//Alert Messages
		pushMessage ("Built a well.");
	}
}

function buyHouse() {
	if (money >= 75) {
		money -= 75;
		house += 1;
		
		money=roundTwo(money);
		//Alert Messages
		pushMessage ("Bought a house.");
	}
}

function buyBarn() {
	if (money >= 100) {
		money -= 75;
		barn += 1;
		
		//Alert Messages
		pushMessage ("Raised a barn.");
	}
}
// This is so there is data on the screen.
function update () {
	// calculations
	calculateDate(time);
	calculateStatistics();
	// Economy
	document.getElementById("timeDisplay").innerHTML = years + "y " + days + "d";
	document.getElementById("moneyDisplay").innerHTML = "$" + money.toFixed(2) + " + $" + addedmoney.toFixed(2) + "/d";
	document.getElementById("foodDisplay").innerHTML = food.toFixed(2) + "/" + maxfood.toFixed(2) + " food" + " + " + addedfood.toFixed(2) + "/d";
	document.getElementById("popDisplay").innerHTML = pop.toFixed(2) + "/" + maxpop.toFixed(2) + " pop" + " + " + addedpop.toFixed(2) + "/d";
	// Fun Stats
	document.getElementById("GDPDisplay").innerHTML = "$" + GDP.toFixed(2) + " is the current GDP of your nation!";
	// Military
	
	document.getElementById("militiamenDisplay").innerHTML = "You have " + militiamen + " militiamen";
	
	// Reduces Cluttering and Increases Excitement, Tier 1
	document.getElementById("swordmenDisplay").innerHTML = "You have " + swordmen + " swordsmen";
	document.getElementById("archersDisplay").innerHTML = "You have " + archers + " archers ";
	if (barrack || (swordmen > 0 || archers > 0)) {
		document.getElementById("swordmenDisplay").style.display = "inline-block";
		document.getElementById("swordmenDisplayButton").style.display = "inline-block";
		document.getElementById("archersDisplay").style.display = "inline-block";
		document.getElementById("archersDisplayButton").style.display = "inline-block";
	}
	else {
		document.getElementById("swordmenDisplay").style.display = "none";
		document.getElementById("swordmenDisplayButton").style.display = "none";
		document.getElementById("archersDisplay").style.display = "none";
		document.getElementById("archersDisplayButton").style.display = "none";
	}
	
	// Buildings
	// One Timer Block Display
	if (barrack) {
		document.getElementById("barrackDisplay").innerHTML = "The Barracks have been built";
		document.getElementById("barrackDisplayButton").style.display = "none";
	}
	else {
		document.getElementById("barrackDisplay").innerHTML = "The Barracks have not been built yet.";
		document.getElementById("barrackDisplayButton").style.display = "inline";
	}
	
	// Unlock for irrigation
	if (farms > 0){
		if (!(well)) {
			document.getElementById("wellDisplay").innerHTML = "The well has not been built yet.";
			document.getElementById("wellDisplayButton").style.display = "inline-block";
		}
		else {
			document.getElementById("wellDisplay").innerHTML = "The well has been built.";
			document.getElementById("wellDisplayButton").style.display = "none";
		}
	}
	else {
		document.getElementById("wellDisplayButton").style.display = "none";
	}
	// No Limiters
	document.getElementById("farmsDisplay").innerHTML = "There are " + farms + " farms in the kingdom.";
	document.getElementById("houseDisplay").innerHTML = "There are " + house + " houses in the kingdom.";
	document.getElementById("barnDisplay").innerHTML = "There are " + barn + " barns in the kingdom.";
	// Test
	// document.getElementById("test").innerHTML = "test";
}
// Create Messages
function pushMessage (messageText) {
	var messageNode = document.createElement("p");
	var messageContents = document.createTextNode(timeStamp + messageText);
	messageNode.appendChild(messageContents)
	
	var element = document.getElementById("Messages")
	var child = document.getElementById("intro")
	
	element.insertBefore(messageNode,child);
	
	messages += 1
}