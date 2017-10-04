
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