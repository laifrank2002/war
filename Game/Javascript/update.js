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
// deletes an unneeded infoLine
function removeInfoLine(id)
{
	document.parentNode.removeChild(document.getElementById(id));
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
	calculateStatistics();
	calcAttackDefense();
	
	// Economy
	

	
	// Automatically updates resources table
	
	for (i=1;i<resourceArray.length;i++)
	{
		changeTableRow("resourcesTable",i,[resourceArray[i].displayName,resourceArray[i].number,resourceArray[i].change,resourceArray[i].money]);
	}
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
		// if element is not found, making a new one.
		if (document.getElementById(workerArray[i].name + "Display") != null)
		{
			document.getElementById(workerArray[i].name + "Display").innerHTML = "You have " + workerArray[i].number + " " + workerArray[i].displayName + plural;
		}
		else 
		{
			// create a new element.
		}
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

	// Automatically updates buildings whenever I add new things to that array. But only buildings!
	
	for (i=1;i<buildingArray.length;i++){ 
		var plural = "";
		if (buildingArray[i].number > 1 || buildingArray[i].number == 0) {plural = "s";}
		document.getElementById(buildingArray[i].name + "Display").innerHTML = "There are " + buildingArray[i].number + " " + buildingArray[i].displayName + plural + " in the kingdom.";
	}	
	
}

