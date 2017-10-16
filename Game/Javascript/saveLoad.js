var initTrue = false;
var defs_data = ["0.04",0,75,0,0,15,0,0,0,false,0,false,0,0,false,0,0,0,0,0];

// Saves Data in Local Storage Object form
function SaveLocalData () {
	// Convinience
	var toSavedData = ["0.04",time,money,food,pop,territory,militiamen,swordmen,archers,barrack,farms,well,house,barn,outpost,usedTerritory];
	
	
	if(typeof(Storage) !== "undefined"){
		Set_LocalStorage("SmallWarSave",toSavedData);
		Set_LocalStorage("SmallWarWorkers",workerArray);
		pushMessage("Saved sucessfully");
	} else {
		pushMessage("Not saved sucessfully, unable to access local web storage.");
	}
	
}
function resetGame() {
	if (confirm("Are you sure you want to reset?")){
		var resultData = defs_data;
		
		time = resultData[1];
		money = resultData[2];
		food = resultData[3];
		pop = resultData[4];
		territory = resultData[5];
		militiamen = resultData[6];
		swordmen = resultData[7];
		archers = resultData[8];
		barrack = resultData[9];
		farms = resultData[10];
		well = resultData[11];
		house = resultData[12];
		barn = resultData[13];
		outpost = resultData[14];
		usedTerritory = resultData[15];
		
		workerArray[1] = new worker("farmer","Farmer",0,0);
		workerArray[2] = new worker("crafter","Craftsman",0,0);
		workerArray[3] = new worker("tax collector","Tax Collector",0,1);
		workerArray[4] = new worker("thinker","Philosopher",0,1);
	}
}
// Loads Local Data
function LoadLocalData() {
	var save_data = Get_LocalStorage("SmallWarSave");
	var worker_save_data = Get_LocalStorage("SmallWarWorkers");
	
	if (!save_data) {return};
	
	var resultData = save_data;
	// Misc Vars
	time = resultData[1];
	money = resultData[2];
	food = resultData[3];
	pop = resultData[4];
	territory = resultData[5];
	militiamen = resultData[6];
	swordmen = resultData[7];
	archers = resultData[8];
	barrack = resultData[9];
	farms = resultData[10];
	well = resultData[11];
	house = resultData[12];
	barn = resultData[13];
	outpost = resultData[14];
	usedTerritory = resultData[15];
	// Worker Array
	for (i=1;i<worker_save_data.length;i++){
		workerArray[i].num = worker_save_data[i].num;
	}
	//
	if (initTrue){
		pushMessage("Loaded!");
	}
	else{
		initTrue = true;
	}
}
// TXT Backup
function TextboxSave (Id,Value){
	document.getElementById(Id).value = btoa(Value);
}
function TextboxLoad (Id){
	return atob(document.getElementById(Id).value)
}


// Local Storage Save/Load
function Set_LocalStorage (object_name,value) {
	
	var object_value = btoa(JSON.stringify(value));
	localStorage.setItem(object_name,object_value);
	console.log(object_value);
}

function Get_LocalStorage(object_name){
	var object_value = localStorage.getItem(object_name);	
	object_value = atob(object_value);
	return JSON.parse(object_value);
	
}





