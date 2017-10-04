// Employment
var farmer = 0;
var crafter = 0;
var taxman = 0;
var thinker = 0;

var employed = 0;
// Button Vars
function calcEmployment (){
	employed = farmer + crafter + taxman + thinker
}

// Hire/Fires
function hireFarmer() {
	calcEmployment();
	if (employed + 1 <= pop){
		farmer += 1;
	}
}
function fireFarmer() {
	if (farmer - 1 >= 0){
		farmer -= 1;
	}
}

function hireCrafter () {
	calcEmployment();
	if (employed + 1 <= pop){
		crafter += 1;
	}
}
function fireCrafter () {
	if (crafter - 1 >= 0){
		crafter -= 1;
	}
}

function hireTaxman () {
	calcEmployment();
	if (employed + 1 <= pop){
		taxman += 1;
	}
}
function fireTaxman () {
	if (taxman - 1 >= 0){
		taxman -= 1;
	}
}

function hireThinker () {
	calcEmployment();
	if (employed + 1 <= pop){
		thinker += 1;
	}
}
function fireThinker () {
	if (thinker - 1 >= 0){
		thinker -= 1;
	}
}
