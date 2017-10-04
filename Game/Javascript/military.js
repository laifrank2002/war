// Military Stats
var attack = 0;
var defense = 0;
// Military 
var militiamen = 0;
var swordmen = 0;
var archers = 0;

function calcAttackDefense (){
	attack = militiamen + swordmen + (archers * 2);
	defense = militiamen + (swordmen * 2) + archers;
}