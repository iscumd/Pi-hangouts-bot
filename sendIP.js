var network = require('network');
var hangoutsBot = require("hangouts-bot");
var botName = "pibot"
var zenith = new hangoutsBot('iscpibots@gmail.com','********');
var connect = 0;
zenith.on('online',function(){

	zenith.on('message', function(from, message) {
		console.log(from + ">> " + message);
		switch(message.toLowerCase()){
			case 'ip':
				network.get_private_ip(function(err,ip){
					if(err){
						console.log("no ip" + err);
						connect = 0;
					}
					else{
						console.log(ip);
						connect = 1;
						zenith.sendMessage(from, botName + ' ip address is: ' + ip);
						console.log("message sent");
			
					}
				});
				break;
			case 'yeti':
				zenith.sendMessage(from, 'I think you meant to say garbage');
				break;
			case 'hello':
				zenith.sendMessage(from, 'hello there!');
				break;
			case 'help':
				zenith.sendMessage(from, 'The commands I know are : ip,yeti,help,hello');
				break;
			default:
				zenith.sendMessage(from,'Try asking for help!');
		}
	});
});
