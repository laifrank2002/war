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
for (i=1;i<buildingArray.length;i++){
	if(buildingArray[i].display){
		insertInfoLine("buildingsDisplay",[buildingArray[i].name,"buyBuilding(" + i + ")","Helper Text"]);
	}
}	
