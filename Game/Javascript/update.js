// Note, abbr is bodged. Standardize for all numbers abbr. Must Fix added and really small numbers.
var overviewTable = document.getElementById("overviewTable");
var notationSetting = 3;


// Quick shortcut function to add commas to numbers and or shorten them
function abbr (number)
{
	return numToReadable(notationSetting,number);
}

// Quickly insert table row
function insertTableRow (table,changetext)
{
	var dataTable = document.getElementById(table);
    var dataRow = dataTable.insertRow(document.getElementById(table).rows.length);

    for (column=0;column<changetext.length;column++)
	{
    	var dataCell = dataRow.insertCell(column);
        dataCell.innerHTML = changetext[column];        
    }
}

// Inserts Infoline Object for the HTML after an element
// Key: changetext 0: p name, 1: onclick fcn, 2: tooltiptext, 3: button text
function insertInfoLine (appendAfterId, changetext){
	var infoLine = document.createElement('div');
	var anchorElement = document.getElementById (appendAfterId);
	
	infoLine.className = "infoLine";
	
	// the text to be inserted
	var infoLineInnerHTMLText = "<p type = 'text' id ='" 
		+ changetext[0] 
		+ "Display'></p><div class='tooltip'><button type='button' onclick='" 
		+ changetext[1]
		+ "' id ='" 
		+ changetext[0] 
		+ "DisplayButton'>" 
		+ changetext[3] 
		+ "</button> \
		<span class='tooltiptext'>" 
		+ changetext[2] 
		+ "</span>";
	
	// 
	infoLine.innerHTML = infoLineInnerHTMLText;
	
	var anchorElement = document.getElementById (appendAfterId);
	insertAfter(infoLine, anchorElement);

	
}
// Quickly change a row of a table
function changeTableRow(table,row,changetext)
{
	for (column=0;column<changetext.length;column++)
	{
		document.getElementById(table).rows[row].cells[column].innerHTML = changetext[column];
    }
}
// Main Dynamic Data, updates every second
function update () {
	
	// updates calculations for numbers
	calculateDate(time);
	calculateStatistics();
	calcAttackDefense();
	
	// Economy
	
	// Overview tab
	document.getElementById("timeDisplay").innerHTML = hours + "h, " + month + ", " + abbr(years) + numberSuffix(years) + " Year"  + ", " + season;
	document.getElementById("speedDisplay").innerHTML = speed + " is the current speed";
	
	// Overview Table
	changeTableRow("overviewTable",1
		,["money"
		,abbr(money)
		," "
		,addedmoney.toFixed(2) + "/h"]);
	changeTableRow("overviewTable",2
		,["food"
		,abbr(food)
		,"/"+abbr(maxfood)
		,addedfood.toFixed(2) + "/h"]);
	changeTableRow("overviewTable",3
		,["population"
		,Math.round(abbr(pop))
		,"/"+Math.round(abbr(maxpop))
		,addedpop.toFixed(2) + "/h"]);
	changeTableRow("overviewTable",4
		,["territory"
		,abbr(usedTerritory),
		"/"+abbr(territory),
		" "]);
	changeTableRow("overviewTable",5
		,["research"
		,abbr(research)
		," "
		,abbr(addedresearch)+"/h"]);
	
	// Automatically updates resources table
	
	for (i=1;i<resourceArray.length;i++)
	{
		changeTableRow("resourcesTable",i,[resourceArray[i].displayName,resourceArray[i].number,resourceArray[i].change,resourceArray[i].money]);
	}
	changeTableRow("resourcesTable",1,[resourceArray[1].displayName,resourceArray[1].number,resourceArray[1].change,resourceArray[1].weight]);
	// Fun Stats
	document.getElementById("GDPDisplay").innerHTML = "$" + abbr(GDP) + " is the GDP of your nation!";
	document.getElementById("unemploymentDisplay").innerHTML = unemployment.toFixed(2) + "% is the unemployment rate of your nation!";
	document.getElementById("safetyDisplay").innerHTML = safety.toFixed(2) + "% is how safe citizens think of your nation!";
	document.getElementById("healthDisplay").innerHTML = health.toFixed(2) + "% is how much healthcare citizens get in your nation!";
	document.getElementById("happinessDisplay").innerHTML = happiness.toFixed(2) + "% is how happy people are with your regime!";
	// Allocation
	for (i=1;i<workerArray.length;i++){
		var plural = "";
		if (workerArray[i].number > 1 || workerArray[i].number == 0) {plural = "s";}
		document.getElementById(workerArray[i].name + "Display").innerHTML = "You have " + workerArray[i].number + " " + workerArray[i].displayName + plural;
	}	
	// Military
	document.getElementById("militaryPowerDisplay").innerHTML = attack + " attack " + defense + " defense";
	
	document.getElementById("militiamenDisplay").innerHTML = "You have " + militiamen + " militiamen";
	
	// Hiding until not needed
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
	
	// Automatically updates buildings whenever I add new things to that array. But only buildings!
	
	for (i=1;i<buildingArray.length;i++){ 
		var plural = "";
		if (buildingArray[i].number > 1 || buildingArray[i].number == 0) {plural = "s";}
		document.getElementById(buildingArray[i].name + "Display").innerHTML = "There are " + buildingArray[i].number + " " + buildingArray[i].displayName + plural + " in the kingdom.";
	}	
	
	
	
}