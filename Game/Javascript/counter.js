var timeInterval = setInterval(passTime,1000);
// graphics
var fpsInterval = setInterval(update,20);

//init

// Player Stats

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

// Workers
var farmer = 0;
// Misc Stats

// Settings (Cookies)
var speed = 1;


// Calculated Stats
var GDP = 0;
var unemployment = 0;
var safety = 0;
var health = 0;
var happiness = 0;
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
	
	// Story Books marked on time
	//switch (time) {
	//	case 1:
			//loadStoryMessage("../Messages/msg1.txt");
			//break;
	//}
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
	addedmoney += pop * 0.1;
	
	addedmoney = roundTwo(addedmoney);
	// boosts
}

function calculateFood () {
	addedfood = 0;
	addedfood -= (1 * pop);
	
	addedfood += (1.5 * farms);
	
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


function calculateStatistics() {
	GDP = addedmoney * 365;
	GDP = roundTwo(GDP);
	
	// Statistics
	unemployment = 100;
	if (militiamen == 0){
		safety = 0;
	}
	else{
		safety = roundTwo((militiamen) / (pop)*100);
		if (safety > 100){
			safety = 100;
		}
	}
	health = 0;
	happiness = 100;
}

// Button Functions

// Settings
function speedUp() {
	speed += 1;
		clearInterval(timeInterval) // So not to produce multiple
		timeInterval = setInterval(passTime,1000/speed);
}
function slowDown() {
	if (speed > 1){
		speed -= 1;
		clearInterval(timeInterval) // So that it wouldn't just keep increasing
		timeInterval = setInterval(passTime,1000/speed);
	}
	
	
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
	document.getElementById("speedDisplay").innerHTML = speed + " is the current speed";
	document.getElementById("moneyDisplay").innerHTML = "$" + money.toFixed(2) + " + $" + addedmoney.toFixed(2) + "/d";
	document.getElementById("foodDisplay").innerHTML = food.toFixed(2) + "/" + maxfood.toFixed(2) + " food" + " + " + addedfood.toFixed(2) + "/d";
	document.getElementById("popDisplay").innerHTML = pop.toFixed(2) + "/" + maxpop.toFixed(2) + " pop" + " + " + addedpop.toFixed(2) + "/d";
	// Fun Stats
	document.getElementById("GDPDisplay").innerHTML = "$" + GDP.toFixed(2) + " is the GDP of your nation!";
	document.getElementById("unemploymentDisplay").innerHTML = unemployment.toFixed(2) + "% is the unemployment rate of your nation!";
	document.getElementById("safetyDisplay").innerHTML = safety.toFixed(2) + "% is how safe citizens think of your nation!";
	document.getElementById("healthDisplay").innerHTML = health.toFixed(2) + "% is how much healthcare citizens get in your nation!";
	document.getElementById("happinessDisplay").innerHTML = happiness.toFixed(2) + "% is how happy people are with your regime!";
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
	
	// Unlock for wells
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
	
	element.appendChild(messageNode);
	
	messages += 1
}

// Loads Other Messages
function loadStoryMessage(messageName){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("intro").innerHTML = this.responseText;
			pushMessage(this.responseText);
			console.log("Sucess!")
		}
	};
	xhttp.open("GET", messageName, true);
	xhttp.send();
}

// Saves -IMPORTANT- NOT SECURE!
function SaveData () {
	var saveFile = "";
	// vars
	saveFile += time + " ";
	saveFile += money + " ";
	saveFile += food + " ";
	saveFile += pop + " ";
	saveFile += militiamen + " ";
	saveFile += swordmen + " ";
	saveFile += archers + " ";
	saveFile += barrack + " ";
	saveFile += farms + " ";
	saveFile += well + " ";
	saveFile += house + " ";
	saveFile += barn + " ";
	
	document.getElementById("ftpTextbox").value = saveFile;
}
// Loads -IMPORTANT- NOT SECURE!
function LoadData () {
	var loadFile = document.getElementById("ftpTextbox").value;
	var data = "";
	// 1 - int, 2 - float, 3 - boolean
	var method = [1,2,2,2,1,1,1,3,1,3,1,1];
	var result = [];
	// Interpretter! 
	var stage = 0;
	for (i = 0; i < loadFile.length; i++) {
		switch(method[stage]){
			case 1 : //ints
				switch(loadFile.substring(i, i+1)){
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
					case "0":
						data += loadFile.substring(i, i+1);
						
					case " ": // breakup happens now
						result.push(parseInt(data));
						data = "";
						stage ++;
						break;
				}
			case 2 : //floats
				switch(loadFile.substring(i, i+1)){
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
					case "0":
					case ".":
						data += loadFile.substring(i, i+1);
					case " ": // breakup happens now
						result.push(parseFloat(data));
						data = "";
						stage ++;
						break;
				}
			
			
			case 3 : //booleans! 
				switch(loadFile.substring(i, i+1)){
					case "t":
					case "r":
					case "u":
					case "e":
					case "f":
					case "a":
					case "l":
					case "s":
						data += loadFile.substring(i, i+1);
					case " ": //breakup!
						if (data == "true") {
							result.push(true)
						}
						else{
							result.push(false)
						}
						data = "";
						stage ++;
						break;
				}
				
		}
		
	}
	console.log(result);

}
