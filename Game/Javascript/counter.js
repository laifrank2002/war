// V0.04 P-Alpha
/* TDL
 Rewrite HTML, remove annoying navBar, no, the other one at the tippy top that's blue.
 If you have no idea who I mean, that means you should remove this message. Or you're colourblind. 
 
 // function from another person
 https://rawgit.com/IvarK/BuildASpaceShip/master/index.html

 Destroy Buildings 
 Longbow men
 Pikemen
 Diplomacy Actions, More Factions.
 Events
 War
 Import/Export
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
		
	Replace $$$ with Gold, Silver, Bronze coins
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
	
	// Story Books marked on time
	switch (time) {
		case 1:
			loadStoryMessage("../Messages/msg1.txt");
			break;
	}
	
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

// Buildings, Territory Costs
function buyBarrack () {
	if (money >= 100 && !(barrack) && (usedTerritory + 2 <= territory)){
		barrack = true;
		money -= 100;
		usedTerritory += 2;

		money=roundTwo(money);
		usedTerritory=roundTwo(usedTerritory)
		
		//Alert Messages
		pushMessage ("Built the barracks.");
	}
}
function buyFarms () {
	if (money >= 10 && usedTerritory + 1 <= territory) {
		money -= 10;
		farms += 1;
		usedTerritory += 1;

		money=roundTwo(money);
		usedTerritory=roundTwo(usedTerritory)

		//Alert Messages
		pushMessage ("Bought a farm.");
	}
}

function buyWell () {
	if (money >= 50 && !(well) && usedTerritory + 1 <= territory) {
		money -= 50;
		well = true;
		usedTerritory += 1;

		money=roundTwo(money);
		usedTerritory=roundTwo(usedTerritory)

		//Alert Messages
		pushMessage ("Built a well.");
	}
}

function buyHouse() {
	if (money >= 75 && usedTerritory + 1 <= territory) {
		money -= 75;
		house += 1;
		usedTerritory += 1;

		money=roundTwo(money);
		usedTerritory=roundTwo(usedTerritory)
		//Alert Messages
		pushMessage ("Bought a house.");
	}
}

function buyBarn() {
	if (money >= 100 && usedTerritory + 1 <= territory) {
		money -= 100;
		barn += 1;
		usedTerritory += 1;
		
		money=roundTwo(money);
		usedTerritory=roundTwo(usedTerritory)
		//Alert Messages
		pushMessage ("Raised a barn.");
	}
}

function buyOutpost() {
	if (money >= 250 && usedTerritory + 3 <= territory) {
		money -= 250;
		outpost = true;
		usedTerritory += 3;
		
		money=roundTwo(money);
		usedTerritory=roundTwo(usedTerritory)
		//Alert Messages
		pushMessage ("Built the outpost, doesn't look sturdy.");
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
	document.getElementById("territoryDisplay").innerHTML = usedTerritory.toFixed(2) + "/" + territory.toFixed(2) + " territory";
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
	// Unlock for outpost
	if (barrack){
		if(!(outpost)){
			document.getElementById("outpostDisplay").innerHTML = "The outpost has not been built yet.";
			document.getElementById("outpostDisplayButton").style.display = "inline-block";
		}
		else {
			document.getElementById("outpostDisplay").innerHTML = "The outpost has been built.";
			document.getElementById("outpostDisplayButton").style.display = "none";
		}
	}
	else {
		document.getElementById("outpostDisplayButton").style.display = "none";
	}
	// Unlock for 
	/*
	if (){
		if(!()){
			
		
		}
		else {
			
			
		}
	}
	else {
		
	}
	*/
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

// Saves, in Cookie form!
function SaveData () {
	// Convinience
	var toSavedData = ["0.04",time,money,food,pop,territory,militiamen,swordmen,archers,barrack,farms,well,house,barn,outpost];
	
	set_cookie("save",toSavedData);
	TextboxSave("ftpTextbox",toSavedData);
	
	pushMessage("Saved!");
	
}

// Saves Data, in Local Storage Object form! It's slightly less tasty.
function SaveLocalData () {
	// Convinience
	var toSavedData = ["0.04",time,money,food,pop,territory,militiamen,swordmen,archers,barrack,farms,well,house,barn,outpost];
	if(typeof(Storage) !== "undefined"){
		Set_LocalStorage("saveFile",toSavedData);
		pushMessage("Saved sucessfully");
	} else {
		pushMessage("Not saved sucessfully, unable to access local web storage.");
	}
	
}
// Local Storage Backup! Saves AND Loads!
function Set_LocalStorage (object_name,value) {
	
	var object_value = btoa(JSON.stringify(value));
	localStorage.setItem(object_name,object_value);
	console.log(object_value);
}

function Get_LocalStorage(object_name){
	var object_value = localStorage.getItem(object_name);	
	object_value = atob(object_value);
	return JSON.parse(object_value);
	
}
// TXT Backup
function TextboxSave (Id,Value){
	document.getElementById(Id).value = btoa(Value);
}
function TextboxLoad (Id){
	return atob(document.getElementById(Id).value)
}
// Loads Data, in Cookie form!
function LoadData () {
	var save_data = get_cookie('save');	
	LoadIntoProgram(save_data)
}

function LoadLocalData() {
	var save_data = Get_LocalStorage("saveFile");
	LoadIntoProgram(save_data);
	pushMessage("Loaded!")
}

function LoadIntoProgram(save_data){
	
	var defs_data = ["0.04",0,75,0,0,15,0,0,0,false,0,false,0,0,false];

	if (!save_data) {return};
	var resultData = save_data;
	
	time = resultData[1];
	money = resultData[2];
	food = resultData[3];
	pop = resultData[4];
	territory = resultData[5];
	militiamen = resultData[6];
	swordmen = resultData[7];
	archers = resultData[8];
	barrack = resultData[9];
	farms = resultData[10];
	well = resultData[11];
	house = resultData[12];
	barn = resultData[13];
	outpost = resultData[14];
}
function autoSave(){
	SaveData();
	LoadData();
}

function setAutoSave(delay){
	clearInterval(saveInterval) //Prevents duplicates
	setInterval(autoSave,delay)
}

// Copied Function

//saving mechanics
function set_cookie(cookie_name,value) {
    expiry = new Date();   
    expiry.setTime(new Date().getTime() + (365*24*60*60*1000)); 
    var c_value=escape(btoa(JSON.stringify(value))) + 
    "; expires="+expiry.toUTCString();
    document.cookie=cookie_name + "=" + c_value;
}

function get_cookie(cookie_name) {
    var c_value = document.cookie;

    var c_start = c_value.indexOf(" " + cookie_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(cookie_name + "=");
    }
    if (c_start == -1) return false;
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1) {
        c_end = c_value.length;
    }
    c_value = atob(unescape(c_value.substring(c_start,c_end)));
    return JSON.parse(c_value);
}

