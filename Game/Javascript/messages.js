var Messenger = {
	
	messagePanel: document.getElementById("messager"),
	
	pushMessage: function(messageText) {
		var message = document.createElement("p");
		var messageContents = document.createTextNode(timeStamp + messageText);
		message.appendChild(messageContents);
		
		var element = this.messagePanel;
		var child = document.getElementById("messageIntro");
		
		
		this.messagePanel.insertBefore(message, this.messagePanel.childNodes[0])
		// Scrolls Down Automatically
		this.messagePanel.scrollTop += 500;
		messages += 1
	},
	
	clearMessages: function (){
		this.messagePanel.innerHTML = "";
		messages = 0;
	},
}; // end of Messenger();
