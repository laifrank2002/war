// Tab Button Functions
function EconomyTab () {
	clearAllTabs();
	document.getElementById("Economy").style.display = "block";
}
function MilitaryTab () {
	clearAllTabs();
	document.getElementById("Military").style.display = "block";
}
function ExpeditionsTab () {
	clearAllTabs();
	document.getElementById("Expeditions").style.display = "block";
}
function BuildingsTab () {
	clearAllTabs();
	document.getElementById("Buildings").style.display = "block";
}
function DiplomacyTab () {
	clearAllTabs();
	document.getElementById("Diplomacy").style.display = "block";
}
function SettingsTab () {
	clearAllTabs();
	document.getElementById("Settings").style.display = "block";
}
function AllocationTab () {
	clearAllTabs();
	document.getElementById("Allocation").style.display = "block";
}
// So I don't have to rewrite this code
function clearAllTabs () {
	tabAll(false)

}

function showAllTabs () {
	tabAll(true)

}
// For Convience's Sake
function tabAll(display){
	// Array containing Ids, add here to add more Infoboxes
	var Ids = ["Economy","Allocation","Military","Expeditions","Buildings","Diplomacy","Settings"]
	if (display){ // Open
		for (i = 0; i < Ids.length; i++){
			document.getElementById(Ids[i]).style.display = "block";
		}
	}
	else{ // Close
		for (i = 0; i < Ids.length; i++){
			document.getElementById(Ids[i]).style.display = "none";
		}
	}
}
// Initialization
EconomyTab();