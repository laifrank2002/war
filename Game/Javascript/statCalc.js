// Calculated Stats
var GDP = 0;
var unemployment = 0;
var safety = 0;
var health = 0;
var happiness = 0;

var hours = 0;
var days = 0;
var years = 0;
var season = "Spring";
var month = "Janurary";

// Calculates time
function calculateDate (time) {
	// YY/MM/DD//HH
	years = Math.floor(time/8760);
	days = Math.floor((time% 8760) / 24) ;
	month = dayToMonth(days);
	hours = Math.floor(time%24);
	
	
	// Calculates Seasons
	if (days <= 30 || days > 300){
		season = "Winter";
	}
	else if(days > 30 && days <=120){
		season = "Spring";
	}
	else if(days > 120 && days <= 210){
		season = "Summer";
	}
	else if(days > 210 && days <= 300){
		season = "Autumn";
	}
	else {
		season = "Spring";
	}
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
	GDP = pop * 8760;
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
	happiness = roundTwo(100 - ((taxRate * 75) ** 2));
}

// Military Power
