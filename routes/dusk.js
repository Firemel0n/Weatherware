var data = require("../personalize.json")
var time1_data = require("../personalize.json")
var time2_data = require("../personalize.json")

exports.view = function(req, res){
	console.log(data);
	res.render('dusk',data);	
}