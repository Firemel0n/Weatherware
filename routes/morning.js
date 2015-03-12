var data = require("../personalize.json")

exports.view = function(req, res){
	console.log(data);
	res.render('morning',data);	
}