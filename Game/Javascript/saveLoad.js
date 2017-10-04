
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


