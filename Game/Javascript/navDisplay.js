// Tab Button Functions
function EconomyTab () {
	clearAllTabs();
	document.getElementById("Economy").style.display = "block";
	
}
function MilitaryTab () {
	clearAllTabs();
	document.getElementById("Military").style.display = "block";
	
}
function BuildingsTab () {
	clearAllTabs();
	document.getElementById("Buildings").style.display = "block";
	
}
function MessagesTab () {
	clearAllTabs();
	document.getElementById("Messages").style.display = "block";
}

// So I don't have to rewrite this code
function clearAllTabs () {
	document.getElementById("Economy").style.display = "none";
	document.getElementById("Military").style.display = "none";
	document.getElementById("Buildings").style.display = "none";
	document.getElementById("Messages").style.display = "none";
}

function showAllTabs () {
	document.getElementById("Economy").style.display = "block";
	document.getElementById("Military").style.display = "block";
	document.getElementById("Buildings").style.display = "block";
	document.getElementById("Messages").style.display = "block";
}