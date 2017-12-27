document.getElementById("attackEncounter").style.display = "none";
LoadLocalData();

var timeInterval = setInterval(passTime,1000);
var fpsInterval = setInterval(update,20);
var saveInterval = setInterval(autoSave,30000);

// Sets up table for Overview
insertTableRow("overviewTable",["resource","amount","max","+gain/d"]);
insertTableRow("overviewTable",["resource","amount","max","+gain/d"]);
insertTableRow("overviewTable",["resource","amount","max","+gain/d"]);
insertTableRow("overviewTable",["resource","amount","max","+gain/d"]);
insertTableRow("overviewTable",["resource","amount","max","+gain/d"]);

// Sets up table for Economy
