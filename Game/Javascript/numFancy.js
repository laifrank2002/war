// Transforms numbers into fancy texts 

// Master Switchboard Function 
function numToReadable (notationNumber,numberText){
	// 1 sci
	if (notationNumber === 1){
		return sci_Notation (numberText);
	}
	// 2 egn
	if (notationNumber === 2){
		return usa_Notation (numberText);
	}
	// 3 usa
	if (notationNumber === 3){
		return usa_Notation (numberText);
	}
	// 4 eur
	if (notationNumber === 4){
		return eur_Notation (numberText);
	}
	// 5 txt
	if (notationNumber === 5){
		return usa_Notation (numberText);
	}
}
// 9.99e10
function sci_Notation (numberText){
	// check if passed in number is valid
	if (!isNaN(numberText)){
		return numberText.toExponential(2);
	}
	else {
		return "NaN";
	}
}
// 99.99e9 TBI
// 9,999,999,999
function usa_Notation (numberText){  

	var newNum = numberText.toString().substring(0,decimal_Finder(numberText));
	var decNum = numberText.toString().substring(decimal_Finder(numberText),numberText.toString().length)
	if (!isNaN(newNum)){
   
		if ((newNum.toString()).length > 3){
			var newText = "";
            var newTextNum;
            var reversedText = "";
			// Reverses-Number at start
            for (i = (newNum.toString()).length; i>0; i--){
            	reversedText += (newNum.toString()).substring(i,i-1);
            }
            newText = "";
            newTextNum = reversedText.length;
            
            // Takes and adds ","s
            for (i = 0; i<newTextNum; i++){
                if ((i) % 3 === 0 && i != 0){
            		newText += ","  + (reversedText.toString()).substring(i,i+1);
                }
                else {
                	newText += + (reversedText.toString()).substring(i,i+1);
                }
                
            }
            reversedText = "";
            // Re-reverses
            for (i = (newText.toString()).length; i>0; i--){
            	reversedText += (newText.toString()).substring(i,i-1);
            }
            newText = reversedText;
            return newText + decNum;
		}
		else {
			return numberText.toString();
		}
	}
	else {
		return "NaN";
	}
}

// 9.999.999.999
function eur_Notation (numberText){  

	var newNum = numberText.toString().substring(0,decimal_Finder(numberText));
	var decNum = numberText.toString().substring(decimal_Finder(numberText),numberText.toString().length)
	if (!isNaN(newNum)){
   
		if ((newNum.toString()).length > 3){
			var newText = "";
            var newTextNum;
            var reversedText = "";
			// Reverses-Number at start
            for (i = (newNum.toString()).length; i>0; i--){
            	reversedText += (newNum.toString()).substring(i,i-1);
            }
            newText = "";
            newTextNum = reversedText.length;
            
            // Takes and adds ","s
            for (i = 0; i<newTextNum; i++){
                if ((i) % 3 === 0 && i != 0){
            		newText += "."  + (reversedText.toString()).substring(i,i+1);
                }
                else {
                	newText += + (reversedText.toString()).substring(i,i+1);
                }
                
            }
            reversedText = "";
            // Re-reverses
            for (i = (newText.toString()).length; i>0; i--){
            	reversedText += (newText.toString()).substring(i,i-1);
            }
            newText = reversedText;
            return newText + decNum;
		}
		else {
			return numberText.toString();
		}
	}
	else {
		return "NaN";
	}
}

// 9.99 billion
function txt_Notation(numberText){
	// Abbreviations for texts
	
}
// finds the decimal place n
function decimal_Finder (num){
	
	for (i = 0; i < num.toString().length-1; i++){
    	if (((num.toString()).substring(i,i+1)) === "."){
        	return i;
        }
        
    }
    return num.toString().length;
}