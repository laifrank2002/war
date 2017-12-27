// Calculates whether it's the 1st, 2nd, 3rd, 4th, 5th.. 31st... from a number
function numberSuffix(num){
	var lastDigit = num % 10;
	if(lastDigit == 1){
		return "st";
	}
	else if(lastDigit == 2){
		return "nd";
	}
	else if(lastDigit == 3){
		return "rd";
	}
	else{
		return "th";
	}
}
// Given a day of the year from 1 to 365, calculate the month,day stamp.
function dayToMonth(time){
	var day = time;
	
	switch (true){
    case (day <= 31):
        return "Janurary " + day + numberSuffix(day);
        break;
	case (day <= 59):
		return "Feburary " + (day - 31) + numberSuffix(day - 31);
		break;
	case (day <= 90):
		return "March " + (day - 59) + numberSuffix(day - 59);
		break;
	case (day <= 120):
		return "April " + (day - 90) + numberSuffix(day - 90);
		break;
    case (day <= 151):
		return "May " + (day - 120) + numberSuffix(day - 120);
		break;
	case (day <= 181):
		return "June " + (day - 151) + numberSuffix(day - 151);
		break;
	case (day <= 212):
		return "July " + (day - 181) + numberSuffix(day - 181);
		break;
	case (day <= 243):
		return "August " + (day - 212) + numberSuffix(day - 212);
		break;
	case (day <= 273):
		return "September " + (day - 243) + numberSuffix(day - 243);
		break;
	case (day <= 304):
		return "October " + (day - 273) + numberSuffix(day - 273);
		break;
	case (day <= 334):
		return "November " + (day - 304) + numberSuffix(day - 304);
		break;
	case (day <= 365):
		return "December " + (day - 334) + numberSuffix(day - 334);
		break;
	default:
        return "Undefineds";
        break;
	}
}