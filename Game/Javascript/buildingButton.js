// Constructors
function building(buildingName,realName,num,cost,territory){
	this.name = buildingName;
	this.displayName = realName;
	this.number = num;
	this.money = cost;
	this.land = territory;
}
function project(projectName,realName,cost,territory){
	this.name = projectName;
	this.displayName = realName;
	this.built = false;
	this.money = cost;
	this.land = territory;
}
function soldier(soldierName,realName,num,attackPower,defensePower,cost){
	this.name = soldierName;
	this.displayName = realName;
	this.number = num;
	this.attack = attackPower;
	this.defense = defensePower;
	this.money = cost;
	this.pop = pop;
}

// numbered building arrays 
var buildingArray = [];

buildingArray[1] = new building("farm","Farm",0,10,1);
buildingArray[2] = new building("house","House",0,75,1);
buildingArray[3] = new building("barn","Barn",0,100,1);

// one off building arrays, ie projects
var projectArray = [];

projectArray[1] = new project("barrack","Barrack",100,2);
projectArray[2] = new project("well","Well",50,1);
projectArray[3] = new project("outpost","Outpost",250,3);

// Soldiers Array
var soldierArray = [];

soldierArray[1] = new soldier("peasant","Peasant",0,1,0,0);
soldierArray[2] = new soldier("swordsman","Swordsman",0,1,1,10);
soldierArray[3] = new soldier("archer","Archer",0,1,1,10);
soldierArray[4] = new soldier("pikeman","Pikeman",0,3,4,20);
soldierArray[5] = new soldier("longbowman","Longbowman",0,5,2,25);
soldierArray[6] = new soldier("horseman","Light Calvary",0,10,3,30);
soldierArray[7] = new soldier("manatarms","Man at Arms",0,5,10,25);
soldierArray[8] = new soldier("knight","Knight",0,20,5,50);
soldierArray[9] = new soldier("crossbowman","Crossbowman",0,10,1,50);
soldierArray[10] = new soldier("halbardier","Halbardier",0,3,10,75);
soldierArray[11] = new soldier("musketeer","Musketeer",0,15,1,75);
soldierArray[12] = new soldier("fieldgun","Field Gun",0,100,5,250);
soldierArray[13] = new soldier("reiter","Reiter",0,10,25,125);
soldierArray[14] = new soldier("hussar","Hussar",0,15,10,100);

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