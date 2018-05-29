/*

	Food Seperation

*/
// Constructors
function resource (resourceName,realName,num,delta,cost,storageSpace,isDisplayed){
	this.name = resourceName;
	this.displayName = realName;
	this.number = num;
	this.change = delta;
	this.money = cost;
	this.weight = storageSpace;
	this.display = isDisplayed;
}
function food (foodName,realName,num,delta,cost,storageSpace,caloricValue,tasteValue,isDisplayed){
	this.name = foodName;
	this.displayName = realName;
	this.number = num;
	this.change = delta;
	this.money = cost;
	this.weight = storageSpace;
	this.nutrition = caloricValue;
	this.taste = tasteValue;
	this.display = isDisplayed;
}
function good (goodName,realName,num,delta,cost,desirability,consumptionLevel,consumptionAmount,isDisplayed){
	this.name = goodName;
	this.displayName = realName;
	this.number = num;
	this.change = delta;
	this.money = cost;
	this.desire = desirability;
	this.level = consumptionLevel;
	this.amount = consumptionAmount;
	this.display = isDisplayed;
}
// Storage
var totalSpace = 100;
// Storage Tallies
var consumerGoods = 0;
var totalGoods = 0;
var occupiedSpace = 0;
var availibleSpace = 0;

// Raw Materials
var resourceArray = [];

resourceArray[1] = new resource("wood","Wood",100,0,1,1,true);
resourceArray[2] = new resource("paper","Paper",0,0,3,1,true);
resourceArray[3] = new resource("plank","Planks",0,0,2,1,true);
resourceArray[4] = new resource("stone","Stone",20,0,1,1,true);
resourceArray[5] = new resource("brick","Bricks",0,0,2,1,true);
resourceArray[6] = new resource("marble","Marble",0,0,3,1,true);
resourceArray[7] = new resource("iron","Iron",0,0,3,1,true);
resourceArray[8] = new resource("nails","Nails",0,0,5,1,true);
resourceArray[9] = new resource("gold","Gold",0,0,10,1,true);
resourceArray[10] = new resource("plaster","Plaster",0,0,5,1,true);
resourceArray[11] = new resource("hide","Hides",0,0,3,1,true);
resourceArray[12] = new resource("leather","Leather",0,0,4,1,true);
resourceArray[13] = new resource("wool","Wool",0,0,2,1,true);
resourceArray[14] = new resource("fabric","Fabrics",0,0,5,1,true);
resourceArray[15] = new resource("silk","Silk",0,0,10,1,true);
resourceArray[16] = new resource("velvet","Velvet",0,0,15,1,true);
resourceArray[17] = new resource("clay","Clay",0,0,1,1,true);


// Food
var totalFoods = 0;

var grainFoods = 0;
var barleyFoods = 0;

var vegetableFoods = 0;
var appleFoods = 0;
var grapeFoods = 0;

var whiskeyFoods = 0;
var beerFoods = 0;
var ciderFoods = 0;
var wineFoods = 0;
// Consumer Goods

var furnitureGoods = 0;
var potteryGoods = 0;
var beerGoods = 0;
var wineGoods = 0;
var booksGoods = 0;