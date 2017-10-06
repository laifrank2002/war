

// Dynamic Data
function update () {
	// calculations
	calculateDate(time);
	calculateStatistics();
	calcAttackDefense();
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
	// Allocation
	for (i=1;i<workerArray.length;i++){
		var plural = "";
		if (workerArray[i].number > 1 || workerArray[i].number == 0) {plural = "s";}
		document.getElementById(workerArray[i].name + "Display").innerHTML = "You have " + workerArray[i].number + " " + workerArray[i].name + plural;
	}	
	// Military
	document.getElementById("militaryPowerDisplay").innerHTML = attack + " ATTK " + defense + " DEFS";
	
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