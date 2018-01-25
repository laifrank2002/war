// Tab Button Functions
function EconomyTab () {
	clearAllTabs();
	document.getElementById("Economy").style.display = "block";
	// Changes background to a sitting room
	document.body.style.backgroundImage = "url(Images/background_1.jpg)";
}
function MilitaryTab () {
	clearAllTabs();
	document.getElementById("Military").style.display = "block";
	// Changes background to a desk
	document.body.style.backgroundImage = "url(Images/background_2.jpg)";
}
function ExpeditionsTab () {
	clearAllTabs();
	document.getElementById("Expeditions").style.display = "block";
	// Changes background to a map
	document.body.style.backgroundImage = "url(Images/background.jpg)";
}
function BuildingsTab () {
	clearAllTabs();
	document.getElementById("Buildings").style.display = "block";
	// Changes background to a desk
	document.body.style.backgroundImage = "url(Images/background_2.jpg)";
}
function DiplomacyTab () {
	clearAllTabs();
	document.getElementById("Diplomacy").style.display = "block";
	// Changes background to a sitting room
	document.body.style.backgroundImage = "url(Images/background_1.jpg)";
}
function SettingsTab () {
	clearAllTabs();
	document.getElementById("Settings").style.display = "block";
	// Changes background to a different desk
	document.body.style.backgroundImage = "url(Images/background_3.jpg)";
}
function FAQTab () {
	clearAllTabs();
	document.getElementById("FAQ").style.display = "block";
	// Changes background to a different desk
	document.body.style.backgroundImage = "url(Images/background_3.jpg)";
}
function AllocationTab () {
	clearAllTabs();
	document.getElementById("Allocation").style.display = "block";
	// Changes background to a different desk
	document.body.style.backgroundImage = "url(Images/background_2.jpg)";
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
	var Ids = ["Economy","Allocation","Military","Expeditions","Buildings","Diplomacy","Settings","FAQ"]
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