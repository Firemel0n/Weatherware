var data = require("../config.json");
var temp_data = require("../temp.json");
var letter_data = require("../temp.json");

exports.config_settings = function(req, res) { 

	var temp = req.body.temp;
	var notif = req.body.notif;
	var letter = req.body.letter;
	data.temp = temp;
	data.notif = notif;
	data.letter = letter;
	if (temp == "fahrenheit"){
		temp_data.temp = 70;
		temp_data.exact = 72;
		letter_data.letter = "F"; 
	}
	else if (temp == "celsius") {
		temp_data.temp = 20;
		temp_data.exact = 22;
		letter_data.letter = "C";
	}
	res.render("index",temp_data)
	
}