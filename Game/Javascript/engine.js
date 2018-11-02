/*
 * New Engine Overhauled, v 0.2
 *
 * Functions:
 * Handle bugs and debugging.
 * 
 */
var Engine = {
	
	_log: true,
	_debug: true,
	
    log: function(msg) {
        if (this._log) {
            console.log(msg);
        }
    },
	
}