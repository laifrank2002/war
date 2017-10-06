// constructor for a type of worker
function worker(workerName,num,maximum){
	this.name = workerName;
	this.number = num;
	this.max = maximum;
}
// Employment
var workerArray = [];

//

workerArray[1] = new worker("farmer",0,0);
workerArray[2] = new worker("crafter",0,0);
workerArray[3] = new worker("tax collector",0,1);
workerArray[4] = new worker("thinker",0,1);


var employed = 0;
// Button Vars
function calcEmployment (){
	employed = 0;
	for (i=1;i<workerArray.length;i++){
		employed += workerArray[i].number;
	}
}

function hireWorker (arrayIndex){
	calcEmployment();
	if (employed + 1 <= pop){
		workerArray[arrayIndex].number += 1;
	}
}
function fireWorker (arrayIndex){
	if (workerArray[arrayIndex].number - 1 >= 0){
		workerArray[arrayIndex].number -= 1;
	}
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
