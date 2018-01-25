// Update Helper Text

document.getElementById("attackEncounter").style.display = "none";
LoadLocalData();

// Sets up table for Overview
insertTableRow("overviewTable",["resource","amount","max","+gain/h"]);
insertTableRow("overviewTable",["resource","amount","max","+gain/h"]);
insertTableRow("overviewTable",["resource","amount","max","+gain/h"]);
insertTableRow("overviewTable",["resource","amount","max","+gain/h"]);
insertTableRow("overviewTable",["resource","amount","max","+gain/h"]);

// Sets up table for Economy

// Sets up all of the infolines automatically

// Sets Buildings Array
var buildingArray_helperText = ["Blank","Produces 1 food","Houses 3 people","Stores 500 food","Houses 1 person","Houses 3 people and produces 1 food","Houses 4 people","Houses 10 people"];
// Failsafe in case I forgot to add in some txt prompts.
if (buildingArray_helperText.length < buildingArray.length){
	for (i=buildingArray_helperText.length; i<buildingArray.length; i++){
		buildingArray_helperText.push("blank, this desc. is not completed");
	}
}

for (i=1;i<buildingArray.length;i++){
	if(buildingArray[i].display){
		insertInfoLine("buildingsDisplay",[buildingArray[i].name,"buyBuilding(" + i + ")",buildingArray_helperText[i]," $"+buildingArray[i].money + ", " + buildingArray[i].land + " land "]);
	}
}	



// THIS Really shouldn't be here, but we're putting it here now because of the position advantages at the end of the HTML file.
// Secondary updates, such as oninputs 
var taxesSlider = document.getElementById("taxesSlider");
var taxesDisplay = document.getElementById("taxesDisplay");

// Updates when user moves slider
taxesSlider.oninput = function() {
    taxesDisplay.innerHTML = this.value + "%";
}
