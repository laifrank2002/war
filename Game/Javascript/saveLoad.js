
//saving mechanics
function set_cookie(cookie_name,value) {
    expiry = new Date();   
    expiry.setTime(new Date().getTime() + (365*24*60*60*1000)); 
    var c_value=escape(btoa(JSON.stringify(value))) + 
    "; expires="+expiry.toUTCString();
    document.cookie=cookie_name + "=" + c_value;
}

function get_cookie(cookie_name) {
    var c_value = document.cookie;

    var c_start = c_value.indexOf(" " + cookie_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(cookie_name + "=");
    }
    if (c_start == -1) return false;
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1) {
        c_end = c_value.length;
    }
    c_value = atob(unescape(c_value.substring(c_start,c_end)));
    return JSON.parse(c_value);
}

// Local Storage Backup! Saves AND Loads!
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


// Saves, in Cookie form!
function SaveData () {
	// Convinience
	var toSavedData = ["0.04",time,money,food,pop,territory,militiamen,swordmen,archers,barrack,farms,well,house,barn,outpost];
	
	set_cookie("save",toSavedData);
	TextboxSave("ftpTextbox",toSavedData);
	
	pushMessage("Saved!");
	
}

// Saves Data, in Local Storage Object form! It's slightly less tasty.
function SaveLocalData () {
	// Convinience
	var toSavedData = ["0.04",time,money,food,pop,territory,militiamen,swordmen,archers,barrack,farms,well,house,barn,outpost];
	if(typeof(Storage) !== "undefined"){
		Set_LocalStorage("SmallWarSave",toSavedData);
		Set_LocalStorage("SmallWarWorkers",workerArray);
		pushMessage("Saved sucessfully");
	} else {
		pushMessage("Not saved sucessfully, unable to access local web storage.");
	}
	
}
// Loads Data, in Cookie form!
function LoadData () {
	var save_data = get_cookie('save');	
	LoadIntoProgram(save_data)
}
// Loads Local Data
function LoadLocalData() {
	var save_data = Get_LocalStorage("SmallWarSave");
	var worker_save_data = Get_LocalStorage("SmallWarWorkers");
	
	var defs_data = ["0.04",0,75,0,0,15,0,0,0,false,0,false,0,0,false,0,0,0,0];
	
	
	if (!save_data) {return};
	
	var resultData = save_data;
	
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
	
	//
	for (i=1;i<worker_save_data.length;i++){
		workerArray[i] = worker_save_data[i];
	}
	//
	pushMessage("Loaded!")
}
// TXT Backup
function TextboxSave (Id,Value){
	document.getElementById(Id).value = btoa(Value);
}
function TextboxLoad (Id){
	return atob(document.getElementById(Id).value)
}



