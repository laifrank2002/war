// Constructors
function building(buildingName,realName,num,cost,territory,isDisplayed){
	this.name = buildingName;
	this.displayName = realName;
	this.number = num;
	this.money = cost;
	this.land = territory;
	this.display = isDisplayed;
}
function project(projectName,realName,cost,territory,isDisplayed){
	this.name = projectName;
	this.displayName = realName;
	this.built = false;
	this.money = cost;
	this.land = territory;
	this.display = isDisplayed;
}
function soldier(soldierName,realName,num,attackPower,defensePower,cost,isDisplayed){
	this.name = soldierName;
	this.displayName = realName;
	this.number = num;
	this.attack = attackPower;
	this.defense = defensePower;
	this.money = cost;
	this.display = isDisplayed;
}

// numbered building arrays 
var buildingArray = [];

buildingArray[1] = new building("farm","Farm",0,10,1,true);
buildingArray[2] = new building("house","House",0,75,1,true);
buildingArray[3] = new building("barn","Barn",0,100,1,true);
buildingArray[4] = new building("shack","Shack",0,10,1,true);
buildingArray[5] = new building("countryHouse","Country House",0,50,2,true);
buildingArray[6] = new building("townHouse","Town House",0,100,1,true);
buildingArray[7] = new building("apartment","Apartment",0,1000,2,true);
// testing buildingArray[8] = new building("undef","undef",0,0,0,true);
// one off building arrays, ie projects
var projectArray = [];

projectArray[1] = new project("barrack","Barracks",100,2,true);
projectArray[2] = new project("well","Well",50,1,false);
projectArray[3] = new project("outpost","Outpost",250,2,false);
projectArray[4] = new project("stable","Stables",500,2,false);
projectArray[5] = new project("armory","Armory",500,1,false);
projectArray[6] = new project("keep","Keep",1000,3,false);
projectArray[7] = new project("range","Archery Range",500,4,false);
projectArray[8] = new project("smallarms","Small Arms Shop",1000,1,false);
projectArray[9] = new project("artillery","Artillery Foundary",1500,3,false);
projectArray[10] = new project("academy","Military Academy",2000,2,false);

// Soldiers Array
var soldierArray = [];

soldierArray[1] = new soldier("peasant","Peasant",0,1,0,0,true);
soldierArray[2] = new soldier("swordsman","Swordsman",0,1,1,10,false);
soldierArray[3] = new soldier("archer","Archer",0,1,1,10,false);
soldierArray[4] = new soldier("pikeman","Pikeman",0,3,4,20,false);
soldierArray[5] = new soldier("longbowman","Longbowman",0,5,2,25,false);
soldierArray[6] = new soldier("horseman","Light Calvary",0,10,3,30,false);
soldierArray[7] = new soldier("manatarms","Man at Arms",0,5,10,25,false);
soldierArray[8] = new soldier("knight","Knight",0,20,5,50,false);
soldierArray[9] = new soldier("crossbowman","Crossbowman",0,10,1,50,false);
soldierArray[10] = new soldier("halbardier","Halbardier",0,3,10,75,false);
soldierArray[11] = new soldier("musketeer","Musketeer",0,15,1,75,false);
soldierArray[12] = new soldier("fieldgun","Field Gun",0,100,5,250,false);
soldierArray[13] = new soldier("reiter","Reiter",0,10,25,125,false);
soldierArray[14] = new soldier("hussar","Hussar",0,15,10,100,false);
soldierArray[15] = new soldier("guardsman","Guardsman",0,15,10,150,false);

// Purchasing Functions


// Generalized Building Function
function buyBuilding(arrayIndex) {

	// Checking if user has enough money and territory to buy a building
	if (money >= buildingArray[arrayIndex].money && usedTerritory + buildingArray[arrayIndex].land <= territory) {
		money -= buildingArray[arrayIndex].money;
		usedTerritory += buildingArray[arrayIndex].land;
		
		money = roundTwo(money);
		usedTerritory=roundTwo(usedTerritory);
		buildingArray[arrayIndex].number += 1;
	}
}
// Unstandardized Purchasing Functions for Soldiers 
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

// Unstandardized Purchasing Functions for Buildings
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