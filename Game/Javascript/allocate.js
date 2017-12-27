/*
// Farm Fields Allocation System
	field entity
	1 field = 1 territory
	ranks
		garden = 1 - 9 field
		farm = 10 - 99 fields, enable livestock 
		estate = 100+ fields, enable servants and administration upgrades
	every field requires 1 or more farmers
	formula:
	foodOutput = farmers + fields
	
	fields to allocation
	0 to grain ...
	0 to barley ...
	0 to vegetables ...
*/
// constructor for a type of worker
function worker(workerName,realName,num,maximum){
	this.name = workerName;
	this.displayName = realName;
	this.number = num;
	this.max = maximum;
}
// Data Storage
var workerArray = [];
var fieldsArray = [0,0,0];
// Assignment/Init

workerArray[1] = new worker("farmer","Farmer",0,0);
workerArray[2] = new worker("crafter","Craftsman",0,0);
workerArray[3] = new worker("tax collector","Tax Collector",0,1);
workerArray[4] = new worker("thinker","Philosopher",0,1);

var employed = 0;
var fieldsUsed = 0;
// Button Vars
function calcEmployment (){
	var new_employed = 0;
	for (i=1;i<workerArray.length;i++){
		new_employed += workerArray[i].number;
	}
	employed = new_employed;
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

// Fields
function calcFieldUsage (){
	var new_fieldsUsed = 0;
	for (i=0;i<fieldsArray.length;i++){
		new_fieldsUsed += fieldsArray[i];
	}
	fieldsUsed = new_fieldsUsed;
}
function assignField (arrayIndex){
	calcFieldUsage();
	if (fieldsUsed + 1 <= farm){
		fieldsArray[arrayIndex] += 1;
	}
}
function unassignField (arrayIndex){
	calcFieldUsage();
	if (fieldsUsed - 1 >= 0){
		fieldsArray[arrayIndex] -= 1;
	}
}