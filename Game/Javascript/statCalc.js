// Calculated Stats
var GDP = 0;
var unemployment = 0;
var safety = 0;
var health = 0;
var happiness = 0;

function calculateDate (time) {
	years = Math.floor(time/365);
	days = time % 365;
}

function calculateUnemployment (employment,population) {
	calcEmployment(); // Constant Update Calculate Employment
	unemployment = (population - employment)/population * 100;
	if (population <= 0){
		unemployment = 0; // Exception solution so value is not NaN
	}
}

function calculateStatistics() { // Meaningless stats
	
	calculateUnemployment (employed,pop);
	GDP = addedmoney * 365;
	GDP = roundTwo(GDP);
	
	// Statistics
	if (militiamen == 0){
		safety = 0;
	}
	else{
		safety = roundTwo((militiamen) / (pop)*100);
		if (safety > 100){
			safety = 100;
		}
	}
	health = 0;
	happiness = 100;
}

// Military Power
