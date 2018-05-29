/*
	The expeditions tab for a small war
*/

// constructor for an enemy
function expeditionEnemy(expeditionEnemyName,militaryPower,resultLoot)
{
	this.name = expeditionEnemyName;
	this.power = militaryPower;
	this.loot = resultLoot;
} // end of constructor expeditionEnemy(expeditionEnemyName,militaryPower,resultLoot)


var expeditionEncounter;

// generates a specific expedition encounter based on random chance
function generateEncounter(){
	
	var expeditionResult = Math.random();
	if (expeditionResult < 0.25){ 
		// Bandits!
		resetEncounter();
		expeditionEncounter = new expeditionEnemy("Bandits",roundTwo( Math.random()*10) + 1,roundTwo( Math.random()*100 ));
		
		document.getElementById("expeditionsBox").innerHTML = "You have met, in the forest, bandits! They have "+ expeditionEncounter.power.toFixed(2) + " power!";
		document.getElementById("attackEncounter").style.display = "block";
	}
	else if (expeditionResult < 0.5){
		resetEncounter();
		var lootPot = roundTwo( Math.random() * 25 ) + 10;
		document.getElementById("expeditionsBox").innerHTML = "You find, in the forest, a chest of $" + lootPot.toFixed(2) + " !";
		money += lootPot;
	}
	else if (expeditionResult < 0.6){
		resetEncounter();
		var lootPot = roundTwo( Math.random() * 9 ) + 1;
		document.getElementById("expeditionsBox").innerHTML = "You manage to find some good land around you that is unclaimed, " + lootPot.toFixed(2) + " territory to be exact!";
		territory += lootPot;
		territory = roundTwo (territory);
	}
	else if (expeditionResult >= 0.6){
		resetEncounter();
		document.getElementById("expeditionsBox").innerHTML = "You find nothing!";
	}
}

// function that determines expedition battles
function attackEncounter(){
	if (attack > expeditionEncounter.power){
		document.getElementById("expeditionsBox").innerHTML = "$" + expeditionEncounter.loot.toFixed(2) + " was captured from the enemy!";
		money += expeditionEncounter.loot;
	}
	else {
		document.getElementById("expeditionsBox").innerHTML = "You lost and had to flee cowardly!";
	}
	
	document.getElementById("attackEncounter").style.display = "none";
}

// function that resets the expedition tab elements
function resetEncounter(){
	document.getElementById("expeditionsBox").innerHTML = "";
	document.getElementById("attackEncounter").style.display = "none";
}