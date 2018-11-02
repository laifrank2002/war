var initTrue = false;
var defs_data = ["0.08",0,75,0,0,15,0,0,0,false,0,false,0,0,false,0,0,0,0,0,0];

// Saves Data in Local Storage Object form
function SaveLocalData () {
	// Convinience
	var toSavedData = ["0.08",game.time,money,food,pop,territory,usedTerritory];
	
	if(typeof(Storage) !== "undefined"){
		Set_LocalStorage("SmallWarSave",toSavedData);
		Set_LocalStorage("SmallWar_Inventory",Inventory.exportData());
		Set_LocalStorage("SmallWarWorkers",workerArray);
		Set_LocalStorage("SmallWarBuildings",buildingArray);
		Set_LocalStorage("SmallWarProjects",projectArray);
		Set_LocalStorage("SmallWarSoldiers",soldierArray);
		Messenger.pushMessage("Saved sucessfully");
	} 
	else 
	{
		Messenger.pushMessage("Not saved sucessfully, unable to access local web storage.");
	}
	
}
function resetGame() { // redo this part 
	if (confirm("Are you sure you want to reset? This will delete ALL of your data!")){
		var resultData = defs_data;
		
		game.time = resultData[1];
		money = resultData[2];
		food = resultData[3];
		pop = resultData[4];
		territory = resultData[5];
		usedTerritory = resultData[6];
		
		// set all other data to null
		Set_LocalStorage("SmallWarSave",null);
		Set_LocalStorage("SmallWar_Inventory",Inventory.exportData());
		Set_LocalStorage("SmallWarWorkers",null);
		Set_LocalStorage("SmallWarBuildings",null);
		Set_LocalStorage("SmallWarProjects",null);
		Set_LocalStorage("SmallWarSoldiers",null);

	}
}
// Loads Local Data
function LoadLocalData() {
	var save_data = Get_LocalStorage("SmallWarSave");
	var worker_save_data = Get_LocalStorage("SmallWarWorkers");
	var building_save_data = Get_LocalStorage("SmallWarBuildings");
	var inventory_data = Get_LocalStorage("SmallWar_Inventory");
	
	if (!save_data) {return};
	
	var resultData = save_data;
	// Misc Vars
	game.time = resultData[1];
	money = resultData[2];
	food = resultData[3];
	pop = resultData[4];
	territory = resultData[5];
	usedTerritory = resultData[6];
	
	// Inventory
	if (inventory_data)
	{
		Inventory.importData(inventory_data);
	}
	
	if (worker_save_data) 
	{
		// Worker Array
		for (i=1;i<worker_save_data.length;i++){
			workerArray[i].number = worker_save_data[i].number;
		}
	}
	
	if (building_save_data) 
	{
		// Building Array
		for (i=1;i<building_save_data.length;i++){
			buildingArray[i].number = building_save_data[i].number;
		}	
	}

	if (initTrue){
		Messenger.pushMessage("Loaded!");
	}
	else
	{
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
}

function Get_LocalStorage(object_name){
	var object_value = localStorage.getItem(object_name);	
	object_value = atob(object_value);
	if (object_value)
	{
		Engine.log(object_value);
		return JSON.parse(object_value);
	}
}





