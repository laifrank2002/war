/*
	Add Inventory
	Food Seperation

*/
// Constructors
function Resource (resourceName,realName,num,weight,type,isDisplayed){
	this.name = resourceName;
	this.displayName = realName;
	this.number = (num || 0);
	this.weight = (weight || 1); 
	this.type = (type || "misc");
	this.display = (isDisplayed || true);
	this.change = 0;
	this.negativeFlag = false;
}

/*
function Food (foodName,realName,num,delta,cost,storageSpace,caloricValue,tasteValue,isDisplayed){
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
function Good (goodName,realName,num,delta,cost,desirability,consumptionLevel,consumptionAmount,isDisplayed){
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
*/
// Storage
var totalSpace = 100;
// Storage Tallies
var consumerGoods = 0;
var totalGoods = 0;
var occupiedSpace = 0;
var availibleSpace = 100;

// Raw Materials
var resourceArray = [];

/*
resourceArray[1] = new Resource("wood","Wood",100,0,1,1,true);
resourceArray[2] = new Resource("paper","Paper",0,0,3,1,true);
resourceArray[3] = new Resource("plank","Planks",0,0,2,1,true);
resourceArray[4] = new Resource("stone","Stone",20,0,1,1,true);
resourceArray[5] = new Resource("brick","Bricks",0,0,2,1,true);
resourceArray[6] = new Resource("marble","Marble",0,0,3,1,true);
resourceArray[7] = new Resource("iron","Iron",0,0,3,1,true);
resourceArray[8] = new Resource("nails","Nails",0,0,5,1,true);
resourceArray[9] = new Resource("gold","Gold",0,0,10,1,true);
resourceArray[10] = new Resource("plaster","Plaster",0,0,5,1,true);
resourceArray[11] = new Resource("hide","Hides",0,0,3,1,true);
resourceArray[12] = new Resource("leather","Leather",0,0,4,1,true);
resourceArray[13] = new Resource("wool","Wool",0,0,2,1,true);
resourceArray[14] = new Resource("fabric","Fabrics",0,0,5,1,true);
resourceArray[15] = new Resource("silk","Silk",0,0,10,1,true);
resourceArray[16] = new Resource("velvet","Velvet",0,0,15,1,true);
resourceArray[17] = new Resource("clay","Clay",0,0,1,1,true);
*/

/*
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
*/

